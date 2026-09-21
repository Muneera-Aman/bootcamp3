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

function getVisibleProducts() {

    if (window.innerWidth <= 600) {
        return 1;
    }

    if (window.innerWidth <= 850) {
        return 2;
    }

    return 3;
}


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

nextBtn.addEventListener("click", function () {
    const visibleProducts = getVisibleProducts();

    if (currentPosition < productCards.length - visibleProducts) {
        currentPosition++;
    }
    updateSlider();

});

prevBtn.addEventListener("click", function () {

    if (currentPosition > 0) {
        currentPosition--;
    }

    updateSlider();

});


window.addEventListener("resize", function () {
    updateSlider();

});

// 666666

document.addEventListener("DOMContentLoaded", () => {

    const navLinks = document.querySelector(".voltix-nav-links");
    const navIcons = document.querySelector(".voltix-nav-icons");

    if (!navLinks || !navIcons) return;


    /* =========================================
       REMOVE PREVIOUS MOBILE MENU
    ========================================= */

    document.querySelector(".voltix-mobile-menu")?.remove();
    document.querySelector(".voltix-menu-overlay")?.remove();


    /* =========================================
       CREATE MOBILE MENU
    ========================================= */

    const mobileMenu = document.createElement("div");

    mobileMenu.className = "voltix-mobile-menu";

    mobileMenu.innerHTML = `

        <div class="voltix-mobile-header">

            <strong>Menu</strong>

            <button class="voltix-mobile-close">
                <i class="fa-solid fa-xmark"></i>
            </button>

        </div>


        <div class="voltix-mobile-navigation">

            <a href="#Home">
                <span>Home</span>
                <i class="fa-solid fa-house"></i>
            </a>

            <a href="#Shop">
                <span>Shop</span>
                <i class="fa-solid fa-store"></i>
            </a>

            <a href="#Catagories">
                <span>Categories</span>
                <b>+</b>
            </a>

            <a href="#Deals">
                <span>Deals</span>
                <i class="fa-solid fa-tag"></i>
            </a>

            <a href="#New">
                <span>New Arrivals</span>
                <i class="fa-solid fa-star"></i>
            </a>

        </div>


        <div class="voltix-mobile-account">

            <div>
                <i class="fa-regular fa-user"></i>
                <small>Account</small>
            </div>

            <div>
                <i class="fa-regular fa-heart"></i>
                <small>Wishlist</small>
                <em>2</em>
            </div>

            <div>
                <i class="fa-solid fa-bag-shopping"></i>
                <small>Bag</small>
                <em>3</em>
            </div>

        </div>


        <div class="voltix-mobile-shipping">

            <i class="fa-solid fa-truck-fast"></i>

            <span>
                Complimentary express shipping
                on orders over $75
            </span>

        </div>

    `;

    document.body.appendChild(mobileMenu);


    /* =========================================
       OVERLAY
    ========================================= */

    const overlay = document.createElement("div");

    overlay.className = "voltix-menu-overlay";

    document.body.appendChild(overlay);

    const possibleButton = document.querySelector(".mobile-menu");


    /* =========================================
       OPEN
    ========================================= */

    function openMenu() {

        mobileMenu.classList.add("active");
        overlay.classList.add("active");

        document.body.classList.add("voltix-menu-open");

    }


    /* =========================================
       CLOSE
    ========================================= */

    function closeMenu() {

        mobileMenu.classList.remove("active");
        overlay.classList.remove("active");

        document.body.classList.remove("voltix-menu-open");

    }


    /* =========================================
       CONNECT EXISTING SYMBOL
    ========================================= */

    if (possibleButton) {

        possibleButton.addEventListener("click", (event) => {

            if (window.innerWidth <= 768) {

                event.preventDefault();

                openMenu();

            }

        });

    }


    /* =========================================
       CLOSE BUTTON
    ========================================= */

    mobileMenu
        .querySelector(".voltix-mobile-close")
        .addEventListener("click", closeMenu);


    /* =========================================
       OVERLAY
    ========================================= */

    overlay.addEventListener("click", closeMenu);


    /* =========================================
       NAVIGATION LINKS
    ========================================= */

    mobileMenu
        .querySelectorAll(".voltix-mobile-navigation a")
        .forEach(link => {

            link.addEventListener("click", closeMenu);

        });


    /* =========================================
       ESCAPE
    ========================================= */

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            closeMenu();

        }

    });


    /* =========================================
       STYLE
    ========================================= */

    const style = document.createElement("style");

    style.textContent = `

        @media (max-width: 768px) {

            .voltix-mobile-menu {

                position: fixed;

                top: 0;
                right: -100%;

                width: 88%;
                max-width: 390px;

                height: 100vh;

                background: #fff;

                z-index: 99999;

                padding: 25px;

                box-sizing: border-box;

                overflow-y: auto;

                box-shadow:
                    -15px 0 45px rgba(0,0,0,.20);

                transition:
                    right .4s cubic-bezier(.77,0,.18,1);
            }


            .voltix-mobile-menu.active {

                right: 0;

            }


            .voltix-menu-overlay {

                position: fixed;

                inset: 0;

                z-index: 99998;

                background:
                    rgba(0,0,0,.45);

                backdrop-filter:
                    blur(6px);

                opacity: 0;

                visibility: hidden;

                transition: .3s ease;
            }


            .voltix-menu-overlay.active {

                opacity: 1;

                visibility: visible;

            }


            .voltix-mobile-header {

                display: flex;

                align-items: center;

                justify-content: space-between;

                padding-bottom: 22px;

                border-bottom:
                    1px solid #eee;

            }


            .voltix-mobile-header strong {

                font-size: 23px;

                color: #111827;

            }


            .voltix-mobile-close {

                width: 42px;

                height: 42px;

                border: none;

                border-radius: 50%;

                background: #f3f4f6;

                font-size: 19px;

                cursor: pointer;

                transition: .3s ease;

            }


            .voltix-mobile-close:hover {

                background: #111827;

                color: #fff;

                transform: rotate(90deg);

            }


            .voltix-mobile-navigation {

                padding-top: 25px;

            }


            .voltix-mobile-navigation a {

                display: flex;

                align-items: center;

                justify-content: space-between;

                padding: 17px 15px;

                margin-bottom: 8px;

                border-radius: 14px;

                text-decoration: none;

                color: #111827;

                font-size: 17px;

                font-weight: 600;

                transition: .25s ease;

            }


            .voltix-mobile-navigation a:hover {

                background: #111827;

                color: #fff;

                transform: translateX(5px);

            }


            .voltix-mobile-navigation b {

                font-size: 22px;

                font-weight: 400;

            }


            .voltix-mobile-account {

                display: grid;

                grid-template-columns:
                    repeat(3,1fr);

                gap: 10px;

                padding-top: 22px;

                margin-top: 15px;

                border-top:
                    1px solid #eee;

            }


            .voltix-mobile-account > div {

                position: relative;

                height: 75px;

                display: flex;

                flex-direction: column;

                align-items: center;

                justify-content: center;

                gap: 6px;

                border-radius: 15px;

                background: #f6f6f6;

            }


            .voltix-mobile-account i {

                font-size: 20px;

            }


            .voltix-mobile-account small {

                font-size: 11px;

            }


            .voltix-mobile-account em {

                position: absolute;

                top: 6px;

                right: 7px;

                width: 18px;

                height: 18px;

                display: flex;

                align-items: center;

                justify-content: center;

                border-radius: 50%;

                background: #e11d48;

                color: white;

                font-size: 10px;

                font-style: normal;

            }


            .voltix-mobile-shipping {

                display: flex;

                align-items: center;

                gap: 12px;

                margin-top: 25px;

                padding: 18px;

                border-radius: 17px;

                background: #111827;

                color: white;

                font-size: 12px;

                line-height: 1.5;

            }


            .voltix-mobile-shipping i {

                font-size: 20px;

            }


            body.voltix-menu-open {

                overflow: hidden;

            }

        }


        @media (min-width: 769px) {

            .voltix-mobile-menu,
            .voltix-menu-overlay {

                display: none !important;

            }

        }

    `;

    document.head.appendChild(style);

});
