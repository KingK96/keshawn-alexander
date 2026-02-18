export function renderProjects(containerEl, projects) {
  containerEl.innerHTML = projects
    .map((p) => {
      const links = (p.links || [])
        .map((l) => {
          const isAnchor = typeof l.href === "string" && l.href.startsWith("#");
          const extra = isAnchor ? "" : ' target="_blank" rel="noreferrer"';
          const disabled = p.disabled && !isAnchor ? " aria-disabled=\"true\"" : "";
          const klass = p.disabled && !isAnchor ? "btn btn--ghost btn--sm btn--disabled" : "btn btn--ghost btn--sm";
          return `<a class="${klass}" href="${l.href}"${extra}${disabled}>${l.label}</a>`;
        })
        .join("");

      const highlights = (p.highlights || []).map((h) => `<li>${h}</li>`).join("");

      return `
        <article class="card project">
          <div class="project__top">
            <h3>${p.title}</h3>
            <span class="badge">${p.tag}</span>
          </div>
          <p class="muted">${p.description}</p>
          <ul class="bullets">${highlights}</ul>
          <div class="project__links">${links}</div>
        </article>
      `;
    })
    .join("");
}
