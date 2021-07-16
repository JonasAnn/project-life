
var mybutton = document.getElementById("myBtn");

// hamburger toggle
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav_list");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    console.log("v");
    navMenu.classList.toggle("active");
}
