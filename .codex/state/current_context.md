Objective: deploy pamyatniki34.ru to Hostkey VPS 77.91.115.169 with HTTPS.
Branch: site/initial; project: projects/pamyatniki34.
Implemented: exact owner MAX profile URL on all primary links; Telegram draft unchanged.
Verified: .codex/test-command passes build, authored lint, syntax, links and content.
SSH: target reachable; root rejects matching pamyatniki private/public key (including en0).
DNS: REG.RU ns1/ns2; apex and www still 95.163.244.138, unchanged.
Hostkey panel requires login; asked owner to sign in.
Prepared: deploy/nginx-http.conf; not installed, no remote mutations.
Changed: index.html, validator/output, README, deploy config, scoped state docs.
Blocker: authenticated VPS access; certificate cannot be issued before DNS/HTTP setup.
Next: after Hostkey login, install/check authorized key, inspect VPS, upload static build, configure DNS and HTTPS.
