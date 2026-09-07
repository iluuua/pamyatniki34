# Website delivery — 2026-09-07

Implemented responsive Russian landing for Мастерская памятников, Волгоград. Content follows user-provided business details. Local photographs and licensed self-hosted fonts. Yandex map and user-supplied route URL, phone/SMS links, gallery, pricing and installment wording included.

Verification: `.codex/test-command` builds production assets, lints authored JS/config, checks JS syntax, all image references, local anchors and essential business facts. Local development response HTTP 200. Yandex widget HTTP 200; short link resolves to supplied organization 138048104778. Browser UI QA not performed (not requested; Sites environment rule).

Dependencies: generated Sites starter retains its catalog and pinned dependency set per skill. `npm audit` reports 11 baseline advisories (8 high, 2 moderate, 1 low). Server dependencies are not included in the published static output. Full starter lint finds issues in unused vendored UI; authored source lint is the release check. No unsafe dependency upgrades were made.

Docs/index/backlog in control-plane are unrelated and left unchanged. This task uses its own README, state and completion artifact. No other existing project files modified.

Owner next step: review published appearance and confirm business copy/photos; a custom domain can be connected separately. GitHub Pages URL remains active until disabled; no automatic expiry configured.
