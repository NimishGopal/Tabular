import React from "react";
import PropTypes from "prop-types";
import Row from "./Row";
import Page from "./Page";
import Conditional from "./Conditional";

const Table = ({
  pagedData,
  currentPage,
  handleDeleteUser,
  isUserDetailsCardOpen,
  handleOpenUserDetailsCard,
  selectedUser
}) => (
  <div className="table">
    <Row
      name="Name"
      username="Username"
      email="Email"
      address="Address"
      phone="Phone"
      website="Website"
      company="Company"
      deletableRow={false}
    />
    <Conditional if={pagedData.length}>
      <Page
        currentPageData={
          pagedData[currentPage]
            ? pagedData[currentPage]
            : pagedData[currentPage - 1] || []
        }
        handleDeleteUser={handleDeleteUser}
        handleOpenUserDetailsCard={handleOpenUserDetailsCard}
        isUserDetailsCardOpen={isUserDetailsCardOpen}
        selectedUser={selectedUser}
      />
    </Conditional>
  </div>
);

Table.propTypes = {
  pagedData: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  handleDeleteUser: PropTypes.func.isRequired,
  isUserDetailsCardOpen: PropTypes.bool.isRequired,
  handleOpenUserDetailsCard: PropTypes.func.isRequired,
  selectedUser: PropTypes.number.isRequired
};

export default Table;
