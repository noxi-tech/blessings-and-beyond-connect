/**
 * ULTRA-LIGHTWEIGHT THEME CONTROLLER
 * Zero-dependency, private-browsing safe, mobile optimized.
 */
(() => {
  const initTheme = () => {
    const htmlEl = document.documentElement;
    const toggleBtn = document.getElementById("themeToggleBtn");
    if (!toggleBtn) return;

      toggleBtn.addEventListener("click", () => {
        const current = htmlEl.getAttribute("data-theme") || "light";
        const next = current === "light" ? "dark" : "light";
        htmlEl.setAttribute("data-theme", next);
        try {
          localStorage.setItem("preferred-theme", next);
        } catch (e) { }

            const meta = document.querySelector('meta[name="theme-color"]');
            if (meta) {
              meta.setAttribute("content", next === "dark" ? "#0b111a" : "#f8fafc");
            }
        });
    };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTheme, { once: true });
  } else {
    initTheme();
  }
})();
