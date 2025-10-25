const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeBtn = document.getElementById("close-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let currentIndex = 0;

galleryItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    currentIndex = index;
    showImage();
    lightbox.style.display = "flex";
    lightbox.classList.add("show");
  });
});

function showImage() {
  lightboxImage.src = galleryItems[currentIndex].src;
}

closeBtn.addEventListener("click", () => {
  lightbox.classList.remove("show");
  setTimeout(() => {
    lightbox.style.display = "none";
  }, 300);
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove("show"); // 🔥 убираем
    setTimeout(() => {
      lightbox.style.display = "none";
    }, 300);
  }
});

nextBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex + 1) % galleryItems.length;
  showImage();
});

prevBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
  showImage();
});
