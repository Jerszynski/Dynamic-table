import React from "react";
import "./style.css";

const Breadcrumb = ({ breadcrumb, handleBreadcrumbClick }) => {
  return (
    <div className="breadcrumb">
      {breadcrumb.map((author, index) => (
        <span key={author}>
          {index > 0 && " > "}
          <span
            className="breadcrumb__link"
            onClick={() => handleBreadcrumbClick(index)}
          >
            {author}
          </span>
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;
