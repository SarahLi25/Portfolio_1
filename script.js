//auto scroll after landing
//add the drop and swing for id card (landing)
//add dark/light mode
// Simple toggle function
function toggleDarkMode() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
}

//event listeners//
document.getElementById('dark-mode-btn')?.addEventListener('click', toggleDarkMode);
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

// === Experience Roadmap JS ===
document.addEventListener('DOMContentLoaded', function() {
    let checkpoints = document.querySelectorAll('.checkpoint');
    let popupBox = document.getElementById('popup-box');
    let popupText = document.getElementById('popup-text');
    let closeBtn = document.getElementById('close-btn');

    // Popups
    let content = [
        'The Dough! 🍕<br><br> Gained hands-on experience in coding, design, and professional tools.',
        'Adding the Sauce! 🍅<br><br>Time to add some flavor! Collaborated with interns to brainstorm, plan, and develop projects together.',
        'The Cheese Layer! 🧀<br><br>The cheese brings everything together!Got guidance from industry professionals and improved soft skills.',
        'Into the Oven! 🔥<br><br>The final step - putting it all in the oven! Showcased my projects and work to peers, mentors, and tech leaders.'
    ];

    // Add click events to checkpoints
    checkpoints.forEach((checkpoint, index) => {
        checkpoint.addEventListener('click', function() {
            popupText.innerHTML = content[index];
            popupBox.style.display = 'block';
        });
    });

    // Close popup
    closeBtn.addEventListener('click', function() {
        popupBox.style.display = 'none';
    });

    // Close on outside click
    document.addEventListener('click', function(e) {
        if (!popupBox.contains(e.target) && !e.target.closest('.checkpoint')) {
            popupBox.style.display = 'none';
        }
    });
});





