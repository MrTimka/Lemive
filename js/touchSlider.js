const sliderTrack = document.querySelector('.slider__track');
const dots = document.querySelectorAll('.slider__dot');
let initialPoint,
    finalPoint,
    scrollWidth = 970,
    slideIndex = 0,
    slidesCount = 5;

function swipe() {
    const xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
    const yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);

    if (xAbs > 20 || yAbs > 20) {
        if (xAbs > yAbs) {
            if (finalPoint.pageX < initialPoint.pageX) {
                if (slideIndex < 4) {
                    slideIndex++;
                    scrollSlides(slideIndex);
                    dots[slideIndex].classList.add('dot-active');
                    dots[slideIndex - 1].classList.remove('dot-active');
                } else {
                    scrollSlides(slideIndex);
                }
            } else {
                if (slideIndex > 0) {
                    slideIndex--;
                    scrollSlides(slideIndex);
                    dots[slideIndex].classList.add('dot-active');
                    dots[slideIndex + 1].classList.remove('dot-active');
                } else {
                    scrollSlides(slideIndex);
                }
            }
        }
    }
}

sliderTrack.addEventListener('touchstart', (event) => {
    event.preventDefault();
    event.stopPropagation();
    initialPoint = event.changedTouches[0];
});
sliderTrack.addEventListener('mousedown', (event) => {
    event.preventDefault();
    event.stopPropagation();
    initialPoint = event;
    sliderTrack.classList.add('grabbing');
});
sliderTrack.addEventListener('touchend', (event) => {
    event.preventDefault();
    event.stopPropagation();
    finalPoint = event.changedTouches[0];
    swipe();
});
sliderTrack.addEventListener('mouseup', (event) => {
    event.preventDefault();
    event.stopPropagation();
    finalPoint = event;
    swipe();
    sliderTrack.classList.remove('grabbing');
});
sliderTrack.addEventListener('mouseenter', () => {
  sliderTrack.classList.add('grab');
});



dots.forEach((item, i) => {
  item.addEventListener('click', () => {
    scrollSlides(i);
    slideIndex = i;
    dots.forEach(item => {
      item.classList.remove('dot-active');
    });
    item.classList.add('dot-active');
  });
});

function scrollSlides(n) {
  let scroll = scrollWidth * n;
  sliderTrack.style.transform = `translateX(-${scroll}px)`;
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