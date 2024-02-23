document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (email.trim() === "") {
    displayError("valid-email", "Email is required.");
    return;
  }

  if (!isValidEmail(email)) {
    displayError("valid-email", "Invalid email format.");
    return;
  }

  if (password.trim() === "") {
    displayError("valid-passw", "Password is required.");
    return;
  }

  document.getElementById("form").reset();
  errorNote.style.display = "none";

});

function isValidEmail(email) {
  let emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}

function displayError(errorId, message) {
  let errorNote = document.getElementById("errorNote");
  errorNote.innerText = message;
  errorNote.style.display = "block";
}
