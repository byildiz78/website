@echo off
setlocal EnableDelayedExpansion

:: Yönetici izinleri kontrolü
>nul 2>&1 "%SYSTEMROOT%\system32\cacls.exe" "%SYSTEMROOT%\system32\config\system"
if '%errorlevel%' NEQ '0' (
    echo Yönetici izinleri isteniyor...
    goto UACPrompt
) else ( goto gotAdmin )

:UACPrompt
    echo Set UAC = CreateObject^("Shell.Application"^) > "%temp%\getadmin.vbs"
    echo UAC.ShellExecute "%~s0", "", "", "runas", 1 >> "%temp%\getadmin.vbs"
    "%temp%\getadmin.vbs"
    exit /B

:gotAdmin
    if exist "%temp%\getadmin.vbs" del "%temp%\getadmin.vbs"
    pushd "%CD%"
    CD /D "%~dp0"

:: Başlık
title robotpos Agent Kurulumu
color 0A

echo.
echo ===================================
echo   robotpos Agent Kurulum Araci
echo ===================================
echo.

:: Geçici klasör oluştur
set "TEMP_DIR=%TEMP%\MeshInstall"
if not exist "%TEMP_DIR%" mkdir "%TEMP_DIR%"

:: Agent indir
echo Agent indiriliyor...
powershell -Command "& {Invoke-WebRequest -Uri 'http://robotpos.com/alacati/uzakdestek64.exe' -OutFile '%TEMP_DIR%\MeshAgent.exe'}"
if not exist "%TEMP_DIR%\MeshAgent.exe" (
    echo HATA: Agent indirilemedi!
    goto :cleanup
)
echo.
echo Agent basariyla indirildi.

:: PowerShell ile TeamViewer ID al
set "PS_ID=%TEMP%\get_tv_id.ps1"
echo try { > "%PS_ID%"
echo     $id = (Get-ItemProperty -Path "Registry::HKEY_LOCAL_MACHINE\SOFTWARE\WOW6432Node\TeamViewer").ClientID >> "%PS_ID%"
echo     if ($null -eq $id) { $id = (Get-ItemProperty -Path "Registry::HKEY_LOCAL_MACHINE\SOFTWARE\TeamViewer").ClientID } >> "%PS_ID%"
echo     if ($id) { Write-Output $id } else { Write-Output "BULUNAMADI" } >> "%PS_ID%"
echo } catch { Write-Output "HATA" } >> "%PS_ID%"

for /f "usebackq delims=" %%i in (`powershell -ExecutionPolicy Bypass -File "%PS_ID%"`) do (
    set "TV_ID=%%i"
)
del "%PS_ID%"

:: Varsayılan isim bilgisayar adı
set "DEFAULT_NAME=%COMPUTERNAME%"
set "DEVICE_NAME="

:: Eğer TeamViewer ID alınmışsa, API'den sorgula
if not "%TV_ID%"=="BULUNAMADI" if not "%TV_ID%"=="HATA" (
    echo TeamViewer ID bulundu: %TV_ID%
    powershell -Command ^
        "$response = Invoke-RestMethod -Uri 'https://dm01.robotpos.com/realtimeapi/api/demo/remoteDevice?deviceId=%TV_ID%' -Headers @{Authorization='Bearer 2c5f4710-83c3-427f-87fc-c247ab5babf4'} -Method Get; $name = $response.data[0].DeviceName; if ($name) { Write-Output $name } else { Write-Output 'BULUNAMADI' }" > "%TEMP%\devicename.txt"

    set /p DEVICE_NAME=<"%TEMP%\devicename.txt"
    del "%TEMP%\devicename.txt"
)

:: Eğer isim hala yoksa kullanıcıdan iste
if "%DEVICE_NAME%"=="" if not defined DEVICE_NAME (
    echo.
    set /p "DEVICE_NAME=Cihaz adini girin [%DEFAULT_NAME%]: "
    if "!DEVICE_NAME!"=="" set "DEVICE_NAME=%DEFAULT_NAME%"
) else (
    echo API'den gelen cihaz adi: %DEVICE_NAME%
)

:: MeshAgent kurulumu
echo.
echo '%DEVICE_NAME%' adiyla MeshAgent kuruluyor...
echo.

:: Eski agent varsa kaldır
if exist "C:\Program Files\Mesh Agent\meshagent.exe" (
    echo Mevcut agent kaldiriliyor...
    "C:\Program Files\Mesh Agent\meshagent.exe" -fulluninstall
    timeout /t 3 > nul
)

:: Kur
"%TEMP_DIR%\MeshAgent.exe" -fullinstall --agentName="%DEVICE_NAME%" --showtray

:: Kurulum kontrol
if exist "C:\Program Files\Mesh Agent\meshagent.exe" (
    echo.
    echo ================================================
    echo  robotpos destek basariyla kuruldu ve yapilandirildi!
    echo  Cihaz Adi: %DEVICE_NAME%
    echo ================================================
) else (
    echo.
    echo HATA: Kurulum tamamlanamadi!
)

:cleanup
echo.
echo Geçici dosyalar temizleniyor...
if exist "%TEMP_DIR%" rmdir /s /q "%TEMP_DIR%"
echo.
echo islem tamamlandi.
timeout /t 5 > nul
exit
