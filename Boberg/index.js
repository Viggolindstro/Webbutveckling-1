const navbar = document.querySelector("nav");
const mobileNav = document.querySelector
(".mobile-nav");
const hamburgerBtn = document.querySelector
("#menu-open");
 
const closeMenu = () => {
    mobileNav.classList.add("hidden"); 
    mobileNav.classList.add("nav-close");
    hamburgerBtn.classList.remove("hidden");
}
 
const openMenu = () => {
    hamburgerBtn.classList.add("hidden");
    mobileNav.classList.remove("nav-close");
    mobileNav.classList.remove("hidden");
}    
 
const menuCloseBtn = document
.querySelector("#menu-close")
.addEventListener("click", closeMenu)
 
const menuOpenBtn = document
.querySelector("#menu-open")
.addEventListener("click", openMenu)
