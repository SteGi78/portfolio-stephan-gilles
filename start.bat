@echo off
cd /d %~dp0
if not exist node_modules (
  echo Installiere Abhaengigkeiten...
  call npm install || goto :error
)
call npm start
goto :eof
:error
echo Fehler beim Start.
pause
