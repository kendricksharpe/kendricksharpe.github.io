const siteRoot = new URL("../", document.currentScript.src);
const navPages = [
  { path: "index.html", label: "Home" },
  { path: "reading-list/index.html", label: "Reading List" },
  { path: "evgf/index.html", label: "EVGF" },
];

customElements.define("site-nav", class extends HTMLElement {
  connectedCallback() {
    const nav = document.createElement("nav");
    nav.className = "site-tabs";
    nav.setAttribute("aria-label", "Main navigation");

    const currentPath = location.pathname.replace(/\/$/, "/index.html");
    for (const { path, label } of navPages) {
      const url = new URL(path, siteRoot);
      const link = document.createElement("a");
      link.href = url.href;
      link.textContent = label;
      if (url.pathname === currentPath) {
        link.setAttribute("aria-current", "page");
      }
      nav.append(link);
    }
    this.replaceChildren(nav);
  }
});
