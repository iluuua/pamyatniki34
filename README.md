# Мастерская памятников · Волгоград

Сайт мастерской на Ангарской улице, 104. Телефон: +7 (927) 538-74-74.

## Разработка

Node.js 22.13+; `npm ci`, `npm run dev`. Проверка: `./.codex/test-command`.
Статическая сборка: `npm run build`, результат в `dist`.

Контент — `index.html`, стили — `app/globals.css`, мобильное меню — `app/site.js`, фотографии — `public/images`.
Сайт использует предоставленные заказчиком сведения и фотографии. Оригинальные вложения не публикуются.

## Публикация

Основной сайт работает на VPS из `/var/www/pamyatniki34/current`; конфигурация Nginx хранится в `deploy/nginx.conf`. Исходники — ветка `site/initial`.
GitHub Pages из ветки `gh-pages` остаётся временной копией.
Карты загружаются из Яндекса; на случай недоступности есть прямая ссылка и текстовый адрес.
Основные кнопки открывают профиль мастерской в MAX без текста сообщения. Telegram открывает чат с подготовленным сообщением; телефон — звонок. Формы и сервер для сбора персональных данных отсутствуют.

Сайт: https://pamyatniki34.ru/
Временная копия: https://iluuua.github.io/pamyatniki34/
Репозиторий: https://github.com/iluuua/pamyatniki34

## VPS и домен

DNS обслуживает REG.RU: A-записи `@` и `www` направлены на VPS `77.91.115.169`.
HTTP и `www` перенаправляются на `https://pamyatniki34.ru/`. Сертификат Let's Encrypt выпущен для обоих имён, продление выполняет `certbot.timer`.
Базовое SEO: canonical, Open Graph, Twitter Card, LocalBusiness JSON-LD, `robots.txt` и `sitemap.xml`.
