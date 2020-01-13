import React from "react";
import PropTypes from "prop-types";

class PaginationBar extends React.PureComponent {
  static propTypes = {
    handlePageChange: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired,
    paginationBar: PropTypes.array.isRequired
  };
  componentDidUpdate(prevProps){
    const {paginationBar: prevPaginationBar} = prevProps;
    const {paginationBar, handlePageChange} = this.props;
    if(prevPaginationBar.length !== paginationBar.length){
      handlePageChange(paginationBar.length - 1)
    }
  }
  render(){
    const { paginationBar=[], handlePageChange, currentPage } = this.props;
    return (
      <div className="pagination-bar">
        {paginationBar.map((page, index) => (
          <a
            key={index}
            className={`page ${(currentPage === page - 1 ) ? "active" : ""}`}
            onClick={() => handlePageChange(page - 1)}
          >
            {page}
          </a>
        ))}
      </div>
    );
  }
}

export default PaginationBar;
