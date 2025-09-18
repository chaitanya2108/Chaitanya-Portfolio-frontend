#!/usr/bin/env node

/**
 * Backend API Testing Script
 * Tests all portfolio backend endpoints to ensure they're working correctly
 */

const axios = require("axios");

// Configuration
const BACKEND_URL =
  process.env.REACT_APP_BACKEND_URL ||
  "https://chaitanya-portfolio-backend.onrender.com";
const API_BASE = `${BACKEND_URL}/api`;
const TIMEOUT = 30000; // 30 seconds

// Colors for console output (without external dependency)
const colors = {
  red: (text) => `\x1b[31m${text}\x1b[0m`,
  green: (text) => `\x1b[32m${text}\x1b[0m`,
  yellow: (text) => `\x1b[33m${text}\x1b[0m`,
  blue: (text) => `\x1b[34m${text}\x1b[0m`,
  cyan: (text) => `\x1b[36m${text}\x1b[0m`,
  gray: (text) => `\x1b[90m${text}\x1b[0m`,
  rainbow: (text) => `\x1b[35m${text}\x1b[0m`,
};

// Test results tracking
let testResults = {
  passed: 0,
  failed: 0,
  total: 0,
  details: [],
};

// Helper function to make API requests
async function makeRequest(method, endpoint, data = null) {
  try {
    const config = {
      method,
      url: `${API_BASE}${endpoint}`,
      timeout: TIMEOUT,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (data) {
      config.data = data;
    }

    const response = await axios(config);
    return {
      success: true,
      status: response.status,
      data: response.data,
      headers: response.headers,
    };
  } catch (error) {
    return {
      success: false,
      status: error.response?.status || "NETWORK_ERROR",
      error: error.message,
      data: error.response?.data || null,
    };
  }
}

// Test function
async function runTest(testName, testFunction) {
  testResults.total++;
  console.log(`\n🧪 Testing: ${colors.cyan(testName)}`);

  try {
    const result = await testFunction();
    if (result.success) {
      testResults.passed++;
      console.log(`${colors.green("✅")} ${testName} - PASSED`);
      if (result.data) {
        const dataStr = JSON.stringify(result.data).substring(0, 100);
        console.log(`   📊 Response: ${colors.gray(dataStr + "...")}`);
      }
    } else {
      testResults.failed++;
      console.log(`${colors.red("❌")} ${testName} - FAILED`);
      console.log(`   🚨 Error: ${colors.red(result.error)}`);
      console.log(`   📊 Status: ${colors.red(result.status)}`);
    }

    testResults.details.push({
      name: testName,
      success: result.success,
      status: result.status,
      error: result.error,
      data: result.data,
    });
  } catch (error) {
    testResults.failed++;
    console.log(`${colors.red("❌")} ${testName} - ERROR`);
    console.log(`   🚨 Exception: ${colors.red(error.message)}`);

    testResults.details.push({
      name: testName,
      success: false,
      status: "EXCEPTION",
      error: error.message,
      data: null,
    });
  }
}

// Individual test functions
async function testProfile() {
  return await makeRequest("GET", "/profile");
}

async function testExperience() {
  return await makeRequest("GET", "/experience");
}

async function testEducation() {
  return await makeRequest("GET", "/education");
}

async function testSkills() {
  return await makeRequest("GET", "/skills");
}

async function testProjects() {
  return await makeRequest("GET", "/projects");
}

async function testAchievements() {
  return await makeRequest("GET", "/achievements");
}

async function testBlogPosts() {
  return await makeRequest("GET", "/blog");
}

async function testBlogPost() {
  // Test getting a specific blog post (assuming ID 1 exists)
  return await makeRequest("GET", "/blog/1");
}

async function testContacts() {
  return await makeRequest("GET", "/contacts");
}

async function testContactSubmission() {
  const testContactData = {
    name: "Test User",
    email: "test@example.com",
    subject: "API Test",
    message: "This is a test message from the API testing script.",
    timestamp: new Date().toISOString(),
  };

  return await makeRequest("POST", "/contact", testContactData);
}

async function testHealthCheck() {
  // Test if the backend is responding
  try {
    const response = await axios.get(BACKEND_URL, { timeout: 10000 });
    return {
      success: true,
      status: response.status,
      data: { message: "Backend is responding" },
    };
  } catch (error) {
    return {
      success: false,
      status: error.response?.status || "NETWORK_ERROR",
      error: error.message,
    };
  }
}

async function testCORS() {
  // Test CORS headers
  try {
    const response = await axios.options(`${API_BASE}/profile`, {
      headers: {
        Origin: "http://localhost:3000",
        "Access-Control-Request-Method": "GET",
      },
    });

    return {
      success: true,
      status: response.status,
      data: {
        corsHeaders: {
          "access-control-allow-origin":
            response.headers["access-control-allow-origin"],
          "access-control-allow-methods":
            response.headers["access-control-allow-methods"],
          "access-control-allow-headers":
            response.headers["access-control-allow-headers"],
        },
      },
    };
  } catch (error) {
    return {
      success: false,
      status: error.response?.status || "NETWORK_ERROR",
      error: error.message,
    };
  }
}

// Performance test
async function testPerformance() {
  const startTime = Date.now();
  const result = await makeRequest("GET", "/profile");
  const endTime = Date.now();
  const responseTime = endTime - startTime;

  return {
    success: result.success,
    status: result.status,
    data: {
      responseTime: `${responseTime}ms`,
      performance:
        responseTime < 1000
          ? "Good"
          : responseTime < 3000
          ? "Acceptable"
          : "Slow",
    },
    error: result.error,
  };
}

// Main test runner
async function runAllTests() {
  console.log(colors.rainbow("🚀 Starting Backend API Tests"));
  console.log(`${colors.blue("📍")} Backend URL: ${colors.blue(BACKEND_URL)}`);
  console.log(`${colors.blue("⏱️")}  Timeout: ${colors.blue(TIMEOUT + "ms")}`);
  console.log(colors.gray("=".repeat(60)));

  // Run all tests
  await runTest("Health Check", testHealthCheck);
  await runTest("CORS Configuration", testCORS);
  await runTest("Profile API", testProfile);
  await runTest("Experience API", testExperience);
  await runTest("Education API", testEducation);
  await runTest("Skills API", testSkills);
  await runTest("Projects API", testProjects);
  await runTest("Achievements API", testAchievements);
  await runTest("Blog Posts API", testBlogPosts);
  await runTest("Blog Post (ID: 1)", testBlogPost);
  await runTest("Contacts API", testContacts);
  await runTest("Contact Submission", testContactSubmission);
  await runTest("Performance Test", testPerformance);

  // Print summary
  console.log("\n" + colors.gray("=".repeat(60)));
  console.log(colors.rainbow("📊 TEST SUMMARY"));
  console.log(colors.gray("=".repeat(60)));

  const successRate = ((testResults.passed / testResults.total) * 100).toFixed(
    1
  );

  console.log(
    `${colors.green("✅")} Passed: ${colors.green(testResults.passed)}`
  );
  console.log(`${colors.red("❌")} Failed: ${colors.red(testResults.failed)}`);
  console.log(`${colors.blue("📈")} Total: ${colors.blue(testResults.total)}`);
  console.log(
    `${colors.yellow("🎯")} Success Rate: ${colors.yellow(successRate + "%")}`
  );

  if (testResults.failed > 0) {
    console.log(`\n${colors.red("🚨 FAILED TESTS:")}`);
    testResults.details
      .filter((test) => !test.success)
      .forEach((test) => {
        console.log(`   • ${test.name}: ${colors.red(test.error)}`);
      });
  }

  // Recommendations
  console.log(`\n${colors.cyan("💡 RECOMMENDATIONS:")}`);
  if (successRate === "100.0") {
    console.log(
      `   🎉 All tests passed! Your backend is working perfectly.${colors.green(
        ""
      )}`
    );
  } else if (successRate >= "80.0") {
    console.log(
      `   ⚠️  Most tests passed. Check failed endpoints.${colors.yellow("")}`
    );
  } else {
    console.log(
      `   🚨 Multiple failures detected. Backend may be down or misconfigured.${colors.red(
        ""
      )}`
    );
  }

  console.log(`\n${colors.cyan("🔧 TROUBLESHOOTING TIPS:")}`);
  console.log(colors.gray("   • Check if backend server is running"));
  console.log(
    colors.gray("   • Verify CORS configuration allows your frontend domain")
  );
  console.log(
    colors.gray("   • Check network connectivity and firewall settings")
  );
  console.log(
    colors.gray("   • Review backend logs for detailed error information")
  );

  // Exit with appropriate code
  process.exit(testResults.failed > 0 ? 1 : 0);
}

// Handle script execution
if (require.main === module) {
  runAllTests().catch((error) => {
    console.error(colors.red("💥 Test runner failed:"), error.message);
    process.exit(1);
  });
}

module.exports = {
  runAllTests,
  makeRequest,
  testResults,
};
