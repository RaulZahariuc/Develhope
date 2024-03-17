import * as dotenv from "dotenv";
import express from "express";
import Joi from "joi";
import { Planet, Planets } from "./types";

dotenv.config();

// Define dummy database of planets
let planets: Planets = [
  {
    id: 1,
    name: "Earth",
  },
  {
    id: 2,
    name: "Mars",
  },
];

const router = express.Router();

const planetSchema = Joi.object({
  id: Joi.number().integer().min(1).required(),
  name: Joi.string().min(1).max(50).required(),
});

router.get("/", (req, res) => {
  res.send(planets);
});

router.get("/:id", (req, res) => {
  const planetId = parseInt(req.params.id);
  const planet = planets.find((p) => p.id === planetId);

  if (!planet) {
    res.status(404).send("Planet not found");
  } else {
    res.send(planet);
  }
});

router.post("/", (req, res) => {
  const newPlanet = req.body;

  const { error } = planetSchema.validate(newPlanet);

  if (error) {
    res.status(400).send(error.details[0].message);
  } else {
    planets.push(newPlanet);
    res.status(201).send({ msg: "Planet created" });
  }
});

router.put("/:id", (req, res) => {
  const planetId = parseInt(req.params.id);
  const updatedPlanet = req.body;

  const planetIndex = planets.