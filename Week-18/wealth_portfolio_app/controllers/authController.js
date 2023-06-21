const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.signup = async (req, res) => {
  try {
    // Create a new user from the request body
    const user = new User(req.body);

    // Save the user to the database
    await user.save();

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

    // Send the user object and token in the response
    res.status(201).json({ user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    // Find the user with the provided email and password
    const user = await User.findByCredentials(req.body.email, req.body.password);

    // Generate a JWT token for the user
    const token = await user.generateAuthToken();

    // Send the user object and token in the response
    res.json({ user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
