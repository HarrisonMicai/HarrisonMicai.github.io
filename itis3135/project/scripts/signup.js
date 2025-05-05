document.getElementById("signup-form").addEventListener("submit", function(event) {
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirm-password").value;
    if (password !== confirm) {
      alert("Passwords do not match.");
      event.preventDefault();
    }
  });