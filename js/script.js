document.addEventListener('DOMContentLoaded', function () {
  const toggle_Button = document.querySelector('.mobile-menu-toggle');

  const mobile_Menu = document.querySelector('.mobile-mm-items');

  toggle_Button.addEventListener('click', function () {
    mobile_Menu.classList.toggle('active');
  });
});

// cards slider
const slider = document.querySelector('.menu-box');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSliderPosition();
  }
});

nextButton.addEventListener('click', () => {
  if (currentIndex < slider.children.length - 1) {
    currentIndex++;
    updateSliderPosition();
  }

  //   function updateSliderPosition() {
  //   const offset = -currentIndex * (slider.children[0].offsetWidth + 20); // 20px is the margin
  //   slider.style.transform = `translateX(${offset}px)`;
  // }
  // setInterval(showNextSlide, 3000);
});
