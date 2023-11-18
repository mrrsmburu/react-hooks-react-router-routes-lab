import React from "react";
import { actors } from "../data";

const actorsData = [
  {
    id: 1,
    name: 'Dwayne Johnson',
    movies: ['jumanji', 'fast furious'],
  },
  {
    id: 2,
    name: 'Justin Timberlake',
    movies: ['friends with benefits', 'black widow'],
  },
]
function Actors() {
  return <div>
    <h1>Actors Page</h1>
  {actorsData.map((actor) => (
    <div key={actor.id}>
      <h2>{actor.name}</h2>
      <ul>
        {actor.movies.map((movie, index) => (
          <li key={index}>{movie}</li>
        ))}
      </ul>
    </div>
  ))}
  </div>;
}

export default Actors;
