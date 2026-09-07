# Photo, CTA and mobile refinement

User scope includes photo framing, engraved-text visibility, unified estimate CTA, MAX throughout, Telegram at end, no SMS, address link, cleaning service, title, caption removals and mobile performance. Additional request: remove dash from «Стоимость по вашему проекту».

Changed HTML and CSS to preserve the full engraved photograph and frame screenshot chrome out of three photos. Original photographic pixels are preserved; presentation crop also applies in the native accessible photo viewer. Replaced gallery emoji arrows by text-labelled image links. Images remain usable without viewer JavaScript through direct links to the originals in WebP format.

Added responsive WebP image delivery (480/960 px), asynchronous decoding and eager image loading with hero priority. All text remains visible without intersection observers or scroll listeners; images receive only a short non-blocking animation after loading. Reduced-motion preference disables it. Self-hosted fonts now use WOFF2. Original JPEG/TTF assets retained for provenance but not requested by updated page.

Verified via `.codex/test-command`: build, authored lint, JS syntax, content requirements, all local images and anchors. Browser: 320, 390, 430, 768, 1440 px without overflow; all images loaded; photo viewer, complete engraving, mobile menu and MAX disclosure verified; browser error logs empty. Map loaded in mobile browser. No external message sent and no phone call initiated.

MAX: user supplied phone +79275387474, no exported profile URL. Official https://help.max.ru/help/contacts/kak-priglasit-v-max-nuzhnogo-cheloveka documents in-app phone search and exported invitations. Do not fabricate `max.ru/+phone` links. Working fallback shows/copies number and opens https://max.ru/:share?text= with exact draft. That opens recipient selection, not a verified direct business chat. Direct chat remains dependent on an exported profile link. https://dev.max.ru/help/deeplinks documents share behavior. Telegram public-username draft uses https://core.telegram.org/api/links.

Transfer: original JPEG set 2861087 bytes; mobile 480px WebP set 356304 bytes; desktop 960px set 1074868 bytes. Seven WOFF2 files total 314204 bytes. Actual responsive transfer varies by screen density. Existing scaffold advisories from initial delivery remain outside this scoped update.

Other project/index/backlog docs intentionally unchanged; this local task artifact and current_context cover the modified truth. Owner next step: review updated public site; provide MAX exported profile link to replace phone-search fallback with direct chat.

Published verification: HTTP 200; HTML and 27 linked assets exactly match validated build. Source 0c395c8b37a2cb86cf802abc039275b5b155f0a0; deployed 053505d47faa651a43c703bd6cf7236f0406b6af.
