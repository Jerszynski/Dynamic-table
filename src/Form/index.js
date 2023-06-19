import React from "react";
import "./style.css";

const Form = ({ searchTerm, handleInputChange, handleSearch }) => {
  return (
    <form>
      <div className="searchBar">
        <input
          className="searchBar__input"
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search books"
        />
        <button className="searchBar__button" onClick={handleSearch}>
          Search
        </button>
      </div>
    </form>
  );
};

export default Form;
