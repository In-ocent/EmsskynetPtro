document.addEventListener("DOMContentLoaded", () => {
  // Get DOM elements
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".lightbox .close");
  const galleryItems = document.querySelectorAll(".gallery-item img");

  // Check if all required elements exist
  if (!lightbox || !lightboxImg || !closeBtn || galleryItems.length === 0) {
    console.error("Gallery elements not found:", { lightbox, lightboxImg, closeBtn, galleryItems });
    return; // Stop script if elements are missing
  }

  // Open lightbox on image click
  galleryItems.forEach((img) => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt || "";
    });
  });

  // Close lightbox on close button click
  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  // Close lightbox when clicking outside the image
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
});
