import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

const BookDetails = ({ book }) => {
  // const {title, author} = book;
  const { dispatch } = useContext(BookContext);
  const handleDelete = () => {
    dispatch({
      type: "REMOVE_BOOK",
      payload: { id: book.id },
    });
  };

  return (
    <div>
      <h3>
        {book.title} - {book.author}
      </h3>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default BookDetails;
