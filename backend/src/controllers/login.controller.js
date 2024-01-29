const bcrypt = require('bcrypt');
const User = require('../models/user.model.js');
const generateJWT = require('../utils/generateJWT.js');

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Sprawdź, czy istnieje użytkownik o podanym adresie e-mail
    const user = await User.findOne({
      where: {
        email: email
      },
    });

    // Jeśli użytkownik nie istnieje, zwróć błąd
    if (!user) {
      return res.status(401).json({ message: 'Nieprawidłowy e-mail lub hasło' });
    }

    // Sprawdź poprawność hasła
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.status(401).json({ message: 'Nieprawidłowy e-mail lub hasło' });
    }

    // Wygeneruj token JWT i zwróć
    const token = generateJWT(email);
    return res.status(200).json({ token });

  } catch (error) {
    return res.status(500).json({ message: `Błąd autoryzacji` });
  }
};