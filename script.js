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

//pop ups
// Select popup elements
let popupBox = document.getElementById('popup-box');
let popupText = document.getElementById('popup-text');
let closeBtn = document.getElementById('close-btn');

// Define messages for each checkpoint
let steps = {
  'checkpoint-1': 'Step 1: Learned HTML, CSS, JavaScript, and GitHub.',
  'checkpoint-2': 'Step 2: Collaborated with peers on real-world group projects.',
  'checkpoint-3': 'Step 3: Grew leadership and communication through workshops.',
  'checkpoint-4': 'Step 4: Presented projects and gained mentorship.'
};

// Select all checkpoint elements
let checkpoints = document.querySelectorAll('.checkpoint');

// Add click event to each checkpoint
checkpoints.forEach(cp => {
  cp.addEventListener('click', () => {
    let stepClass = Array.from(cp.classList).find(cls => cls.startsWith('checkpoint-'));
    if (stepClass && steps[stepClass]) {
      popupText.textContent = steps[stepClass];
      popupBox.style.display = 'block';
    }
  });
});

// Close popup when X is clicked
closeBtn.addEventListener('click', () => {
  popupBox.style.display = 'none';
});

// Close popup on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    popupBox.style.display = 'none';
  }
});




