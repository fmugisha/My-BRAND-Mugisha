document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let location = document.getElementById("location").value;
  let subject = document.getElementById("subject").value;
  let msg = document.getElementById("message").value;

  document.getElementById("errorName").style.display = "none";
  document.getElementById("errorEmail").style.display = "none";
  document.getElementById("errorLocation").style.display = "none";
  document.getElementById("errorSubject").style.display = "none";
  document.getElementById("errorMessage").style.display = "none";

  if (name.trim() === "") {
    displayError("errorName", "Your name is required.");
    return;
  }

  if (email.trim() === "") {
    displayError("errorEmail", "Email is required.");
    return;
  }

  if (!isValidEmail(email)) {
    displayError("errorEmail", "Invalid email format.");
    return;
  }

  if (location.trim() === "") {
    displayError("errorLocation", "Location is required.");
    return;
  }

  if (subject.trim() === "") {
    displayError("errorSubject", "Subject is required.");
    return;
  }

  if (msg.trim() === "") {
    displayError("errorMessage", "Message is required.");
    return;
  }

  document.getElementById("form").reset();

});

function isValidEmail(email) {
  let emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email, lg_email);
}

function displayError(errorId, message) {
  let errorElement = document.getElementById(errorId);
  errorElement.innerText = message;
  errorElement.style.display = "block";
}
