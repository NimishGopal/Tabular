import React, { Component } from "react";
import PropTypes from "prop-types";
import { fetchSelectedUserDetails } from "../thunks/user";
import { connect } from "react-redux";
import Utils from "../utils";

class UserDetailsCard extends Component {
  static propTypes = {
    fetchSelectedUserDetails: PropTypes.func.isRequired,
    selectedUserDetails: PropTypes.object.isRequired,
    selectedUser: PropTypes.number
  };

  state = {
    isFetched: false
  };

  componentDidMount() {
    const { selectedUser, fetchSelectedUserDetails } = this.props;
    fetchSelectedUserDetails(`api/users/${selectedUser}`);
    this.setState({ isFetched: true });
  }

  render() {
    const { isFetched } = this.state;
    if (!isFetched) return null;
    const { selectedUserDetails } = this.props;
    const {
      name,
      username,
      email,
      phone,
      website,
      address,
      company
    } = selectedUserDetails;
    return !Utils.isEmptyObject(selectedUserDetails) ? (
      <div className="user-details-card">
        <h2>{`${name}`}</h2>
        <p>{`User Name: ${username}`}</p>
        <p>{`Email: ${email}`}</p>
        <p>{`Phone: ${phone}`}</p>
        <p>{`Company: ${company.name}`}</p>
        <p>{`Website: ${website}`}</p>
        <p>{`Address: ${`${address.suite}, ${address.street}, ${address.city} - ${address.zipcode}`}`}</p>
      </div>
    ) : null;
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
