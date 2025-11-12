const correctPassword = "mysecret"; // <-- change this to your own password

const passwordInput = document.getElementById("passwordInput");
const submitBtn = document.getElementById("submitBtn");
const hiddenLink = document.getElementById("hiddenLink");
const errorMessage = document.getElementById("errorMessage");

submitBtn.addEventListener("click", () => {
  const enteredPassword = passwordInput.value;

  if (enteredPassword === correctPassword) {
    passwordInput.style.display = "none";
    submitBtn.style.display = "none";
    errorMessage.style.display = "none";
    hiddenLink.style.display = "inline-block";
  } else {
    errorMessage.textContent = "Incorrect password. Try again.";
  }
});
