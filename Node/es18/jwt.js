const jwt = require('jsonwebtoken');
require('dotenv').config();

const jwtSign = (id, username) => {
  return jwt.sign(
    {
      id,
      username
    },
    process.env.SECRET,
    {
      expiresIn: '1h'
    }
  );
};

module.exports = { jwtSign };