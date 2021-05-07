const menuBtn = document.querySelector('.header__menu-button');
const menu = document.querySelector('.menu');
const menuList = document.querySelector('.menu__container');
const body = document.querySelector('body');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    //menu.classList.toggle('view');
    menuList.classList.toggle('active');
    body.classList.toggle('no-scroll');

    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        setTimeout(function () {
            menuList.classList.remove('visuallyhidden');
        }, 20);
      } else {
        menuList.classList.add('visuallyhidden');
        setTimeout(function () {
            menu.classList.add('hidden');
          }, 20);
      }
});


