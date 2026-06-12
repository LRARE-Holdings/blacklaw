# blacklaw.co

Next.js (App Router) marketing + legal site. Routes: `/`, `/terms`, `/privacy`, `/support`.

## Deploy on Vercel
1. Push this repo (or just this `website/` folder) to GitHub.
2. vercel.com → Add New Project → import → set **Root Directory** to `website/`.
3. Framework auto-detects as Next.js — no settings needed. Add the `blacklaw.co` domain in Project → Domains and point the DNS records Vercel shows you.

App Store Connect URLs once live: privacy `https://blacklaw.co/privacy`, support `https://blacklaw.co/support`.

Note: the in-app links currently use `/terms.html`-style paths — Next serves them at `/terms` etc.; redirects for the `.html` variants are configured in `next.config.mjs`.
# blacklaw
