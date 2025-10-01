// Get the form element
const registerForm = document.querySelector('form');

// Validation logic
function validateRegister(event) {
  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const confirmPassword = document.getElementById('confirm_password').value.trim();

  // Username: at least 8 chars, only letters, numbers, dots, underscores
  const usernamePattern = /^[A-Za-z0-9._]{8,}$/;

  // Password: at least 8 chars, at least one lowercase, one uppercase, one number, one special character
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // Validate username
  if (!usernamePattern.test(username)) {
    alert(
      "Username must be at least 8 characters long and can contain only letters, numbers, dots (.) or underscores (_)."
    );
    event.preventDefault();
    return false;
  }

  // Validate email
  if (!/^[^@]+@[^@]+\.[a-z]{2,}$/i.test(email)) {
    alert("Please enter a valid email address.");
    event.preventDefault();
    return false;
  }

  // Validate password
  if (!passwordPattern.test(password)) {
    alert(
      "Password must be at least 8 characters long and include:\n" +
      "- One uppercase letter\n" +
      "- One lowercase letter\n" +
      "- One number\n" +
      "- One special character (@, $, !, %, *, ?, &)"
    );
    event.preventDefault();
    return false;
  }

  // Check that passwords match
  if (password !== confirmPassword) {
    alert("Passwords do not match. Please re-enter.");
    event.preventDefault();
    return false;
  }

  // All good
  alert("Registration successful!");
  return true;
}

// Attach validator to the form
if (registerForm) {
  registerForm.addEventListener('submit', validateRegister);
}
