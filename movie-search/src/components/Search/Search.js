import React, { useState } from "react";

const Search = ({ onSubmit }) => {
  const [search, setSearch] = useState("");

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSubmit(search);
    setSearch("");
  };

  //   const handleReset = () => {
  //     setSearch("");
  //   };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={search}
        onChange={handleInput}
        placeholder="Search for favorite movie"
      />
      <input type="submit" value="search" />
    </form>
  );
};

export default Search;
