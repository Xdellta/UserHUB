const db = require('../config.js');

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // logika autoryzacji i wydanie tokenu

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Odmowa dostępu' });
  }
};