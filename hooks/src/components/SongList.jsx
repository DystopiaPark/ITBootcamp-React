import React, { useState } from "react";
import NewSongForm from "./newSongForm";
import { v4 as uuidv4 } from "uuid";

const SongList = () => {
  const [songs, setSongs] = useState([
    { title: "In corpore sano", id: 0 },
    { title: "Mitar Miric Doberman", id: 1 },
    { title: "Bodom after midnight", id: 2 },
  ]);
  const addSong = (title) => {
    setSongs((prevState) => [...prevState, { title: title, id: uuidv4() }]);
  };

  return (
    <>
      <h2>My song list</h2>
      {songs.map(({ title, id }) => {
        return <li key={id}>{title}</li>;
      })}

      <NewSongForm addSong={addSong} />
    </>
  );
};

export default SongList;
