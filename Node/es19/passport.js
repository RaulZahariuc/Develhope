const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const db = require('./db');
const { JWT_SECRET } = require('./config');

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: JWT_SECRET
};

const jwtVerify = async (payload, done) => {
  try {
    const user = await db.query('SELECT * FROM users WHERE id=$1', [payload.id]);
    if (user.rowCount === 0) {
      return done(null, false);
    }
    done(null, user.rows[0]);
  } catch (err) {
    done(err);
  }
};

const strategy = new JwtStrategy(jwtOptions, jwtVerify);

passport.use(strategy);