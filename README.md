# kendricksharpe.com static site

This is a static copy of the two public WordPress pages captured on October 24, 2026. The source content, outbound links, and `/reading-list/` URL are preserved. The site serves HTML, CSS, and one locally hosted font; it makes no request to WordPress or PHP.

## Preview on GitHub Pages

This repository is the existing `kendricksharpe/kendricksharpe.github.io` personal Pages site. Push changes to `main`, then review `https://kendricksharpe.github.io/` and its `/reading-list/` page on desktop and mobile. If GitHub Pages ever stops publishing, check repository **Settings → Pages** and select **Deploy from a branch**, `main`, and `/(root)`.

All links and assets use relative paths so the same files work on the GitHub Pages preview and on the custom domain.

## Move the domain after preview approval

1. Keep a WordPress backup/export until the static site is verified. The local files are a snapshot; edits made later in WordPress will not sync automatically.
2. In GitHub Pages settings, set the custom domain to `kendricksharpe.com`. GitHub will add a `CNAME` file for branch publishing.
3. The current nameservers are Namecheap Web Hosting DNS (`dns1.namecheaphosting.com` and `dns2.namecheaphosting.com`). In **cPanel → Domains → Zone Editor → Manage**, replace the apex website `A` record (`192.64.117.225`) with GitHub Pages' four `A` records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, and `185.199.111.153`.
4. In the same zone, replace the current `www` CNAME (`kendricksharpe.com`) with `kendricksharpe.github.io`. Preserve all `MX`, mail-related `TXT`, and unrelated DNS records.
5. Confirm both domain variants resolve and redirect correctly, then enable **Enforce HTTPS** in GitHub Pages. DNS and certificate provisioning can take time.
6. If you want to cancel shared hosting, first copy the complete DNS zone from cPanel to Namecheap BasicDNS, including email and verification records, and confirm whether any mailbox or forwarding service depends on the hosting plan. Changing nameservers does not copy those records automatically. After the domain and email work on BasicDNS, remove the old WordPress installation or cancel only unneeded hosting. Keep the domain registration and needed email service in place.

The DNS values above should be checked against current [GitHub Pages custom domain documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) at cutover.

## Editing

Edit `index.html`, `reading-list/index.html`, or `assets/site.css` directly and push to `main`. No build system or PHP runtime is required.
