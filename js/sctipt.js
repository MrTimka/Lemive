const menuBtn = document.querySelector('.header__menu-button');
const menu = document.querySelector('.menu');
const menuList = document.querySelector('.menu__container');
const body = document.querySelector('body');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('hidden');
    menuList.classList.toggle('active');
    body.classList.toggle('no-scroll');
});


