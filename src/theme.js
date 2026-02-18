const STORAGE_KEY = "keshawn_site_theme";

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem(STORAGE_KEY, theme);
}

function getInitialTheme() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "dark" || saved === "light") return saved;

  const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
  return prefersDark ? "dark" : "light";
}

export function setupThemeToggle({ desktopBtnId, mobileBtnId, iconId }) {
  applyTheme(getInitialTheme());

  const icon = document.getElementById(iconId);
  const setIcon = () => {
    if (!icon) return;
    icon.textContent = document.documentElement.dataset.theme === "dark" ? "☀" : "☾";
  };
  setIcon();

  const toggle = () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(next);
    setIcon();
  };

  document.getElementById(desktopBtnId)?.addEventListener("click", toggle);
  document.getElementById(mobileBtnId)?.addEventListener("click", toggle);
}
