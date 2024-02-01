// E-mail validation
function emailValid(email) {
  if (!/^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i.test(email)) {
    return false;
  }

  return true;
}


// Password validation
function passwordValid(password) {
  // Minimum length
  if (password.length < 8) {
    return false;
  }

  // At least one lowercase letter
  if (!/[a-z]/.test(password)) {
    return false;
  }

  // At least one uppercase letter
  if (!/[A-Z]/.test(password)) {
    return false;
  }

  // At least one digit or one special character
  if (!(/\d/.test(password) || /[!@#$%^&*(),.?":{}|<>]/.test(password))) {
    return false;
  }

  // Prevent SQL injection by disallowing certain characters
  if (/[;'"\\]/.test(password)) {
    return false;
  }

  // All checks passed, password is considered valid
  return true;
}


module.exports = { emailValid, passwordValid };