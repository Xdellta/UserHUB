const bcrypt = require('bcrypt');
const User = require('../models/user.model');
const { passwordValid, emailValid } = require('../utils/inputValidator');
const jwtCreator = require('../utils/jwtCreator');

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Input data validation
    if (!emailValid(email)) {
      return res.status(401).json({ message: 'Incorrect email or password' });
    }

    if (!passwordValid(password)) {
      return res.status(401).json({ message: 'Incorrect email or password' });
    }

    // Check if the user with the provided email address exists
    const user = await User.findOne({
      where: {
        email: email
      },
    });

    if (!user) {
      return res.status(401).json({ message: 'Incorrect email or password' });
    }

    // Check the correctness of the password
    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.status(401).json({ message: 'Incorrect email or password' });
    }

    // Creating a session and returning a JWT
    const token = await jwtCreator(email, user.role);

    if (token === null) {
      return res.status(500).json({ message: 'JWT generation error' });
    }

    return res.status(200).json({ token });

  } catch (error) {
    return res.status(500).json({ message: `Server error` });
  }
};