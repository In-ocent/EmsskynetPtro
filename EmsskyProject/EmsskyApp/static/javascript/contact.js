document.addEventListener("DOMContentLoaded", () => {
  const animated = document.querySelectorAll(".animate-on-scroll");
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("animate-visible");
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  animated.forEach(el => observer.observe(el));
});
