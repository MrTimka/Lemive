const menuBtn = document.querySelector('.header__menu-button');
      menu = document.querySelector('.menu');
      menuList = document.querySelector('.menu__container');
      body = document.querySelector('body');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('hidden');
    menuList.classList.toggle('active');
    body.classList.toggle('no-scroll');
});