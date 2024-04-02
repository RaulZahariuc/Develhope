const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('./jwt');
const db = require('../db');
require('dotenv').config();

const createUser = async (username, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const result = await db.query(
    'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *',
    [username, hashedPassword]
  );
  return result.rows[0];
};

const validateUser = async (username, password) => {
  const result = await db.query('SELECT * FROM users WHERE username=$1', [username]);
  if (result.rowCount === 0) {
    return null;
  }
  const user = result.rows[0];
  const isValidPassword = await bcrypt.compare(password, user.password);
  if (isValidPassword) {
    return user;
  }
  return null;
};

router.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ msg: 'Username and password are required' });
  }
  try {
    const user = await createUser(username, password);
    return res.json({ msg: 'Signup successful. Now you can log in.' });
  } catch (err) {
    return res.status(500).json({ msg: 'Error creating user', error: err.message });
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ msg: 'Username and password are required' });
  }
  try {
    const user = await validateUser(username, password);
    if (user) {
      const token = jwt.jwtSign(user.id, user.username);
      return res.json({ token, id: user.id, username: user.username });
    }
    return res.status(401).json({ msg: 'Invalid username or password' });
  } catch (err) {
    return res.status(500).json({ msg: 'Error validating user', error: err.message });
  }
});

module.exports = router;