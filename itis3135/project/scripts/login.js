document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
      e.preventDefault(); // prevent default form action

      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      // Simulated credentials (use server/database in real world)
      const validUser = "admin";
      const validPass = "prophecy123";

      if (username === validUser && password === validPass) {
        alert("Login successful!");
        // You could redirect to the dashboard:
        window.location.href = "dashboard.html";
      } else {
        alert("Invalid username or password.");
      }
    });
  });