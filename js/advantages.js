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

//coop-slider
let position = 0;
const prevButton = document.querySelector('.coop-slider__button_prev');
const nextButton = document.querySelector('.coop-slider__button_next');
const track = document.querySelector('.coop-slider__container');
const items = document.querySelectorAll('.coop-slider__item');
const itemsCount = items.length;
let scrollWidth = 960;

nextButton.addEventListener('click', () => {
    position++;
    scrollSlides(position);
    checkBtns(position);
});

prevButton.addEventListener('click', () => {
    position--;
    scrollSlides(position);
    checkBtns(position);
});

function scrollSlides(pos) {
  let scroll = scrollWidth * pos;
  track.style.transform = `translateX(-${scroll}px)`;
}

function checkBtns(pos) {
   if (pos === 0) {
       prevButton.disabled = true;
   } else if (pos >= 4) {
        nextButton.disabled = true;
   }
}

checkBtns();



// window.addEventListener('resize', move);

// function move() {
//   const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

//   if (viewport_width <= 968) {
//     scrollWidth = 660;
//     if (viewport_width <= 680) {
//       scrollWidth = viewport_width - 20;
//     }
//   } else {
//     scrollWidth = 970;
//   }
//   return(scrollWidth);
// }

// move();