// Get the form element
const registerForm = document.querySelector('form');

const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm_password');

// Patterns
const usernamePattern = /^[A-Za-z0-9._]{8,}$/;
const emailPattern = /^[^@]+@[^@]+\.[a-z]{2,}$/i;
const passwordPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// Helper: create validation message spans
function createMsgEl(input) {
  let msg = document.createElement('div');
  msg.className = 'validation-msg';
  input.parentNode.appendChild(msg);
  return msg;
}

// Create message elements under each input
const usernameMsg = createMsgEl(usernameInput);
const emailMsg = createMsgEl(emailInput);
const passwordMsg = createMsgEl(passwordInput);
const confirmPasswordMsg = createMsgEl(confirmPasswordInput);

// Live validation functions
function validateUsername() {
  if (usernamePattern.test(usernameInput.value)) {
    usernameMsg.textContent = 'Looks good!';
    usernameMsg.className = 'validation-msg valid';
    return true;
  } else {
    usernameMsg.textContent =
      'Must be ≥8 characters, only letters, numbers, dots or underscores.';
    usernameMsg.className = 'validation-msg';
    usernameMsg.style.display = 'block';
    return false;
  }
}

function validateEmail() {
  if (emailPattern.test(emailInput.value)) {
    emailMsg.textContent = 'Valid email address';
    emailMsg.className = 'validation-msg valid';
    return true;
  } else {
    emailMsg.textContent = 'Enter a valid email (e.g. name@example.com).';
    emailMsg.className = 'validation-msg';
    emailMsg.style.display = 'block';
    return false;
  }
}

function validatePassword() {
  if (passwordPattern.test(passwordInput.value)) {
    passwordMsg.textContent = 'Strong password ✔';
    passwordMsg.className = 'validation-msg valid';
    return true;
  } else {
    passwordMsg.textContent =
      'Must be ≥8 chars & include uppercase, lowercase, number, special char.';
    passwordMsg.className = 'validation-msg';
    passwordMsg.style.display = 'block';
    return false;
  }
}

function validateConfirmPassword() {
  if (confirmPasswordInput.value === passwordInput.value && passwordInput.value !== '') {
    confirmPasswordMsg.textContent = 'Passwords match ✔';
    confirmPasswordMsg.className = 'validation-msg valid';
    return true;
  } else {
    confirmPasswordMsg.textContent = 'Passwords do not match.';
    confirmPasswordMsg.className = 'validation-msg';
    confirmPasswordMsg.style.display = 'block';
    return false;
  }
}

// Attach live validation
usernameInput.addEventListener('input', validateUsername);
emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);
confirmPasswordInput.addEventListener('input', validateConfirmPassword);

// Validate on submit
registerForm.addEventListener('submit', function (event) {
  const valid =
    validateUsername() &&
    validateEmail() &&
    validatePassword() &&
    validateConfirmPassword();

  if (!valid) {
    alert('Please fix the highlighted errors before submitting.');
    event.preventDefault();
  } else {
    alert('Registration successful!');
  }
});

