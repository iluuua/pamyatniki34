Objective: publish requested photo, CTA and mobile refinements to pamyatniki34.
Scope: index.html, app CSS/JS, image/font delivery and focused validator; MiMo prohibited.
Root causes: object-fit cover clipped inscription; unicode arrows rendered as emoji; full JPEGs/TTFs and lazy decoding delayed images.
Verified: validator green; browser widths 320/390/430/768/1440 have no overflow and all nine image references load.
Verified: cropped display/lightbox hides screenshot chrome; full engraving inscription visible; menu opens/closes, MAX CTA opens contact instructions; zero browser console errors.
Files: HTML/CSS/JS, 16 WebP sizes, seven WOFF2 fonts, font CSS, validator and task artifacts.
Media: 480px photo set 356304 bytes vs original 2861087; WOFF2 font set 314204 bytes.
MAX limitation: official docs provide phone search in app, no documented direct phone-to-chat URL. CTA opens number instructions and official share deep link with draft text.
Telegram: @Nadezhda_graver at end only, with exact requested draft. SMS removed. Address, title, cleanup service and dash removal complete.
Next: push source and gh-pages, await Pages success, verify published HTML/CSS/JS/WebP/WOFF2 match build.
