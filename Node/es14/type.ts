interface Planet {
    id: number;
    name: string;
  }
  
  const planets: Planet[] = require('../dummyDatabase');
  
  export const getAll = () => {
    return planets;
  };
  
  export const getOneById = (id: number) => {
    return planets.find(planet => planet.id === id);
  };
  
  export const create = (planet: Planet) => {
    planets.push({ ...planet, id: planets.length + 1 });
  };
  
  export const updateById = (id: number, updatedPlanet: Planet) => {
    planets = planets.map(planet => (planet.id === id ? { ...planet, ...updatedPlanet } : planet));
  };
  
  export const deleteById = (id: number) => {
    planets = planets.filter(planet => planet.id !== id);
  };