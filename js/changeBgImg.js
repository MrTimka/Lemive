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


const gridItem = document.querySelectorAll('.grid');
const windowWidth = window.innerWidth;


    if (windowWidth <= 680) {
        gridItem.forEach((item) => {
            item.innerHTML = `<div class="grid__item"></div>`;
        });
    } else {
        gridItem.forEach((item, i) => {
            item.innerHTML = `<video src="video/background-${i+1}.mp4" class="grid__item" autoplay muted loop></video>`;
        });
    }