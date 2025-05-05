
  let slideIndex = 0;
  const slides = document.getElementsByClassName("slide");

  function showSlide(index) {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      let iframe = slides[i].querySelector('iframe');
      if (iframe) {
        iframe.src = iframe.src; // Reset video playback
      }
    }
    slides[index].style.display = "block";
  }

  function changeSlide(n) {
    slideIndex += n;
    if (slideIndex >= slides.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = slides.length - 1;
    showSlide(slideIndex);
  }

  // Initialize the slideshow
  window.addEventListener("load", () => {
    showSlide(slideIndex);
  });

