import React, { Component } from "react";
import PropTypes from "prop-types";
import { fetchSelectedUserDetails } from "../thunks/user";
import { connect } from "react-redux";
import Utils from "../utils";
import { clearUserDetails, setSelectedUserDetails } from "../actions/userData";
import { addUserToUserDetailsHashMap } from "../actions/userDetailsHashMap";

class UserDetailsCard extends Component {
  static propTypes = {
    fetchSelectedUserDetails: PropTypes.func.isRequired,
    selectedUserDetails: PropTypes.object.isRequired,
    selectedUser: PropTypes.number,
    clearUserDetails: PropTypes.func.isRequired,
    handleCloseUserDetailsCard: PropTypes.func.isRequired,
    addUserToUserDetailsHashMap: PropTypes.func.isRequired,
    userDetailsHashMap: PropTypes.object.isRequired,
    setSelectedUserDetails: PropTypes.func.isRequired
  };

  state = {
    isFetched: false
  };

  componentDidMount() {
    const {
      selectedUser,
      fetchSelectedUserDetails,
      userDetailsHashMap,
      setSelectedUserDetails
    } = this.props;
    userDetailsHashMap.hasOwnProperty(selectedUser)
      ? setSelectedUserDetails(userDetailsHashMap[selectedUser])
      : fetchSelectedUserDetails(`api/users/${selectedUser}`);
    this.setState({ isFetched: true });
  }

  componentWillUnmount() {
    this.props.clearUserDetails();
  }

  render() {
    const { isFetched } = this.state;
    if (!isFetched) return <div>Loading...</div>;
    const { selectedUserDetails, handleCloseUserDetailsCard } = this.props;
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
        <div className="close" onClick={handleCloseUserDetailsCard}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.3333 2.66669L2.66663 13.3334"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M2.66663 2.66669L13.3333 13.3334"
              stroke="white"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
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
  },
  clearUserDetails: () => {
    dispatch(clearUserDetails());
  },
  addUserToUserDetailsHashMap: userDetails => {
    dispatch(addUserToUserDetailsHashMap(userDetails));
  },
  setSelectedUserDetails: userDetails => {
    dispatch(setSelectedUserDetails(userDetails));
  }
});

const mapStateToProps = state => ({
  selectedUser: state.userData.selectedUser,
  selectedUserDetails: state.userData.selectedUserDetails,
  userDetailsHashMap: state.userDetailsHashMap.userDetailsHashMap
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDetailsCard);
