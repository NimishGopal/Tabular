import React, { Component } from "react";
import { fetchSelectedUserDetails } from "../thunks/user";
import { connect } from "react-redux";

class UserDetailsCard extends Component {
  componentDidMount() {
    const { selectedUser, fetchSelectedUserDetails } = this.props;
    fetchSelectedUserDetails(`api/users/${selectedUser}`);
  }

  render() {
    const { selectedUserDetails } = this.props;
    const { name, userName, email, phone, website } = selectedUserDetails;
    return (
      <div className="user-details-card">
        <h2>{name}</h2>
        <p>{userName}</p>
        <p>{email}</p>
        <p>{phone}</p>
        <p>{website}</p>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchSelectedUserDetails: url => {
    dispatch(fetchSelectedUserDetails(url));
  }
});

const mapStateToProps = state => ({
  selectedUser: state.userData.selectedUser,
  selectedUserDetails: state.userData.selectedUserDetails
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDetailsCard);
