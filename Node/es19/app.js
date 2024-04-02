const express = require('express');
const multer = require('multer');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const db = require('./db');
const { JWT_SECRET } = require('./config');
const authorize = require('./middleware/authorize');
const upload = multer({ dest: 'uploads/' });

// ...

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];
  if (!token) {
    return res.status(401).json({ msg: 'Unauthorized' });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ msg: 'Unauthorized' });
  }
};

app.post('/users/signup', async (req, res) => {
  // ...
});

app.post('/users/login', async (req, res) => {
  // ...
});

app.get('/users/logout', verifyToken, async (req, res) => {
  await db.query('UPDATE users SET token=NULL WHERE id=$1', [req.user.id]);
  return res.status(200).json({ msg: 'Logout successful' });
});

app.post('/planets', authorize, upload.single('image'), async (req, res) => {

});
