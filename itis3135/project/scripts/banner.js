document.addEventListener("DOMContentLoaded", () => {
    const enterButton = document.querySelector("#banner button");
    const howItWorks = document.getElementById("how-it-works");
    const latestProjects = document.getElementById("latest-projects");
  
    enterButton.addEventListener("click", () => {
      // Reveal the sections
      howItWorks.classList.add("revealed");
      latestProjects.classList.add("revealed");
  
      // Smooth scroll to How It Works
      howItWorks.scrollIntoView({ behavior: "smooth" });
    });
  
    // Optional: Hide validation buttons if needed
    const validateHTML = document.getElementById("validate_link_html");
    const validateCSS = document.getElementById("validate_link_css");
    if (validateHTML && validateCSS) {
      validateHTML.style.display = "none";
      validateCSS.style.display = "none";
    }
  });
  