import React from "react";
import PropTypes from "prop-types";
import Conditional from "./Conditional";

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
  isUserDetailsCardOpen
}) => (
  <div className="row">
    <div className={deletableRow ? "row-text" : "row-heading"}>{name}</div>
    <div className={deletableRow ? "row-text" : "row-heading"}>{username}</div>
    <div className={deletableRow ? "row-text" : "row-heading"}>{email}</div>
    <div className={deletableRow ? "row-text" : "row-heading"}>{phone}</div>
    <div className={deletableRow ? "row-text" : "row-heading"}>{website}</div>
    <div className={deletableRow ? "row-text" : "row-heading"}>{address}</div>
    <div className={deletableRow ? "row-text" : "row-heading"}>{company}</div>
    <Conditional if={deletableRow}>
      <div className="cta-wrapper">
        <div
          className={`icon ${
            selectedUser === uid && isUserDetailsCardOpen ? "open" : ""
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
  isUserDetailsCardOpen: PropTypes.bool
};

export default Row;
