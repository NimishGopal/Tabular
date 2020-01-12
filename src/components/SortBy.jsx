import React from "react";
import PropTypes from "prop-types";
import { FILTER } from "../constants";
import Selector from "./Selector";

const SortBy = ({ sortBy, handleOnChange }) => (
  <div className="sort-by-wrapper">
    <Selector
      label={`Sort By`}
      options={[FILTER.SORT.NAME, FILTER.SORT.EMAIL]}
      handleOnChange={handleOnChange}
      selectedValue={sortBy}
    />
  </div>
);

SortBy.propTypes = {
  sortBy: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired
};

export default SortBy;
