Objective: publish completed memorial workshop website to GitHub Pages.
Verified: static production build, business details, images and anchor links, Yandex short URL matches organization 138048104778; local preview HTTP 200.
Root cause: not a bugfix; MiMo transport failed three times. User explicitly prohibited further MiMo use; all implementation completed directly.
Files: index.html, app/globals.css, app/site.js, public photos/fonts/favicon, Vite config, package scripts, README, validator and task docs.
Instructions: user global agreement; Sites scaffold/design; milestone-summarizer. GitHub publication explicitly requested.
Validation: targeted lint + .codex/test-command required before publication. Browser UI testing not requested and not run under Sites environment instructions.
Risks: scaffold dependency audit reports 11 advisories; only static HTML/CSS/JS/assets deployed, no scaffold server runtime. Unused vendored Shadcn files have baseline lint findings; authored source lint scoped explicitly.
Next: create iluuua/pamyatniki34, push source and static gh-pages branch, enable Pages and verify published resources.
