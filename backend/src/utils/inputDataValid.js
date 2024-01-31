// E-mail validation
function emailValid(email) {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return false;
  }

  return true;
}

// Password validation
function passwordValid(password) {
  // String length
  if (!password.length > 6) {
    return false;
  }

  return true;
}

module.exports = { passwordValid, emailValid };