// =========================
// MOBILE MENU
// =========================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});


// =========================
// CLOSE MENU AFTER CLICK
// =========================

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });

});


// =========================
// CURRENT YEAR
// =========================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// =========================
// PROGRAM CAROUSEL
// =========================
const programSlider = document.getElementById("programSlider");
const programPrev = document.getElementById("programPrev");
const programNext = document.getElementById("programNext");

programPrev.addEventListener("click", () => {
    programSlider.scrollBy({
        left: -364,
        behavior: "smooth"
    });
});

programNext.addEventListener("click", () => {
    programSlider.scrollBy({
        left: 364,
        behavior: "smooth"
    });
});


// =========================
// BENEFIT CAROUSEL
// =========================

const benefitSlider = document.getElementById("benefitSlider");
const benefitPrev = document.getElementById("benefitPrev");
const benefitNext = document.getElementById("benefitNext");

benefitNext.addEventListener("click", () => {

    benefitSlider.scrollBy({
        left: 290,
        behavior: "smooth"
    });

});

benefitPrev.addEventListener("click", () => {

    benefitSlider.scrollBy({
        left: -290,
        behavior: "smooth"
    });

});


// =========================
// TESTIMONIAL CAROUSEL
// =========================

const testimonialSlider =
    document.getElementById("testimonialSlider");

const testimonialPrev =
    document.getElementById("testimonialPrev");

const testimonialNext =
    document.getElementById("testimonialNext");


// Scroll ke kiri

testimonialPrev.addEventListener("click", () => {

    testimonialSlider.scrollBy({
        left: -360,
        behavior: "smooth"
    });

});


// Scroll ke kanan

testimonialNext.addEventListener("click", () => {

    testimonialSlider.scrollBy({
        left: 360,
        behavior: "smooth"
    });

});