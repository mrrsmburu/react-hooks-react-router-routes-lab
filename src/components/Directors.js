import React from "react";
import { directors } from "../data";

const directorsData = [
  {
    id: 1,
    name: 'Jeff Russo',
    movies: ['Jumanji', 'Avengers'],
  },
  {
    id: 2,
    name: 'Kevin Feige',
    movies: ['friends with benefits', 'Black widow'],
  },
]
function Directors() {
  return <div> 
     <h1>Directors Page</h1>
  {directorsData.map((director) => (
    <div key={director.id}>
      <h2>{director.name}</h2>
      <ul>
        {director.movies.map((movie, index) => (
          <li key={index}>{movie}</li>
        ))}
      </ul>
    </div>
  ))}
  </div>;
}

export default Directors;
