const jwt = require('jsonwebtoken');
const User = require('../models/user');

// ...

exports.authenticate = async (req, res, next) => {
  try {
    // Get the token from the request header
    const token = req.header('Authorization').replace('Bearer ', '');
    console.log(token, "pop");
    // Verify and decode the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find the user associated with the token
    const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });

    // If no user is found, throw an error
    if (!user) {
      throw new Error();
    }

    // Save the user and token to the request object
    req.user = user;
    req.token = token;

    // Continue to the next middleware or route handler
    next();
  } catch (error) {
    res.status(401).json({ error: 'Please authenticate.' });
  }
};

// ...
