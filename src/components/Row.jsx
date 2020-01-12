import React from "react";
import PropTypes from "prop-types";
import Conditional from "./Conditional";
import Utils from "../utils";

const Row = ({
  uid,
  name,
  username,
  email,
  phone,
  website,
  address,
  company,
  deletableRow,
  handleDeleteUser,
  handleOpenUserDetailsCard,
  selectedUser,
  isUserDetailsCardOpen,
  selectedUserDetails
}) => {
  const decideTextOrHeading = deletableRow ? "row-text" : "row-heading";
  return (
    <div className="row">
      <div className={decideTextOrHeading}>{name}</div>
      <div className={decideTextOrHeading}>{username}</div>
      <div className={decideTextOrHeading}>{email}</div>
      <div className={decideTextOrHeading}>{phone}</div>
      <div className={decideTextOrHeading}>{website}</div>
      <div className={decideTextOrHeading}>{address}</div>
      <div className={decideTextOrHeading}>{company}</div>
      <Conditional if={deletableRow}>
        <div className="cta-wrapper">
          <div
            className={`icon ${
              selectedUser === uid &&
              isUserDetailsCardOpen &&
              !Utils.isEmptyObject(selectedUserDetails)
                ? "open"
                : ""
            }`}
            onClick={() => handleOpenUserDetailsCard(uid)}
          >
            <img
              src="https://img.icons8.com/metro/52/000000/chevron-down.png"
              alt="open-icon"
            />
          </div>
          <div className="icon" onClick={() => handleDeleteUser(uid)}>
            <img
              src="https://img.icons8.com/material-outlined/24/000000/cancel.png"
              alt="cancel-icon"
            />
          </div>
        </div>
      </Conditional>
    </div>
  );
};

Row.propTypes = {
  uid: PropTypes.number,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  deletableRow: PropTypes.bool.isRequired,
  handleDeleteUser: PropTypes.func,
  handleOpenUserDetailsCard: PropTypes.func,
  selectedUser: PropTypes.number,
  isUserDetailsCardOpen: PropTypes.bool,
  selectedUserDetails: PropTypes.object
};

export default Row;
