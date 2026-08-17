// ==========================================
// MOBILE NAVIGATION
// ==========================================

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");


// Open / close mobile menu
menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Close mobile menu after clicking a link
const links = navLinks.querySelectorAll("a");

links.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// ==========================================
// CTA BUTTON
// ==========================================

const ctaButton = document.getElementById("ctaButton");

ctaButton.addEventListener("click", () => {

    alert("CampusHub is coming soon! 🚀");

});