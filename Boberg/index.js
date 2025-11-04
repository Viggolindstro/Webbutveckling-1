
const closeMenu = () => {
    const nav = document.querySelector('nav');
    nav.classList.add('hidden');
}
const menuCloseBeta = document.querySelector('.menu-close-beta');
menuCloseBeta.addEventListener('click', closeMenu);