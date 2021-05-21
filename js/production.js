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

//slider
const dots = document.querySelectorAll('.slider__dot');
const track = document.querySelector('.slider__container');
let scrollWidth = 970;

dots.forEach((item, i) => {
  item.addEventListener('click', () => {
    console.log('click');
    scrollSlides(i);
    dots.forEach(item => {
      item.classList.remove('dot-active');
    });
    item.classList.add('dot-active');
  });
});

function scrollSlides(n) {
  let scroll = scrollWidth * n;
  track.style.transform = `translateX(-${scroll}px)`;
}

window.addEventListener('resize', move);

function move() {
  const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

  if (viewport_width <= 968) {
    scrollWidth = 660;
    if (viewport_width <= 680) {
      scrollWidth = viewport_width - 20;
    }
  } else {
    scrollWidth = 970;
  }
  return(scrollWidth);
}

move();