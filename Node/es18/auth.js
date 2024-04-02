const express = require('express');
const passport = require('passport');
const jwtStrategy = require('./jwt.strategy');
const localStrategy = require('./local.strategy');

const auth = express.Router();

// Initialize Passport
passport.use(jwtStrategy);
passport.use(localStrategy);

// Routes
auth.post('/login', passport.authenticate('local'), (req, res) => {
  const user = req.user;
  const token = jwt.sign({ id: user._id }, process.env.SECRET, {
    expiresIn: '1h'
  });
  res.json({ user, token });
});

module.exports = auth;