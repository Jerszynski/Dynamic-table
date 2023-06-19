import React, { useState, useEffect } from "react";
import Form from "./Form";
import Breadcrumb from "./Breadcrumb";
import ContentTable from "./ContentTable";
import BooksByAuthor from "./BooksByAuthor";
import "./mediaQueries.css";

const BooksTable = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAuthor, setSelectedAuthor] = useState("");
  const [authorBooks, setAuthorBooks] = useState([]);
  const [breadcrumb, setBreadcrumb] = useState([]);

  useEffect(() => {
    fetchBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
        // `https://www.googleapis.com/books/v1/volumes?q="diablo"`
      );
      const data = await response.json();
      if (data.items) {
        setBooks(data.items);
      } else {
        setBooks([]);
      }
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    fetchBooks();
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleRowClick = async (author) => {
    setSelectedAuthor(author);
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
          author
        )}`
      );
      const data = await response.json();
      if (data.items) {
        setAuthorBooks(data.items);
      } else {
        setAuthorBooks([]);
      }
      setBreadcrumb([...breadcrumb, author]);
    } catch (error) {
      console.error("Error fetching books by author:", error);
      setAuthorBooks([]);
      setBreadcrumb([]);
    }
  };

  const handleBreadcrumbClick = (index) => {
    const previousSearchTerm = breadcrumb[index];

    // Update the search bar with the previous search term
    setSearchTerm(previousSearchTerm);

    // Fetch books for the previous search term
    const fetchPreviousBooks = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
            previousSearchTerm
          )}`
        );
        const data = await response.json();
        if (data.items) {
          setBooks(data.items);
        } else {
          setBooks([]);
        }
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    // Fetch books for the previous search term
    fetchPreviousBooks();

    // Clear authorBooks and update breadcrumb
    setAuthorBooks([]);
    setBreadcrumb(breadcrumb.slice(0, index));
  };

  return (
    <div className="main">
      <h1 className="header">Book Library</h1>

      <div className="container">
        <Form
          searchTerm={searchTerm}
          handleInputChange={handleInputChange}
          handleSearch={handleSearch}
        />

        <Breadcrumb
          breadcrumb={breadcrumb}
          handleBreadcrumbClick={handleBreadcrumbClick}
        />

        <ContentTable books={books} handleRowClick={handleRowClick} />
      </div>

      <BooksByAuthor
        selectedAuthor={selectedAuthor}
        authorBooks={authorBooks}
      />
    </div>
  );
};

export default BooksTable;
