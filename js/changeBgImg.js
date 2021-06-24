const gridItem = document.querySelectorAll('.grid');
const windowWidth = window.innerWidth;


    if (windowWidth <= 680) {
        gridItem.forEach((item) => {
            item.innerHTML = `<div class="grid__item"></div>`;
        });
    } else {
        gridItem.forEach((item, i) => {
            item.innerHTML = `<video src="video/background-${i+1}.mp4" class="grid__item" autoplay muted loop></video>`;
        });
    }