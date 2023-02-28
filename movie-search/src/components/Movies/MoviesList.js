import React from "react";
import MoviesListItem from "./MovieListItem";

const MoviesList = ({ movies }) => {
  return (
    <div>
      {movies.map((movie) => {
        return (
          <MoviesListItem
            key={movie.imdbID}
            title={movie.Title}
            poster={movie.Poster}
          />
        );
      })}
    </div>
  );
};

export default MoviesList;
