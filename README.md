# kendricksharpe.com static site

This is a static copy of the two public WordPress pages captured on October 24, 2026. The source content, outbound links, and `/reading-list/` URL are preserved. The site serves HTML, CSS, and one locally hosted font; it makes no request to WordPress or PHP.

## Preview on GitHub Pages

This repository is the existing `kendricksharpe/kendricksharpe.github.io` personal Pages site. Push changes to `main`, then review `https://kendricksharpe.github.io/` and its `/reading-list/` page on desktop and mobile. If GitHub Pages ever stops publishing, check repository **Settings → Pages** and select **Deploy from a branch**, `main`, and `/(root)`.

All links and assets use relative paths so the same files work on the GitHub Pages preview and on the custom domain.

## Move the domain after preview approval

1. Keep a WordPress backup/export until the static site is verified. The local files are a snapshot; edits made later in WordPress will not sync automatically.
2. In GitHub Pages settings, set the custom domain to `kendricksharpe.com`. GitHub will add a `CNAME` file for branch publishing.
3. The current nameservers are Namecheap Web Hosting DNS (`dns1.namecheaphosting.com` and `dns2.namecheaphosting.com`). Before switching, review **cPanel → Domains → Zone Editor → Manage** and copy any non-mail records still needed for other services or domain verification. Existing records do not copy to BasicDNS automatically. The owner confirmed that no `@kendricksharpe.com` email or forwarding is used, so mail-only records do not need migration.
4. In Namecheap **Domain List → Manage → Domain → Nameservers**, select **Namecheap BasicDNS** and save. Then open **Advanced DNS → Host Records**. Remove any conflicting parking, redirect, or old hosting records. Add four `A` records with Host `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, and `185.199.111.153`. Add a `CNAME` with Host `www` and Value `kendricksharpe.github.io` (no `https://` or path). Recreate any other records identified in step 3.
5. Confirm the nameservers have changed, both domain variants resolve and redirect correctly, and GitHub Pages serves the site. Then enable **Enforce HTTPS** in GitHub Pages. DNS and certificate provisioning can take time.
6. After the domain works and the WordPress content has been backed up, remove the old WordPress installation or cancel the unneeded shared-hosting plan. Keep the domain registration active.

The DNS values above should be checked against current [GitHub Pages custom domain documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) at cutover. Namecheap documents the [Web Hosting DNS to BasicDNS move](https://www.namecheap.com/support/knowledgebase/article.aspx/9904/32/how-to-use-hosting-services-with-a-domain-pointed-to-basicdns/) and [BasicDNS nameserver setting](https://www.namecheap.com/support/knowledgebase/article.aspx/782/10/how-do-i-set-my-domain-to-use-namecheap-basicdns/).

## Editing

Edit `index.html`, `reading-list/index.html`, or `assets/site.css` directly and push to `main`. No build system or PHP runtime is required.
