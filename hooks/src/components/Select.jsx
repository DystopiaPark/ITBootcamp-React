// 1) Napravite jednu komponentu koristeci stateless functional components.
// 2) Komponenta poseduje svoj state (koristeci useState hook)
// 3) Komponenta poseduje jednu formu koja poseduje select sa opcijama: posts, comments, albums
// 4) Napravite funkciju koja menja taj state prilikom biranje opcije iz select tag-a.Prilikom renderovanja komponente, uradite API poziv ka
// 5) Prilikom renderovanja komponente, uradite API poziv ka https://jsonplaceholder.typicode.com/
// I niz koji dobijete upisite u vas state koji se naziva items

import React, { useState, useEffect } from "react";

const Select = () => {
  const [state, setState] = useState("posts");
  const [items, setItems] = useState([]);

  const handleChange = (event) => {
    setState(event.target.value);
  };

  // useEffect kao drugi parametar koristi da razume kada treba da se okine
  // ako prosledimo prazan niz, on se okida iskljucivo kada se komponenta
  // PRVI put renderuje

  // useEffect(() => {
  //   console.log("komponenta se renderovala");
  //   fetch(`https://jsonplaceholder.typicode.com/${state}`)
  //     .then((response) => response.json())
  //     .then((json) => setItems(json))
  //     .catch((err) => console.log(err));
  // }, []);

  useEffect(() => {
    console.log("Komponenta se updateovala");
    fetch(`https://jsonplaceholder.typicode.com/${state}`)
      .then((response) => response.json())
      .then((json) => setItems(json))
      .catch((err) => console.log(err));
  }, [state]);

  return (
    <div>
      <form>
        <select value={state} onChange={handleChange}>
          <option value="posts">posts</option>
          <option value="comments">comments</option>
          <option value="albums">albums</option>
        </select>
      </form>
      <ul>
        {items.map((item, index) => {
          return <li key={index}>{JSON.stringify(item)}</li>;
        })}
      </ul>
    </div>
  );
};

export default Select;
