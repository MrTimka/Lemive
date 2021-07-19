const rangeSlider = document.querySelectorAll('.examples__range'),
      beforeImg = document.querySelectorAll('.examples__before-img'),
      image = document.querySelector('.examples__img'),
      hiddenImage = document.querySelectorAll('.examples__hidden'),
      thumb = document.querySelectorAll('.examples__thumb'),
      thumbCenter = rangeSlider[0].offsetWidth / 2 - 22,
      scrollRatio = rangeSlider[0].offsetWidth / 100;

      
hiddenImage.forEach((item,i) => {
    item.style.width = `${rangeSlider[0].offsetWidth}px`;
    thumb[i].style.left = `${thumbCenter}px`;
});

rangeSlider.forEach((item, i) => {
    item.addEventListener('input', (event) => {
        beforeImg[i].style.width = `${event.target.value}%`;
        thumb[i].style.left = `${event.target.value * scrollRatio - 22}px`;
        beforeImg[i].style.transition = 'width 0s';
        thumb[i].style.transition = 'left 0s';
    });

    item.addEventListener('mouseup', () => {
        beforeImg[i].style.width = '50%';
        thumb[i].style.left = `${thumbCenter}px`;
        beforeImg[i].style.transition = 'width .3s';
        thumb[i].style.transition = 'left .3s';
    });

    item.addEventListener('touchend', () => {
        beforeImg[i].style.width = '50%';
        thumb[i].style.left = `${thumbCenter}px`;
        beforeImg[i].style.transition = 'width .3s';
        thumb[i].style.transition = 'left .3s';
    });
});
