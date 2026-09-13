const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

const images = document.querySelectorAll(".img--container");

images.forEach(image => {
    image.addEventListener("click", () => {
        const modal = document.createElement("div");
        modal.classList.add("image-modal");

        const enlargedImage = document.createElement("img");
        enlargedImage.src = image.src;
        enlargedImage.alt = image.alt;

        modal.appendChild(enlargedImage);
        document.body.appendChild(modal);

        modal.style.display = "flex";

        modal.addEventListener("click", () => {
            modal.remove();
        });
    });
});

const creativeBtn = document.getElementById("creative-btn");
const technicalBtn = document.getElementById("technical-btn");

const creativeWork = document.getElementById("creative-work");
const technicalWork = document.getElementById("technical-work");

creativeBtn.addEventListener("click", () => {
    creativeWork.classList.remove("hidden");
    technicalWork.classList.add("hidden");

    creativeBtn.classList.add("active");
    technicalBtn.classList.remove("active");
});

technicalBtn.addEventListener("click", () => {
    technicalWork.classList.remove("hidden");
    creativeWork.classList.add("hidden");

    technicalBtn.classList.add("active");
    creativeBtn.classList.remove("active");
});