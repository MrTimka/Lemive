const menuBtn = document.querySelector('.header__menu-button');
      menu = document.querySelector('.header-menu');
      menuList = document.querySelector('.header-menu__container');
      body = document.querySelector('body');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('visualyhidden');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden')
    } else {
        setTimeout(() => {
            menu.classList.add('hidden')
        }, 800);
    }
    menuList.classList.toggle('active');
    body.classList.toggle('no-scroll');
});

const gridItem = document.querySelectorAll('.grid__item');

window.addEventListener('resize', move);

function move() {
    const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) / 3;

    if (viewport_width <= 680) {
        gridItem.forEach((item, i) => {
            // item.innerHTML = `<img src="img/background-${i+1}" alt="background">`;
            item.innerHTML = '';
        });
    }   
}