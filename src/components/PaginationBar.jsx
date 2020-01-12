import React from "react";

const PaginationBar = ({ paginationBar, handlePageChange, currentPage }) => {
  return (
    <div className="pagination-bar">
      {paginationBar.map(page => (
        <a
          key={page}
          className={`page ${currentPage === page ? "active" : ""}`}
          onClick={() => handlePageChange(page)}
        >
          {+page + 1}
        </a>
      ))}
    </div>
  );
};
export default PaginationBar;
