// Year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Simple lightbox for project images
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxClose = document.getElementById("lightbox-close");
const images = document.querySelectorAll(".project-image");

images.forEach((img) => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightbox.classList.add("open");
  });
});

lightboxClose.addEventListener("click", () => {
  lightbox.classList.remove("open");
  lightboxImg.src = "";
});

lightbox.addEventListener("click", (e) => {
  // Close when clicking outside the image
  if (e.target === lightbox) {
    lightbox.classList.remove("open");
    lightboxImg.src = "";
  }
});
