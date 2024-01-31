const bcrypt = require('bcrypt');
const User = require('../models/user.model');
const sessionGenerate = require('../utils/sessionGenerate');

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

    // Generowanie sesji i zwracanie tokenu JWT
    const token = await sessionGenerate(user.user_id, email, user.role);

    if (token === null) {
      return res.status(500).json({ message: 'Błąd generowania tokenu' });
    }

    return res.status(200).json({ token });

  } catch (error) {
    return res.status(500).json({ message: `Błąd autoryzacji` });
  }
};