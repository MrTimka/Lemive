const rangeSlider = document.querySelectorAll('.examples__range'),
      beforeImg = document.querySelectorAll('.examples__before-img'),
      image = document.querySelector('.examples__img'),
      hiddenImage = document.querySelectorAll('.examples__hidden'),
      scrollRatio = image.getBoundingClientRect().width / 100,
      imageCenter = image.clientWidth / 2;

hiddenImage.forEach(item => {
    item.style.minWidth = `${image.clientWidth}px`;
});

rangeSlider.forEach((item, i) => {
    item.addEventListener('input', (event) => {
        beforeImg[i].style.width = `${event.target.value * scrollRatio}px`;
    });

    item.addEventListener('mouseup', () => {
        beforeImg[i].style.width = `${imageCenter}px`;
        item.value = 50;
    });

    item.addEventListener('touchend', () => {
        beforeImg[i].style.width = `${imageCenter}px`;
        item.value = 50;
    });
});
