@echo off
REM Backend API Testing Script (Windows Batch Version)
REM Tests all portfolio backend endpoints

setlocal enabledelayedexpansion

REM Configuration
set BACKEND_URL=https://chaitanya-portfolio-backend.onrender.com
set API_BASE=%BACKEND_URL%/api
set TIMEOUT=30

REM Test counters
set PASSED=0
set FAILED=0
set TOTAL=0

echo.
echo 🚀 Starting Backend API Tests
echo 📍 Backend URL: %BACKEND_URL%
echo ⏱️  Timeout: %TIMEOUT%s
echo ============================================================

REM Function to test an endpoint
:test_endpoint
set test_name=%~1
set method=%~2
set endpoint=%~3
set data=%~4

set /a TOTAL+=1
echo.
echo 🧪 Testing: %test_name%

if "%method%"=="GET" (
    curl -s -w "\n%%{http_code}" --max-time %TIMEOUT% "%API_BASE%%endpoint%" > temp_response.txt
) else if "%method%"=="POST" (
    curl -s -w "\n%%{http_code}" --max-time %TIMEOUT% -X POST -H "Content-Type: application/json" -d "%data%" "%API_BASE%%endpoint%" > temp_response.txt
) else if "%method%"=="OPTIONS" (
    curl -s -w "\n%%{http_code}" --max-time %TIMEOUT% -X OPTIONS -H "Origin: http://localhost:3000" -H "Access-Control-Request-Method: GET" "%API_BASE%%endpoint%" > temp_response.txt
)

REM Extract status code (last line)
for /f %%i in ('powershell -command "Get-Content temp_response.txt | Select-Object -Last 1"') do set status_code=%%i

REM Extract response body (all but last line)
powershell -command "Get-Content temp_response.txt | Select-Object -SkipLast 1" > temp_body.txt

if %status_code% geq 200 if %status_code% lss 300 (
    set /a PASSED+=1
    echo ✅ %test_name% - PASSED
    for /f %%i in ('powershell -command "Get-Content temp_body.txt | Select-Object -First 1 | ForEach-Object { $_.Substring(0, [Math]::Min(100, $_.Length)) }"') do echo    📊 Response: %%i...
) else (
    set /a FAILED+=1
    echo ❌ %test_name% - FAILED
    echo    🚨 Status: %status_code%
    for /f %%i in ('powershell -command "Get-Content temp_body.txt | Select-Object -First 1 | ForEach-Object { $_.Substring(0, [Math]::Min(100, $_.Length)) }"') do echo    📊 Error: %%i
)

del temp_response.txt temp_body.txt 2>nul
goto :eof

REM Test health check
echo.
echo 🧪 Testing: Health Check
set /a TOTAL+=1
curl -s -w "\n%%{http_code}" --max-time 10 "%BACKEND_URL%" > temp_health.txt
for /f %%i in ('powershell -command "Get-Content temp_health.txt | Select-Object -Last 1"') do set health_status=%%i

if %health_status% geq 200 if %health_status% lss 300 (
    set /a PASSED+=1
    echo ✅ Health Check - PASSED
) else (
    set /a FAILED+=1
    echo ❌ Health Check - FAILED
    echo    🚨 Status: %health_status%
)
del temp_health.txt 2>nul

REM Run all API tests
call :test_endpoint "CORS Configuration" "OPTIONS" "/profile"
call :test_endpoint "Profile API" "GET" "/profile"
call :test_endpoint "Experience API" "GET" "/experience"
call :test_endpoint "Education API" "GET" "/education"
call :test_endpoint "Skills API" "GET" "/skills"
call :test_endpoint "Projects API" "GET" "/projects"
call :test_endpoint "Achievements API" "GET" "/achievements"
call :test_endpoint "Blog Posts API" "GET" "/blog"
call :test_endpoint "Blog Post (ID: 1)" "GET" "/blog/1"
call :test_endpoint "Contacts API" "GET" "/contacts"

REM Test contact submission
set contact_data={"name":"Test User","email":"test@example.com","subject":"API Test","message":"This is a test message from the API testing script.","timestamp":"%date% %time%"}
call :test_endpoint "Contact Submission" "POST" "/contact" "%contact_data%"

REM Performance test
echo.
echo 🧪 Testing: Performance Test
set /a TOTAL+=1
powershell -command "$start = Get-Date; $response = Invoke-WebRequest -Uri '%API_BASE%/profile' -TimeoutSec %TIMEOUT% -UseBasicParsing; $end = Get-Date; $responseTime = ($end - $start).TotalMilliseconds; Write-Host 'Response Time:' $responseTime 'ms'; if ($response.StatusCode -ge 200 -and $response.StatusCode -lt 300) { Write-Host '✅ Performance Test - PASSED'; if ($responseTime -lt 1000) { Write-Host '   📊 Performance: Good' } elseif ($responseTime -lt 3000) { Write-Host '   📊 Performance: Acceptable' } else { Write-Host '   📊 Performance: Slow' } } else { Write-Host '❌ Performance Test - FAILED'; Write-Host '   🚨 Status:' $response.StatusCode }"

REM Print summary
echo.
echo ============================================================
echo 📊 TEST SUMMARY
echo ============================================================

set /a success_rate=(%PASSED% * 100) / %TOTAL%

echo ✅ Passed: %PASSED%
echo ❌ Failed: %FAILED%
echo 📈 Total: %TOTAL%
echo 🎯 Success Rate: %success_rate%%%

echo.
echo 💡 RECOMMENDATIONS:
if %success_rate%==100 (
    echo    🎉 All tests passed! Your backend is working perfectly.
) else if %success_rate% geq 80 (
    echo    ⚠️  Most tests passed. Check failed endpoints.
) else (
    echo    🚨 Multiple failures detected. Backend may be down or misconfigured.
)

echo.
echo 🔧 TROUBLESHOOTING TIPS:
echo    • Check if backend server is running
echo    • Verify CORS configuration allows your frontend domain
echo    • Check network connectivity and firewall settings
echo    • Review backend logs for detailed error information

REM Exit with appropriate code
if %FAILED% gtr 0 (
    exit /b 1
) else (
    exit /b 0
)
