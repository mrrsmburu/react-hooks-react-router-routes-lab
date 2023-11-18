import React from "react";
import { movies } from "../data";

const moviesData = [
  {
    id: 1,
    title: 'jumanji',
    time: '2h 30min',
    genres: ['Action', 'Adventure'],
  },
  {
    id: 2,
    title: 'friends with benefits',
    time: '2h 15min',
    genres: ['Comedy', 'Drama'],
  },
]

function Movies() {
  return <div>
     <h1>Movies Page</h1>
  {moviesData.map((movie) => (
    <div key={movie.id}>
      <h2>{movie.title}</h2>
      <p>Time: {movie.time}</p>
      <ul>
        {movie.genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul></div>
        ))}
        </div>
}

export default Movies;
