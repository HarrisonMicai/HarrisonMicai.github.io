document.addEventListener("DOMContentLoaded", () => {
  const enterButton = document.getElementById("enter-btn");
  const howItWorks = document.getElementById("how-it-works");
  const latestProjects = document.getElementById("latest-projects");

  enterButton.addEventListener("click", () => {
    howItWorks.classList.add("revealed");
    latestProjects.classList.add("revealed");
    howItWorks.scrollIntoView({ behavior: "smooth" });
  });

  // Safely hide validation links if present
  const validateHTML = document.getElementById("validate_link_html");
  const validateCSS = document.getElementById("validate_link_css");
  if (validateHTML) validateHTML.style.display = "none";
  if (validateCSS) validateCSS.style.display = "none";
});

  