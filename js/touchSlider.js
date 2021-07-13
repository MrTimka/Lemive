let slider = document.querySelector('.slider'),
    sliderContainer = slider.querySelector('.slider__container'),
    sliderTrack = slider.querySelector('.slider__track'),
    sliderItems = slider.querySelectorAll('.slider__item'),
    dots = document.querySelectorAll('.slider__dot'),
    slideWidth = sliderItems[0].offsetWidth + 20,
    slideIndex = 0,
    posInit = 0,
    posX1 = 0,
    posX2 = 0,
    posY1 = 0,
    posY2 = 0,
    posFinal = 0,
    isSwipe = false,
    isScroll = false,
    allowSwipe = true,
    transition = true,
    nextTrf = 0,
    prevTrf = 0,
    lastTrf = --sliderItems.length * slideWidth,
    posThreshold = sliderItems[0].offsetWidth * 0.35,
    trfRegExp = /([-0-9.]+(?=px))/,
    getEvent = function() {
      return (event.type.search('touch') !== -1) ? event.touches[0] : event;
    },
    slide = function() {
      if (transition) {
        sliderTrack.style.transition = `transform .5s`;
      }
      sliderTrack.style.transform = `translate3d(-${slideIndex * slideWidth}px, 0px, 0px)`;
    },
    swipeStart = function() {
      let evt = getEvent();

      if (allowSwipe) {
        transition = true;

        nextTrf = (slideIndex + 1) * -slideWidth;
        prevTrf = (slideIndex - 1) * -slideWidth;

        posInit = posX1 = evt.clientX;
        posY1 = evt.clientY;

        sliderTrack.style.transition = '';

        document.addEventListener('touchmove', swipeAction);
        document.addEventListener('mousemove', swipeAction);
        document.addEventListener('touchend', swipeEnd);
        document.addEventListener('mouseup', swipeEnd);

        sliderContainer.classList.remove('grab');
        sliderContainer.classList.add('grabbing');
      }
    },
    swipeAction = function() {
      let evt = getEvent();
          style = sliderTrack.style.transform;
          transform = +style.match(trfRegExp)[0];

      posX2 = posX1 - evt.clientX;
      posX1 = evt.clientX;

      posY2 = posY1 - evt.clientY;
      posY1 = evt.clientY;

      if (!isSwipe && !isScroll) {
        let posY = Math.abs(posY2);
        if (posY > 7 || posX2 === 0) {
          isScroll = true;
          allowSwipe = false;
        } else if (posY < 7) {
          isSwipe = true;
        }
      }

      if (isSwipe) {
        if (slideIndex === 0) {
          if (posInit < posX1) {
            setTransform(transform, 0);
            return;
          } else {
            allowSwipe = true;
          }
        }

        if (slideIndex === --sliderItems.length) {
          if (posInit > posX1) {
            setTransform(transform, lastTrf);
            return;
          } else {
            allowSwipe = true;
          }
        }

        if (posInit > posX1 && transform < nextTrf || posInit < posX1 && transform > prevTrf) {
          reachEdge();
          return;
        }

        sliderTrack.style.transform = `translate3d(${transform - posX2}px, 0px, 0px)`;
      }   
    },
    swipeEnd = function() {
      posFinal = posInit - posX1;

      isScroll = false;
      isSwipe = false;

      document.removeEventListener('touchmove', swipeAction);
      document.removeEventListener('mousemove', swipeAction);
      document.removeEventListener('touchend', swipeEnd);
      document.removeEventListener('mouseup', swipeEnd);

      sliderContainer.classList.add('grab');
      sliderContainer.classList.remove('grabbing');

      if (allowSwipe) {
        if (Math.abs(posFinal) > posThreshold) {
          if (posInit < posX1) {
            slideIndex--;
            dots[slideIndex].classList.add('dot-active');
            dots[slideIndex + 1].classList.remove('dot-active');  
          } else if (posInit > posX1) {
            slideIndex++;
            dots[slideIndex].classList.add('dot-active');
            dots[slideIndex - 1].classList.remove('dot-active');
          }
        }

        if (posInit !== posX1) {
          allowSwipe = false;
          slide();
        } else {
          allowSwipe = true;
        }

      } else {
        allowSwipe = true;
      }
    },
    setTransform = function(transform, comapreTransform) {
      if (transform >= comapreTransform) {
        if (transform > comapreTransform) {
          sliderTrack.style.transform = `translate3d(${comapreTransform}px, 0px, 0px)`;
        }
      }
      allowSwipe = false;
    },
    reachEdge = function() {
      transition = false;
      swipeEnd();
      allowSwipe = true;
    };

  sliderTrack.style.transform = 'translate3d(0px, 0px, 0px)';
  sliderContainer.classList.add('grab');

  sliderTrack.addEventListener('transitionend', () => allowSwipe = true);
  slider.addEventListener('touchstart', swipeStart);
  slider.addEventListener('mousedown', swipeStart);

  
dots.forEach((item, i) => {
  item.addEventListener('click', () => {
    slideIndex = i;
    slide();
    dots.forEach(item => {
      item.classList.remove('dot-active');
    });
    item.classList.add('dot-active');
  });
});

