import React from "react";
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
  handleOpenUserDetailsCard
}) => (
  <div className="row">
    <div className="row-text">{name}</div>
    <div className="row-text">{username}</div>
    <div className="row-text">{email}</div>
    <div className="row-text">{phone}</div>
    <div className="row-text">{website}</div>
    <div className="row-text">{address}</div>
    <div className="row-text">{company}</div>
    <Conditional if={deletableRow}>
      <div>
        <button onClick={() => handleOpenUserDetailsCard(uid)}>open</button>
        <button onClick={() => handleDeleteUser(uid)}>delete</button>
      </div>
    </Conditional>
  </div>
);

export default Row;
