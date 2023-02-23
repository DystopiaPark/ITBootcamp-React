import React, { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";

const BookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState("");
  const { dispatch } = useContext(BookContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    setError(""); // ako ima prethodna greska resetuj je
    if (!title.trim() || !author.trim()) {
      setError("You need to insert some text");
    }
    dispatch({
      id: "",
      type: "ADD_BOOK",
      payload: {
        title /*title: title,*/,
        author /* author: author, */,
      },
    });

    setTitle("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? <strong>{error}</strong> : null}
      <input
        type="text"
        placeholder="Book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Book author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input type="submit" value="Add book" />
    </form>
  );
};
export default BookForm;
