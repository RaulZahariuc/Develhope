const express = require('express');
const router = express.Router();
const { getAll, getOneById, create, updateById, deleteById } = require('../controllers/planets');

router.get('/api/planets', (req, res) => {
  res.status(200).json(getAll());
});

router.get('/api/planets/:id', (req, res) => {
  const planet = getOneById(parseInt(req.params.id));
  if (!planet) return res.status(404).send('Planet not found');
  res.status(200).json(planet);
});

router.post('/api/planets', (req, res) => {
  const { error } = planetSchema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  create(req.body);
  res.status(201).json({ msg: 'Planet created successfully' });
});

router.put('/api/planets/:id', (req, res) => {
 