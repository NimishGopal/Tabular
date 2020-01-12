import React from "react";
import PropTypes from "prop-types";

const PaginationBar = ({ paginationBar, handlePageChange, currentPage }) => {
  return (
    <div className="pagination-bar">
      {paginationBar.map((page, index) => (
        <a
          key={index}
          className={`page ${currentPage === page - 1 ? "active" : ""}`}
          onClick={() => handlePageChange(page - 1)}
        >
          {page}
        </a>
      ))}
    </div>
  );
};

PaginationBar.propTypes = {
  handlePageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  paginationBar: PropTypes.array.isRequired
};

export default PaginationBar;
