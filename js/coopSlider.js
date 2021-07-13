let slider = document.querySelector('.coop-slider'),
    sliderContainer = slider.querySelector('.coop-slider__container'),
    sliderTrack = slider.querySelector('.coop-slider__track'),
    sliderItems = slider.querySelectorAll('.coop-slider__item'),
    arrows = slider.querySelector('.coop-slider__buttons'),
    next = arrows.children[1],
    prev = arrows.children[0],
    slideWidth = [0],
    width = sliderItems[0].offsetWidth;

    function getWidth() {
        for (let i = 1; i < sliderItems.length; i++) {
            slideWidth[i] = sliderItems[i - 1].offsetWidth;
        }
        for (let i = 2; i < sliderItems.length; i++) {
            slideWidth[i] += slideWidth[i - 1];
        }
        return slideWidth;
    }

let slideIndex = 0.
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
    posThreshold = sliderItems[0].offsetWidth * 0.35,
    trfRegExp = /([-0-9.]+(?=px))/;

    prev.disabled = (slideIndex === 0);
    next.disabled = (slideIndex === --sliderItems.length);

    let getEvent = function() {
      return (event.type.search('touch') !== -1) ? event.touches[0] : event;
    },
    slide = function() {
      if (transition) {
        sliderTrack.style.transition = `transform .5s`;
      }

      sliderTrack.style.transform = `translate3d(-${getWidth()[slideIndex]}px, 0px, 0px)`;

      prev.disabled = (slideIndex === 0);
      next.disabled = (slideIndex === --sliderItems.length);
    },
    swipeStart = function() {
      let evt = getEvent();

      if (allowSwipe) {
        transition = true;

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
            setTransform(transform);
            return;
          } else {
            allowSwipe = true;
          }
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
          } else if (posInit > posX1) {
            slideIndex++;
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
    };

  sliderTrack.style.transform = 'translate3d(0px, 0px, 0px)';
  sliderContainer.classList.add('grab');

  sliderTrack.addEventListener('transitionend', () => allowSwipe = true);
  slider.addEventListener('touchstart', swipeStart);
  slider.addEventListener('mousedown', swipeStart);

  arrows.addEventListener('click', () => {
    let target = event.target;
  
    if (target.classList.contains('next')) {
      slideIndex++;
    } else if (target.classList.contains('prev')) {
      slideIndex--;
    } else {
      return;
    }
    slide();
  });
