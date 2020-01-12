import React from "react";
import PropTypes from "prop-types";
import Selector from "./Selector";

const SelectVisibleRows = ({ rowPerPage, handleOnChange, options }) => (
  <div className="row__selector">
    <Selector
      label={`Number of rows in a page`}
      selectedValue={rowPerPage}
      handleOnChange={handleOnChange}
      options={options}
    />
  </div>
);

SelectVisibleRows.propTypes = {
  rowPerPage: PropTypes.number.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
};
export default SelectVisibleRows;
