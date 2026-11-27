
// RINKLINE SOUNDS JAVASCRIPT
// ====================================

// 1. TEST IF JAVASCRIPT IS WORKING

console.log("Welcome to Rinkline Sounds!");

// 2. DISPLAY A WELCOME MESSAGE

alert("Welcome to Rinkline Sounds!");

// 3. GET THE CURRENT YEAR

const currentYear = new Date().getFullYear();

console.log("Current year:", currentYear);

// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function() {

    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

});

// CLOSE MENU AFTER CLICKING A LINK

document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

    });

});
