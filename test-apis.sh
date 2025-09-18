#!/bin/bash

# Backend API Testing Script (Bash Version)
# Tests all portfolio backend endpoints

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
GRAY='\033[0;90m'
NC='\033[0m' # No Color

# Configuration
BACKEND_URL="https://chaitanya-portfolio-backend.onrender.com"
API_BASE="${BACKEND_URL}/api"
TIMEOUT=30

# Test counters
PASSED=0
FAILED=0
TOTAL=0

echo -e "${CYAN}🚀 Starting Backend API Tests${NC}"
echo -e "${BLUE}📍 Backend URL: ${BACKEND_URL}${NC}"
echo -e "${BLUE}⏱️  Timeout: ${TIMEOUT}s${NC}"
echo -e "${GRAY}============================================================${NC}"

# Function to test an endpoint
test_endpoint() {
    local test_name="$1"
    local method="$2"
    local endpoint="$3"
    local data="$4"

    TOTAL=$((TOTAL + 1))
    echo -e "\n${CYAN}🧪 Testing: ${test_name}${NC}"

    if [ "$method" = "GET" ]; then
        response=$(curl -s -w "\n%{http_code}" --max-time $TIMEOUT "${API_BASE}${endpoint}")
    elif [ "$method" = "POST" ]; then
        response=$(curl -s -w "\n%{http_code}" --max-time $TIMEOUT -X POST \
            -H "Content-Type: application/json" \
            -d "$data" \
            "${API_BASE}${endpoint}")
    elif [ "$method" = "OPTIONS" ]; then
        response=$(curl -s -w "\n%{http_code}" --max-time $TIMEOUT -X OPTIONS \
            -H "Origin: http://localhost:3000" \
            -H "Access-Control-Request-Method: GET" \
            "${API_BASE}${endpoint}")
    fi

    # Extract status code (last line)
    status_code=$(echo "$response" | tail -n1)
    # Extract response body (all but last line)
    response_body=$(echo "$response" | head -n -1)

    if [ "$status_code" -ge 200 ] && [ "$status_code" -lt 300 ]; then
        PASSED=$((PASSED + 1))
        echo -e "${GREEN}✅ ${test_name} - PASSED${NC}"
        if [ -n "$response_body" ]; then
            echo -e "   📊 Response: ${GRAY}$(echo "$response_body" | head -c 100)...${NC}"
        fi
    else
        FAILED=$((FAILED + 1))
        echo -e "${RED}❌ ${test_name} - FAILED${NC}"
        echo -e "   🚨 Status: ${RED}${status_code}${NC}"
        if [ -n "$response_body" ]; then
            echo -e "   📊 Error: ${RED}$(echo "$response_body" | head -c 100)${NC}"
        fi
    fi
}

# Test health check
echo -e "\n${CYAN}🧪 Testing: Health Check${NC}"
TOTAL=$((TOTAL + 1))
health_response=$(curl -s -w "\n%{http_code}" --max-time 10 "$BACKEND_URL")
health_status=$(echo "$health_response" | tail -n1)
if [ "$health_status" -ge 200 ] && [ "$health_status" -lt 300 ]; then
    PASSED=$((PASSED + 1))
    echo -e "${GREEN}✅ Health Check - PASSED${NC}"
else
    FAILED=$((FAILED + 1))
    echo -e "${RED}❌ Health Check - FAILED${NC}"
    echo -e "   🚨 Status: ${RED}${health_status}${NC}"
fi

# Run all API tests
test_endpoint "CORS Configuration" "OPTIONS" "/profile"
test_endpoint "Profile API" "GET" "/profile"
test_endpoint "Experience API" "GET" "/experience"
test_endpoint "Education API" "GET" "/education"
test_endpoint "Skills API" "GET" "/skills"
test_endpoint "Projects API" "GET" "/projects"
test_endpoint "Achievements API" "GET" "/achievements"
test_endpoint "Blog Posts API" "GET" "/blog"
test_endpoint "Blog Post (ID: 1)" "GET" "/blog/1"
test_endpoint "Contacts API" "GET" "/contacts"

# Test contact submission
contact_data='{"name":"Test User","email":"test@example.com","subject":"API Test","message":"This is a test message from the API testing script.","timestamp":"'$(date -u +%Y-%m-%dT%H:%M:%S.%3NZ)'"}'
test_endpoint "Contact Submission" "POST" "/contact" "$contact_data"

# Performance test
echo -e "\n${CYAN}🧪 Testing: Performance Test${NC}"
TOTAL=$((TOTAL + 1))
start_time=$(date +%s%3N)
perf_response=$(curl -s -w "\n%{http_code}" --max-time $TIMEOUT "${API_BASE}/profile")
end_time=$(date +%s%3N)
perf_status=$(echo "$perf_response" | tail -n1)
response_time=$((end_time - start_time))

if [ "$perf_status" -ge 200 ] && [ "$perf_status" -lt 300 ]; then
    PASSED=$((PASSED + 1))
    echo -e "${GREEN}✅ Performance Test - PASSED${NC}"
    echo -e "   📊 Response Time: ${GRAY}${response_time}ms${NC}"
    if [ $response_time -lt 1000 ]; then
        echo -e "   📊 Performance: ${GREEN}Good${NC}"
    elif [ $response_time -lt 3000 ]; then
        echo -e "   📊 Performance: ${YELLOW}Acceptable${NC}"
    else
        echo -e "   📊 Performance: ${RED}Slow${NC}"
    fi
else
    FAILED=$((FAILED + 1))
    echo -e "${RED}❌ Performance Test - FAILED${NC}"
    echo -e "   🚨 Status: ${RED}${perf_status}${NC}"
fi

# Print summary
echo -e "\n${GRAY}============================================================${NC}"
echo -e "${CYAN}📊 TEST SUMMARY${NC}"
echo -e "${GRAY}============================================================${NC}"

success_rate=$(echo "scale=1; $PASSED * 100 / $TOTAL" | bc -l 2>/dev/null || echo "0")

echo -e "${GREEN}✅ Passed: ${PASSED}${NC}"
echo -e "${RED}❌ Failed: ${FAILED}${NC}"
echo -e "${BLUE}📈 Total: ${TOTAL}${NC}"
echo -e "${YELLOW}🎯 Success Rate: ${success_rate}%${NC}"

# Recommendations
echo -e "\n${CYAN}💡 RECOMMENDATIONS:${NC}"
if [ "$success_rate" = "100.0" ]; then
    echo -e "   🎉 All tests passed! Your backend is working perfectly.${GREEN}${NC}"
elif [ $(echo "$success_rate >= 80" | bc -l 2>/dev/null || echo "0") = "1" ]; then
    echo -e "   ⚠️  Most tests passed. Check failed endpoints.${YELLOW}${NC}"
else
    echo -e "   🚨 Multiple failures detected. Backend may be down or misconfigured.${RED}${NC}"
fi

echo -e "\n${CYAN}🔧 TROUBLESHOOTING TIPS:${NC}"
echo -e "${GRAY}   • Check if backend server is running${NC}"
echo -e "${GRAY}   • Verify CORS configuration allows your frontend domain${NC}"
echo -e "${GRAY}   • Check network connectivity and firewall settings${NC}"
echo -e "${GRAY}   • Review backend logs for detailed error information${NC}"

# Exit with appropriate code
if [ $FAILED -gt 0 ]; then
    exit 1
else
    exit 0
fi
