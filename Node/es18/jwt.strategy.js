const jwt = require('jsonwebtoken');
const User = require('../models/user');
require('dotenv').config();

const jwtStrategy = (passport) => {
  passport.use(
    new jwt.Strategy(
      {
        secretOrKey: process.env.SECRET,
        jwtFromRequest: jwt.ExtractJwt.fromAuthHeaderAsBearerToken()
      },
      async (token, done) => {
        try {
          const user = await User.findById(token.id);
          if (!user) {
            return done(null, false, { message: 'User not found' });
          }
          done(null, user);
        } catch (err) {
          done(err);
        }
      }
    )
  );
};

module.exports = jwtStrategy;