let nextDom = document.getElementById('arrows__next');
let prevDom = document.getElementById('arrows__prev');

let carouselDom = document.querySelector('.carousel');
let listItemDom  = carouselDom.querySelector('.carousel .carousel__list');
let thumbnailDom  = document.querySelector('.carousel .thumbnail .thumbnail__list');

nextDom.onclick = function(){
  showSlider('next');    
}

prevDom.onclick = function(){
  showSlider('prev');    
}

let timeRunnig = 3000;
let timeAutoNext = 7000;

let runTimeOut;
let runAutoRun = setTimeout(() => {
  nextDom.click();
}, timeAutoNext);

function showSlider(type) {
  let itemSlider = document.querySelectorAll('.carousel .carousel__list .carousel__item');
  let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .thumbnail__item');

  if (type === 'next') {
    listItemDom.appendChild(itemSlider[0]);
    thumbnailDom.appendChild(itemThumbnail[0]);
    carouselDom.classList.add('next');
  } else {
    let positionLastItem = itemSlider.length - 1; 
    listItemDom.prepend(itemSlider[positionLastItem]);
    thumbnailDom.prepend(itemThumbnail[positionLastItem]);
    carouselDom.classList.add('prev');
  }

  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselDom.classList.remove('next');
    carouselDom.classList.remove('prev');
  }, timeRunnig);

  clearTimeout(runAutoRun);
  runAutoRun = setTimeout(() => {
    nextDom.click();
  }, timeAutoNext);
} 