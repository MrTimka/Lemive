const sliderTrack = document.querySelector('.coop-slider__track'),
      nextArr = document.querySelector('.coop-slider__button_next'),
      prevArr = document.querySelector('.coop-slider__button_prev'),
      sliderItem = document.querySelectorAll('.coop-slider__item');
let scrollWidth,
    slideIndex = 0,
    scroll = 0,
    initialPoint,
    finalPoint;

function scrollSlide(slideIndex) {
    for (let i = 0; i < slideIndex; i++) {
        scrollWidth = sliderItem[i].getBoundingClientRect();
    }
    scroll += scrollWidth.width;
    sliderTrack.style.transform = `translateX(-${scroll}px)`;
}

function scrollSlideBack(slideIndex) {
    for (let i = 10; i > slideIndex; i--) {
        scrollWidth = sliderItem[i - 1].getBoundingClientRect();
    }
    scroll -= scrollWidth.width;
    sliderTrack.style.transform = `translateX(-${scroll}px)`;
}

function isDisabled() {
    nextArr.disabled = slideIndex === 9;
    prevArr.disabled = slideIndex === 0;
}

isDisabled();

nextArr.addEventListener('click', () => {
    if (slideIndex < 9) {
        scrollSlide(++slideIndex);
        isDisabled();
    }
});
prevArr.addEventListener('click', () => {
    if (slideIndex > 0) {
        scrollSlideBack(--slideIndex);
        isDisabled();
    }
});

function swipe() {
    const xAbs = Math.abs(initialPoint.pageX - finalPoint.pageX);
    const yAbs = Math.abs(initialPoint.pageY - finalPoint.pageY);

    if (xAbs > 20 || yAbs > 20) {
        if (xAbs > yAbs) {
            if (finalPoint.pageX < initialPoint.pageX) {
                if (slideIndex < 9) {
                    scrollSlide(++slideIndex);
                    isDisabled();
                }
            } else {
                if (slideIndex > 0) {
                    scrollSlideBack(--slideIndex);
                    isDisabled();
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