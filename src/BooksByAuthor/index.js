import React from "react";
import "./style.css";

const BooksByAuthor = ({ selectedAuthor, authorBooks }) => {
  return (
    <div>
      {selectedAuthor && (
        <div className="booksByAuthor">
          <h2 className="booksByAuthor__header">Books by {selectedAuthor}</h2>
          <ul className="listOfBooks">
            {authorBooks.map((book) => (
              <li className="listOfBooks__item" key={book.id}>
                {book.volumeInfo.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BooksByAuthor;
