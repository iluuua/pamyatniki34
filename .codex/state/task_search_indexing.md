# Search indexing and access recovery

Date: 2026-09-10. Branch: `site/initial`.

Chrome's `ERR_ADDRESS_INVALID` was reproduced locally. DNS and worldwide probes were healthy, but macOS had an exact static route for `77.91.115.169` through the obsolete gateway `172.20.10.1`; the current gateway is `192.168.3.1`. Removing that route requires the local administrator password.

The domain was added to Cloudflare Free and the REG.RU delegation was changed to `blair.ns.cloudflare.com` and `cameron.ns.cloudflare.com`. Apex and `www` are proxied to the Hostkey origin, and TLS uses Full (strict). Activation is pending registry propagation.

Yandex Webmaster ownership was verified by DNS TXT. `https://pamyatniki34.ru/sitemap.xml` and the homepage were submitted and are queued.

Google Search Console domain property was created. Its verification TXT is present in Cloudflare; ownership verification and sitemap submission remain blocked until the new nameservers become authoritative.

Next: confirm Cloudflare active, verify Google ownership, submit the sitemap, and retest the production URL from Chrome with and without VPN.
