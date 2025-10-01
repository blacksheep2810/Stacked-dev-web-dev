// Get the form element
const loginForm = document.querySelector('form');

// Validation rules
function validateLogin(event) {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  // Username: at least 8 chars, letters, numbers, underscores and dots only
  const usernamePattern = /^[A-Za-z0-9._]{8,}$/;

  // Password: at least 8 chars, must have 1 lowercase, 1 uppercase, 1 number, 1 special character
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if (!usernamePattern.test(username)) {
    alert(
      'Username must be at least 8 characters long and may contain only letters, numbers, dots, or underscores.'
    );
    event.preventDefault();
    return false;
  }

  if (!passwordPattern.test(password)) {
    alert(
      'Password must be at least 8 characters long and include:\n- One uppercase letter\n- One lowercase letter\n- One number\n- One special character (@, $, !, %, *, ?, &).'
    );
    event.preventDefault();
    return false;
  }

  // if all checks pass, allow the form to submit
  return true;
}

// attach the validator to the form submit event
if (loginForm) {
  loginForm.addEventListener('submit', validateLogin);
}
