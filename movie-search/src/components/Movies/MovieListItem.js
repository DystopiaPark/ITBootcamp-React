import React from "react";

const noImageFound = "https://i.ytimg.com/vi/np4n2DIOKVM/maxresdefault.jpg";
const MoviesListItem = ({ title, poster }) => {
  return (
    <div>
      <h3>{title}</h3>
      <img src={poster} />
    </div>
  );
};

export default MoviesListItem;
