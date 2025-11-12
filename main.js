// Set your password here
const correctPassword = "mysecret"; // change this

const passwordInput = document.getElementById("passwordInput");
const submitBtn = document.getElementById("submitBtn");
const errorMessage = document.getElementById("errorMessage");
const linkContainer = document.getElementById("linkContainer");

submitBtn.addEventListener("click", () => {
  const enteredPassword = passwordInput.value.trim();

  if (enteredPassword === correctPassword) {
    // Clear the input area
    passwordInput.remove();
    submitBtn.remove();
    errorMessage.textContent = "";

    // Create the link dynamically
    const link = document.createElement("a");
    link.textContent = "For prints";
    link.href = "#"; // <-- Replace this with your actual link
    link.target = "_blank";
    link.classList.add("fade-in");

    linkContainer.appendChild(link);
  } else {
    errorMessage.textContent = "Incorrect password. Try again.";
  }
});
