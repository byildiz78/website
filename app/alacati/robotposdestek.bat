@echo off
setlocal EnableDelayedExpansion

:: Cihaz adını kullanıcıdan sor, sonra yönetici izinleriyle tekrar çalıştır
:: İlk çalıştırma kontrolü - parametresiz çalıştırıldıysa kullanıcıdan cihaz adı al
if "%~1"=="" (
    :: Başlık
    title MeshCentral Agent Kurulumu
    :: Renkli metin için
    color 0A
    echo.
    echo ===================================
    echo   MeshCentral Agent Kurulum Aracı
    echo ===================================
    echo.
    :: Bilgisayar adını varsayılan olarak al
    set "DEFAULT_NAME=%COMPUTERNAME%"
    :: Kullanıcıdan isim sor
    set /p "DEVICE_NAME=Cihaz adını girin [%DEFAULT_NAME%]: "
    :: Boş girildiyse varsayılan adı kullan
    if "!DEVICE_NAME!"=="" set "DEVICE_NAME=%DEFAULT_NAME%"
    
    :: Cihaz adını parametre olarak geçirip, yönetici olarak tekrar çalıştır
    echo.
    echo Kurulum başlatılıyor, yönetici izinleri gerekecek...
    echo.
    powershell -Command "Start-Process -FilePath '%~f0' -ArgumentList '\"!DEVICE_NAME!\"' -Verb RunAs"
    exit
)

:: Yönetici olarak çalışan kod buradan başlıyor
:: Parametre olarak geçirilen cihaz adını al
set "DEVICE_NAME=%~1"

:: Başlık
title MeshCentral Agent Kurulumu
:: Renkli metin için
color 0A
echo.
echo ===================================
echo   MeshCentral Agent Kurulum Aracı
echo ===================================
echo.

:: Geçici klasörü oluştur
set "TEMP_DIR=%TEMP%\MeshInstall"
if not exist "%TEMP_DIR%" mkdir "%TEMP_DIR%"
:: Agent'ı indir
echo Agent indiriliyor...
powershell -Command "& {Invoke-WebRequest -Uri 'https://remote.robotpos.com/meshagents?id=4&meshid=A@nD1O55WFM6oke0tKVpq45ZBjWUxLkAAYFgBKUtIosDGPVZaHuQXbzlIs4@tKxZ7K@s5DngBLRxTdN7ppf11VHsDEiDJi150Z7pTapxDrZoNz@g0hVMup1E0rbuzHblgV0xvNiuLuz7LReGI0sH@RLLZOVPsQ==' -OutFile '%TEMP_DIR%\MeshAgent.exe'}"
:: İndirme başarılı mı kontrol et
if not exist "%TEMP_DIR%\MeshAgent.exe" (
    echo HATA: Agent indirilemedi!
    goto :cleanup
)
echo.
echo Agent başarıyla indirildi.
echo.
echo '%DEVICE_NAME%' adıyla MeshAgent kuruluyor...
echo.
:: Varsa mevcut agent'ı kaldır
if exist "C:\Program Files\Mesh Agent\meshagent.exe" (
    echo Mevcut agent kaldırılıyor...
    "C:\Program Files\Mesh Agent\meshagent.exe" -fulluninstall
    timeout /t 3 > nul
)
:: Yeni agent'ı kur (debug parametresi ekledim)
"%TEMP_DIR%\MeshAgent.exe" -fullinstall --agentName="%DEVICE_NAME%" --debug
:: Kurulum başarılı mı kontrol et
if exist "C:\Program Files\Mesh Agent\meshagent.exe" (
    echo.
    echo ================================================
    echo  MeshAgent başarıyla kuruldu ve yapılandırıldı!
    echo  Cihaz Adı: %DEVICE_NAME%
    echo ================================================
) else (
    :: Program Files (x86) içinde de kontrol et
    if exist "C:\Program Files (x86)\Mesh Agent\meshagent.exe" (
        echo.
        echo ================================================
        echo  MeshAgent başarıyla kuruldu ve yapılandırıldı!
        echo  Cihaz Adı: %DEVICE_NAME%
        echo  Konum: C:\Program Files (x86)\Mesh Agent\
        echo ================================================
    ) else (
        :: ProgramData içinde de kontrol et
        if exist "C:\ProgramData\Mesh Agent\meshagent.exe" (
            echo.
            echo ================================================
            echo  MeshAgent başarıyla kuruldu ve yapılandırıldı!
            echo  Cihaz Adı: %DEVICE_NAME%
            echo  Konum: C:\ProgramData\Mesh Agent\
            echo ================================================
        ) else (
            echo.
            echo HATA: Kurulum tamamlanamadı!
            echo.
            echo Lütfen şu konumları manuel olarak kontrol edin:
            echo - C:\Program Files\Mesh Agent\
            echo - C:\Program Files (x86)\Mesh Agent\
            echo - C:\ProgramData\Mesh Agent\
            echo.
            echo Veya Servisler listesinde "Mesh Agent" servisini kontrol edin.
        )
    )
)
:cleanup
:: Temizlik
echo.
echo Geçici dosyalar temizleniyor...
if exist "%TEMP_DIR%" rmdir /s /q "%TEMP_DIR%"
echo.
echo İşlem tamamlandı.
pause