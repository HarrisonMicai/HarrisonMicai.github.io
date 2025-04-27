/* ===================== */
/*       script.js       */
/* ===================== */

document.addEventListener('DOMContentLoaded', () => {
    const enterBtn = document.querySelector('#enterBtn');
    const howItWorks = document.querySelector('#howItWorks');
  
    if (enterBtn && howItWorks) {
      enterBtn.addEventListener('click', () => {
        howItWorks.scrollIntoView({ behavior: 'smooth' });
      });
    }
  
    const leftArrow = document.querySelector('.carousel-button.left');
    const rightArrow = document.querySelector('.carousel-button.right');
    const track = document.querySelector('.carousel-track');
    let index = 0;
  
    if (track && leftArrow && rightArrow) {
      const updateCarousel = () => {
        const width = track.clientWidth;
        track.style.transform = `translateX(-${index * width}px)`;
      };
  
      rightArrow.addEventListener('click', () => {
        index = (index + 1) % track.children.length;
        updateCarousel();
      });
  
      leftArrow.addEventListener('click', () => {
        index = (index - 1 + track.children.length) % track.children.length;
        updateCarousel();
      });
  
      window.addEventListener('resize', updateCarousel);
    }
  });
  