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

const slideMenu = document.querySelector('.menu');

// window.addEventListener('resize', move);

// function move() {
//   const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) / 3;

//   slideMenu.style.transform = `matrix(1, 0, 0, 1, ${viewport_width}, 0)`;

// //   if (viewport_width <= 968) {
// //     scrollWidth = 660;
// //     if (viewport_width <= 680) {
// //       scrollWidth = viewport_width - 20;
// //     }
// //   } else {
// //     scrollWidth = 970;
// //   }
// //   return(scrollWidth);
// }

// move();