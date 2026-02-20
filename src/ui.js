export function setupNav({ hamburgerId, mobileNavId }) {
  const hamburger = document.getElementById(hamburgerId);
  const mobileNav = document.getElementById(mobileNavId);

  hamburger?.addEventListener("click", () => {
    mobileNav?.classList.toggle("mobileNav--open");
  });

  mobileNav?.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => mobileNav?.classList.remove("mobileNav--open"))
  );
}
  
  // Smooth scrolling for in-page anchors
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (!href || href === "#") return;
      const el = document.querySelector(href);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", href);
    });
  });

