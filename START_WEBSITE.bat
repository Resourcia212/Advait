@echo off
title Dr. Shinde's Advait Dental Clinic Website
echo =========================================================================
echo  Starting Dr. Shinde's Advait Multispeciality Dental Clinic Website...
echo =========================================================================
echo.
echo Launching local server on http://localhost:3000...
echo.
start http://localhost:3000
npm.cmd run dev -- --host --port 3000
pause
