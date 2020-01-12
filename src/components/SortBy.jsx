import React from "react";
import { FILTER } from "../constants";

const SortBy = ({ sortBy, handleOnChange }) => (
  <div className="sort-by-wrapper">
    <select value={sortBy} onChange={e => handleOnChange(e.target.value)}>
      <option value={FILTER.SORT.NAME}>Name</option>
      <option value={FILTER.SORT.EMAIL}>Email</option>
    </select>
  </div>
);

export default SortBy;
