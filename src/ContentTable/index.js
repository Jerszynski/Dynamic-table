import React from "react";
import "./style.css";

const ContentTable = ({ books, handleRowClick }) => {
  return (
    <table className="table">
      <thead>
        <tr className="table__row ">
          <th className="table__cell table__cell--header">ID</th>
          <th className="table__cell table__cell--header">Title</th>
          <th className="table__cell table__cell--header">Author</th>
          <th className="table__cell table__cell--header">Published Date</th>
          <th className="table__cell table__cell--header">Pages</th>
          <th className="table__cell table__cell--header">Language</th>
          <th className="table__cell table__cell--header">Description</th>
        </tr>
      </thead>
      <tbody>
        {books.length > 0 ? (
          books.map((book) => (
            <tr
              className="table__row table__row--height"
              key={book.id}
              onClick={() => handleRowClick(book.volumeInfo.authors[0])}
            >
              <td
                data-cell="Id"
                className="table__cell table__cell--responsive"
              >
                {book.id}
              </td>
              <td
                data-cell="Title"
                className="table__cell table__cell--responsive"
              >
                {book.volumeInfo.title}
              </td>
              <td
                data-cell="Author"
                className="table__cell table__cell--responsive"
              >
                {book.volumeInfo.authors && book.volumeInfo.authors.join(", ")}
              </td>
              <td
                data-cell="Published Date"
                className="table__cell table__cell--responsive"
              >
                {book.volumeInfo.publishedDate}
              </td>
              <td
                data-cell="Page Count"
                className="table__cell table__cell--responsive"
              >
                {book.volumeInfo.pageCount}
              </td>
              <td
                data-cell="Language"
                className="table__cell table__cell--lang table__cell--responsive"
              >
                {book.volumeInfo.language}
              </td>
              <td
                data-cell="Description"
                className="table__cell table__cell--responsive table__cell--justify table__cell--height"
              >
                {book.volumeInfo.description}
              </td>
            </tr>
          ))
        ) : (
          <tr className="table__row">
            <td
              data-cell=""
              className="table__cell table__cell--noBooks"
              colSpan="7"
            >
              No books found.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default ContentTable;
