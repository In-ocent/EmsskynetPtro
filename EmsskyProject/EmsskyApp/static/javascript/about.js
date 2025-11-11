document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("readMoreBtn");
  const moreText = document.getElementById("moreText");

  if (!btn || !moreText) {
    console.error("About section elements not found");
    return;
  }

  btn.addEventListener("click", function () {
    if (moreText.style.maxHeight) {
      moreText.style.maxHeight = null;
      btn.textContent = "Read More";
    } else {
      moreText.style.maxHeight = moreText.scrollHeight + "px";
      btn.textContent = "Read Less";
    }
  });
});
