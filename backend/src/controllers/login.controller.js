const bcrypt = require('bcrypt');
const User = require('../models/user.model');
const sessionGenerate = require('../utils/sessionGenerate');
const { passwordValid, emailValid } = require('../utils/inputValidator');

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Input data validation
    if ( emailValid(email) === false ) {
      return res.status(401).json({ message: 'Nieprawidłowy e-mail lub hasło' });
    }

    if ( passwordValid(password) === false ) {
      return res.status(401).json({ message: 'Nieprawidłowy e-mail lub hasło' });
    }

    // Check if the user with the provided email address exists
    const user = await User.findOne({
      where: {
        email: email
      },
    });

    // If the user does not exist, return an error
    if (!user) {
      return res.status(401).json({ message: 'Nieprawidłowy e-mail lub hasło' });
    }

    // Check the correctness of the password
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.status(401).json({ message: 'Nieprawidłowy e-mail lub hasło' });
    }

    // Generating a session and returning a JWT
    const token = await sessionGenerate(user.user_id, email, user.role);

    if (token === null) {
      return res.status(500).json({ message: 'Błąd generowania tokenu' });
    }

    return res.status(200).json({ token });

  } catch (error) {
    return res.status(500).json({ message: `Błąd autoryzacji` });
  }
};