const passport = require('passport');

const authorize = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user) => {
    if (err) {
      return res.status(500).json({ msg: 'Error authenticating', error: err.message });
    }
    if (!user) {
      return res.status(401).json({ msg: 'Unauthorized' });
    }
    req.user = user;
    next();
  })(req, res, next);
};

module.exports = authorize;