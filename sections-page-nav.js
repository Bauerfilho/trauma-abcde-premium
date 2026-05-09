/* =====================================================================
   TRAUMA PREMIUM · NAVEGAÇÃO LINEAR INFERIOR (anterior / próxima)
   ---------------------------------------------------------------------
   Renderiza, ao final de cada rota, dois cards: página anterior + próxima
   página, na ordem definida em window.TRAUMA_APP.ROUTES (sidebar).
   Funcionamento por hash; reusa estilos coerentes com o template.
   ===================================================================== */
(function (root) {
  "use strict";

  function _getRoutes() {
    return (root.TRAUMA_APP && Array.isArray(root.TRAUMA_APP.ROUTES))
      ? root.TRAUMA_APP.ROUTES
      : [];
  }

  function _colorVarOf(color) {
    const map = {
      x: "var(--c-x)", a: "var(--c-a)", b: "var(--c-b)",
      c: "var(--c-c)", d: "var(--c-d)", e: "var(--c-e)",
      ok: "var(--ok)", warn: "var(--warn)", info: "var(--info)",
      err: "var(--err)", mute: "var(--txt-3)", accent: "var(--accent)"
    };
    return map[color] || "var(--accent)";
  }

  function _card(route, dir) {
    if (!route) {
      // estado vazio (primeira/última página) — placeholder oculto preserva grid
      return `<div class="page-nav__slot page-nav__slot--empty" aria-hidden="true"></div>`;
    }
    const isPrev = dir === "prev";
    const arrow = isPrev ? "←" : "→";
    const eyebrow = isPrev ? "Página anterior" : "Próxima página";
    const cls = isPrev ? "page-nav__slot--prev" : "page-nav__slot--next";
    const ariaLabel = `${eyebrow}: ${route.title}`;
    const colorVar = _colorVarOf(route.color);
    return `
<a href="#/${route.id}" class="page-nav__slot ${cls}" aria-label="${ariaLabel}" data-nav-dir="${dir}" style="--nav-c:${colorVar};">
  <span class="page-nav__arrow" aria-hidden="true">${arrow}</span>
  <span class="page-nav__copy">
    <span class="page-nav__eyebrow">${eyebrow}</span>
    <span class="page-nav__title">${route.title}</span>
    <span class="page-nav__group">${route.group || ""}</span>
  </span>
  <span class="page-nav__letter" aria-hidden="true">${route.letter || "·"}</span>
</a>`;
  }

  function renderPageNav(currentId) {
    const routes = _getRoutes();
    if (!routes.length) return "";
    const idx = routes.findIndex(r => r.id === currentId);
    if (idx < 0) return "";
    const prev = idx > 0 ? routes[idx - 1] : null;
    const next = idx < routes.length - 1 ? routes[idx + 1] : null;
    if (!prev && !next) return "";
    const counter = `${idx + 1} de ${routes.length}`;
    return `
<nav class="page-nav" aria-label="Navegação entre páginas">
  <div class="page-nav__counter" aria-live="polite">${counter}</div>
  <div class="page-nav__grid">
    ${_card(prev, "prev")}
    ${_card(next, "next")}
  </div>
</nav>`;
  }

  root.TRAUMA_PAGE_NAV = { render: renderPageNav };

})(window);
