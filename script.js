//auto scroll after landing
//add the drop and swing for id card (landing)
//add dark/light mode
//fade in
//carosel for education

let carousel = document.getElementById('leadership-carousel');
let btnLeft = document.querySelector('.scroll-btn.left');
let btnRight = document.querySelector('.scroll-btn.right');

btnLeft.addEventListener('click', () => scrollCarousel('left'));
btnRight.addEventListener('click', () => scrollCarousel('right'));

function scrollCarousel(direction) {
  let slideWidth = carousel.clientWidth; // width of visible carousel area
  let maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
  let scrollLeft = carousel.scrollLeft;

  if (direction === 'right') {
    scrollLeft += slideWidth;
    if (scrollLeft > maxScrollLeft) scrollLeft = maxScrollLeft;
  } else if (direction === 'left') {
    scrollLeft -= slideWidth;
    if (scrollLeft < 0) scrollLeft = 0;
  }

  carousel.scrollTo({
    left: scrollLeft,
    behavior: 'smooth'
  });
}



