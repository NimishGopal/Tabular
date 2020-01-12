import React from "react";
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
  <>
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
  </>
);

export default Table;
