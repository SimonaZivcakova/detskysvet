const images = document.querySelectorAll("#gallery img");

const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const counter = document.getElementById("counter");

if (
    images.length > 0 &&
    lightbox &&
    lightboxImg &&
    closeBtn &&
    prevBtn &&
    nextBtn &&
    counter
) {
    let currentIndex = 0;

    function showImage(index) {
        currentIndex = (index + images.length) % images.length;

        lightboxImg.src = images[currentIndex].src;
        lightboxImg.alt = images[currentIndex].alt;

        counter.textContent =
        `${currentIndex + 1} / ${images.length}`;
    }

    images.forEach((img, index) => {
    img.addEventListener("click", () => {
        lightbox.classList.add("active");
        showImage(index);
        });
    });

    nextBtn.addEventListener("click", () => {
        showImage(currentIndex + 1);
    });

    prevBtn.addEventListener("click", () => {
        showImage(currentIndex - 1);
    });

    closeBtn.addEventListener("click", () => {
        lightbox.classList.remove("active");
    });

    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove("active");
        }
    });

    document.addEventListener("keydown", (e) => {
        if (!lightbox.classList.contains("active")) return;

        if (e.key === "Escape") {
            lightbox.classList.remove("active");
        }

        if (e.key === "ArrowRight") {
            showImage(currentIndex + 1);
        }

        if (e.key === "ArrowLeft") {
            showImage(currentIndex - 1);
        }
    });
}