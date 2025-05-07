document.addEventListener('DOMContentLoaded', () => {
  const enterBtn = document.querySelector('#enterbtn');
  const howItWorks = document.querySelector('#how-it-works');
  const latestProjects = document.querySelector('#latest-projects');

  if (enterBtn && howItWorks && latestProjects) {
    enterBtn.addEventListener('click', () => {
      howItWorks.classList.add('revealed');
      latestProjects.classList.add('revealed');
      howItWorks.scrollIntoView({ behavior: 'smooth' });
    });
  }

  const leftArrow = document.querySelector('.carousel-button.left');
  const rightArrow = document.querySelector('.carousel-button.right');
  const track = document.querySelector('.carousel-track');
  const items = document.querySelectorAll('.carousel-item');
  let index = 0;

  if (track && items.length && leftArrow && rightArrow) {
    const updateCarousel = () => {
      const width = track.clientWidth;
      track.style.transform = `translateX(-${index * width}px)`;
    };

    rightArrow.addEventListener('click', () => {
      index = (index + 1) % items.length;
      updateCarousel();
    });

    leftArrow.addEventListener('click', () => {
      index = (index - 1 + items.length) % items.length;
      updateCarousel();
    });

    window.addEventListener('resize', updateCarousel);
    updateCarousel(); // Initialize on load
  }
});

  