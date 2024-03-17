const express = require('express');
const router = express.Router();
const planets = require('./dummyDatabase');
const Joi = require('joi');

const planetSchema = Joi.object({
  id: Joi.number().integer().required(),
  name: Joi.string().min(3).max(50).required(),
});

router.get('/api/planets', (req, res) => {
  res.status(200).json(planets);
});

router.get('/api/planets/:id', (req, res) => {
  const planet = planets.find(p => p.id === parseInt(req.params.id));
  if (!planet) return res.status(404).send('Planet not found');
  res.status(200).json(planet);
});

router.post('/api/planets', (req, res) => {
  const { error } = planetSchema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const planet = {
    id: planets.length + 1,
    name: req.body.name,
  };
  planets.push(planet);
  res.status(201).json({ msg: 'Planet created successfully' });
});

router.put('/api/planets/:id', (req, res) => {
  const planet = planets.find(p => p.id === parseInt(req.params.id));
  if (!planet) return res.status(404).send('Planet not found');

  const { error } = planetSchema.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  planet.name = req.body.name;
  res.status(200).json({ msg: 'Planet updated successfully' });
});

router.delete('/api/planets/:id', (req, res) => {