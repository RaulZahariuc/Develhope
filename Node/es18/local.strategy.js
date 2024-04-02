const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
require('dotenv').config();

const localStrategy = (passport) => {
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'username',
        passwordField: 'password'
      },
      async (username, password, done) => {
        try {
          const user = await User.findOne({ username });
          if (!user) {
            return done(null, false, { message: 'Incorrect username' });
          }
          const isValidPassword = await user.comparePassword(password);
          if (!isValidPassword) {
            return done(null, false, { message: 'Incorrect password' });
          }
          done(null, user);
        } catch (err) {
          done(err);
        }
      }
    )
  );
};

module.exports = localStrategy;