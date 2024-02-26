document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  document.getElementById("errorEmail").style.display = "none";
  document.getElementById("errorPassword").style.display = "none";

  if (email.trim() === "") {
    displayError("errorEmail", "Email is required.");
    return;
  }

  if (!isValidEmail(email)) {
    displayError("errorEmail", "Invalid email format.");
    return;
  }

  if (password.trim() === "") {
    displayError("errorPassword", "Password is required.");
    return;
  }

  if (password !== "password") {
    displayError("errorPassword", "Passwords is incorrect.");
    return;
  }

  document.getElementById("form").reset();

});

function isValidEmail(email) {
  let emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}

function displayError(errorId, message) {
  let errorElement = document.getElementById(errorId);
  errorElement.innerText = message;
  errorElement.style.display = "block";
}