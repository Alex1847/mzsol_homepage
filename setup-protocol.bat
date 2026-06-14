@echo off
chcp 65001 > nul

echo === powermgr:// ===
REG ADD "HKCU\Software\Classes\powermgr" /ve /d "URL:Power Manager Protocol" /f
REG ADD "HKCU\Software\Classes\powermgr" /v "URL Protocol" /d "" /f
REG ADD "HKCU\Software\Classes\powermgr\shell" /f
REG ADD "HKCU\Software\Classes\powermgr\shell\open" /f
REG ADD "HKCU\Software\Classes\powermgr\shell\open\command" /ve /d "powershell -NoProfile -Command Start-Process cmd '/k cd /d D:\my-project\powermgr2604 && npm run dev'" /f

echo === saftymgr:// ===
REG ADD "HKCU\Software\Classes\saftymgr" /ve /d "URL:Safety Manager Protocol" /f
REG ADD "HKCU\Software\Classes\saftymgr" /v "URL Protocol" /d "" /f
REG ADD "HKCU\Software\Classes\saftymgr\shell" /f
REG ADD "HKCU\Software\Classes\saftymgr\shell\open" /f
REG ADD "HKCU\Software\Classes\saftymgr\shell\open\command" /ve /d "powershell -NoProfile -Command Start-Process cmd '/k cd /d D:\my-project\saftymgr\web && start.bat'" /f

echo === mes:// ===
REG ADD "HKCU\Software\Classes\mes" /ve /d "URL:MES Protocol" /f
REG ADD "HKCU\Software\Classes\mes" /v "URL Protocol" /d "" /f
REG ADD "HKCU\Software\Classes\mes\shell" /f
REG ADD "HKCU\Software\Classes\mes\shell\open" /f
REG ADD "HKCU\Software\Classes\mes\shell\open\command" /ve /d "powershell -NoProfile -Command Start-Process cmd '/k cd /d D:\my-project\mes && npm run dev'" /f

echo.
echo Done.
pause
