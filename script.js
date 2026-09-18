const navbar = document.querySelector(".voltix-navbar");
const navLinks = document.querySelector(".voltix-nav-links");

if (navbar && navLinks) {
    const menuButton = document.createElement("button");

    menuButton.className = "mobile-menu";
    menuButton.innerHTML = '<i class="fa-solid fa-bars"></i>';

    navbar.appendChild(menuButton);

    menuButton.addEventListener("click", function () {
        navLinks.classList.toggle("mobile-active");

        if (navLinks.classList.contains("mobile-active")) {
            menuButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        } else {
            menuButton.innerHTML = '<i class="fa-solid fa-bars"></i>';
        }
    });

    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function () {
            navLinks.classList.remove("mobile-active");
            menuButton.innerHTML = '<i class="fa-solid fa-bars"></i>';
        });
    });
}

const cards = document.querySelectorAll(".product-card");

cards.forEach(card => {
    card.addEventListener("click", () => {

        cards.forEach(item => {
            item.classList.remove("active");
        });

        card.classList.add("active");
    });
});

const products = document.querySelector(".products");
const productCards = document.querySelectorAll(".product-card");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentPosition = 0;


/* Get how many products are visible */

function getVisibleProducts() {

    if (window.innerWidth <= 600) {
        return 1;
    }

    if (window.innerWidth <= 850) {
        return 2;
    }

    return 3;
}


/* Move products */

function updateSlider() {

    const visibleProducts = getVisibleProducts();

    const gap = 25;

    const cardWidth = productCards[0].offsetWidth;

    const maxPosition = productCards.length - visibleProducts;

    if (currentPosition > maxPosition) {
        currentPosition = maxPosition;
    }

    if (currentPosition < 0) {
        currentPosition = 0;
    }

    products.style.transform =
        `translateX(-${currentPosition * (cardWidth + gap)}px)`;
}


/* Next button */

nextBtn.addEventListener("click", function () {

    const visibleProducts = getVisibleProducts();

    if (currentPosition < productCards.length - visibleProducts) {
        currentPosition++;
    }

    updateSlider();

});


/* Previous button */

prevBtn.addEventListener("click", function () {

    if (currentPosition > 0) {
        currentPosition--;
    }

    updateSlider();

});


/* Fix slider when screen size changes */

window.addEventListener("resize", function () {

    updateSlider();

});