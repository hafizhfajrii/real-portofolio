@echo off
title Portofolio Alex Pratama - Astro Dev Server
echo ========================================================
echo   🚀 MEMULAI SERVER PORTOFOLIO ANDA (ASTRO)
echo ========================================================
echo.
echo  1. Server sedang disiapkan...
echo  2. Browser akan terbuka otomatis di: http://localhost:4321
echo.
echo  [TIPS]
echo  - Untuk mengedit teks/konten: buka file src/data/portfolio.ts
echo  - Untuk ganti foto: letakkan foto di public/images/profile/
echo  - Untuk menutup server: tekan CTRL+C lalu ketik Y
echo.
echo ========================================================
echo.

:: Tunggu 2 detik lalu buka browser secara otomatis
start "" http://localhost:4321

:: Jalankan dev server
npm run dev
