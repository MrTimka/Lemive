const slider = document.querySelector('.slider'),
      sliderList = document.querySelector('.slider__container_prod'),
      sliderTrack = document.querySelector('.slider__track'),
      sliderItems = document.querySelectorAll('.slider__item'),
      sliderDots = document.querySelectorAll('.slider__dot'),
      slideWidth = slides[0].offsetWidth,
      slideIndex = 0;

function slide() {
  sliderTrack.style.transform = `translate3d(-${slideIndex * slideWidth}px, 0px, 0px)`;
}