import React from "react";
import PropTypes from "prop-types";

const Selector = ({
  label,
  options,
  selectedValue,
  handleOnChange,
  forValue
}) => (
  <div className="selector">
    <label htmlFor={forValue}>{label}</label>
    <select
      className="select"
      value={selectedValue}
      onChange={e => handleOnChange(e.target.value)}
    >
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

Selector.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  handleOnChange: PropTypes.func.isRequired,
  forValue: PropTypes.string.isRequired
};

export default Selector;
