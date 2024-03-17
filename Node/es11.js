import * as dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import { Planet, Planets } from "./types";

dotenv.config();

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


const app = express();

app.use(bodyParser.json());
app.use(morgan("dev"));

app.use((req, res, next) => {
  console.log(`${req.method} request received at ${req.url}`);
  next();
});

app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.message);
  res.status(500).send("Internal Server Error");
});

app.get("/planets", (req, res) => {
  res.send(planets);
});

app.post("/planets", (req, res) => {
  const newPlanet: Planet = req.body;
  planets.push(newPlanet);
  res.send(`Added planet ${newPlanet.name} to the database`);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});