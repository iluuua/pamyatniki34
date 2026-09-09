Objective: restore local access and start Yandex/Google indexing.
Branch: site/initial; project: projects/pamyatniki34.
Root cause: macOS has a stale host route for 77.91.115.169 via old gateway 172.20.10.1.
Fix: REG.RU nameservers changed to blair/cameron.ns.cloudflare.com; A records are proxied.
Cloudflare: activation is pending registrar propagation; SSL mode is Full (strict).
Yandex: ownership verified by TXT on 2026-09-09.
Yandex: sitemap.xml queued; homepage queued for reindexing.
Google: domain property created; verification TXT added to Cloudflare.
Verified: external probes return HTTPS 200 with a valid certificate.
Changed: DNS providers and webmaster registrations; no site runtime code changed.
Blocker: public NS delegation still returns ns1/ns2.reg.ru until propagation completes.
Next: confirm Cloudflare active, Google ownership, submit sitemap, and retest Chrome.
