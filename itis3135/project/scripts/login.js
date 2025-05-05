document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form action

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simulated credentials (use server/database in real world)
    const validUser = "admin";
    const validPass = "prophecy123";

    if (username === validUser && password === validPass) {
      // Store a flag in localStorage to indicate user is logged in
      localStorage.setItem('loggedIn', 'true');
      alert("Login successful!");
      // Redirect to the dashboard
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid username or password.");
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // Check if the user is already logged in
  if (localStorage.getItem('loggedIn') === 'true') {
    // Redirect to the dashboard if already logged in
    window.location.href = "dashboard.html";
  }
});