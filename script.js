/**
 * LIGHTWEIGHT THEME CONTROLLER
 * Saves theme preference (dark/light) in localStorage.
 */

document.addEventListener("DOMContentLoaded", () => {
  const htmlEl = document.documentElement;
  const themeToggleBtn = document.getElementById("themeToggleBtn");

    const getSavedTheme = () => {
      return localStorage.getItem("preferred-theme") || "light";
    };

    const applyTheme = (theme) => {
      htmlEl.setAttribute("data-theme", theme);
      localStorage.setItem("preferred-theme", theme);
      const metaTheme = document.querySelector('meta[name="theme-color"]');
      if (metaTheme) {
        metaTheme.setAttribute("content", theme === "dark" ? "#0b0f19" : "#f8fafc");
      }
    };

    applyTheme(getSavedTheme());

    if (themeToggleBtn) {
      themeToggleBtn.addEventListener("click", () => {
        const current = htmlEl.getAttribute("data-theme") || "light";
        const next = current === "light" ? "dark" : "light";
        applyTheme(next);
      });
    }
  });
