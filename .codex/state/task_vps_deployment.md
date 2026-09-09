# VPS deployment — completed

Target: pamyatniki34.ru (corrected owner domain), Hostkey 77.91.115.169.

Exact MAX profile links are live; Telegram retains the requested draft. Canonical validator passed.
SSH access works. Nginx serves release `ac59b15` from `/var/www/pamyatniki34/current`.

REG.RU authoritative records for apex and www both resolve to `77.91.115.169`; Google and Cloudflare DNS-over-HTTPS confirm the same result.
Let's Encrypt certificate covers apex and www through 2026-12-08. The renewal timer is active and `certbot renew --dry-run` passed.

HTTP and www redirect to the canonical HTTPS apex. HTTPS response body matches the locally validated build; `robots.txt` and `sitemap.xml` return 200.

GitHub Pages update completed: commit 679432693e86109e43671fc2e9adcfd1ce85cc0f; action 34322061320 succeeded. Public HTTPS HTML matches dist exactly, including all six exact MAX links. Source implementation: ac26c90. No force push.
