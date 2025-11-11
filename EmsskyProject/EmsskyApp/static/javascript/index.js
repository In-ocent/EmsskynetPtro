document.addEventListener("DOMContentLoaded", () => {
  /* =================== MOBILE MENU =================== */
  const menuToggle = document.getElementById("menuToggle");
  const closeMenu = document.getElementById("closeMenu");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  }

  if (closeMenu && navLinks) {
    closeMenu.addEventListener("click", () => {
      navLinks.classList.remove("active");
      document.body.style.overflow = "";
    });
  }

  /* =================== NAVBAR ACTIVE LINK =================== */
  const navAnchors = document.querySelectorAll(".navbar-nav a");
  const currentPath = window.location.pathname.replace(/\/$/, "");
  navAnchors.forEach((link) => {
    const linkPath = link.getAttribute("href").replace(/\/$/, "");
    if (currentPath === linkPath) link.classList.add("active");
    link.addEventListener("click", () => {
      navAnchors.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
    });
  });

  /* =================== AD SPLASH =================== */
  const adSplash = document.getElementById("ad-splash");
  const skipAd = document.getElementById("skipAd");
  const adDuration = 8000; // 8 seconds
  const fadeDuration = 600; // fade animation

  // Only show ad if not already seen this session
  if (adSplash && skipAd && !sessionStorage.getItem("adShown")) {
    // Make splash visible immediately
    adSplash.style.display = "flex";

    // Fade in after tiny delay for smoothness
    setTimeout(() => adSplash.classList.add("show"), 50);

    // Auto-hide
    const timer = setTimeout(() => hideAd(timer), adDuration);

    // Skip button
    skipAd.addEventListener("click", () => hideAd(timer));

    function hideAd(timer) {
      if (timer) clearTimeout(timer);
      adSplash.classList.remove("show");
      setTimeout(() => (adSplash.style.display = "none"), fadeDuration);
      sessionStorage.setItem("adShown", "true"); // mark as seen
    }
  } else if (adSplash) {
    // Ensure splash is completely hidden if already seen
    adSplash.style.display = "none";
  }
});
