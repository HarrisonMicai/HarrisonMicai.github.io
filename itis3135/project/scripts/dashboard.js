document.addEventListener("DOMContentLoaded", function () {
    // Check if the user is logged in
    if (localStorage.getItem('loggedIn') !== 'true') {
      // Redirect user to the login page if they are not logged in
      window.location.href = "index.html";
    }
  
    const logoutButton = document.getElementById("logoutButton");
  
    if (logoutButton) {
      logoutButton.addEventListener("click", function () {
        // Remove the login flag from localStorage
        localStorage.removeItem('loggedIn');
        alert("You have logged out.");
        // Redirect to the login page
        window.location.href = "index.html";
      });
    }
  });
  