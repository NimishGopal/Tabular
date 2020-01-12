import React from "react";
import PropTypes from "prop-types";
import Row from "./Row";
import Conditional from "./Conditional";
import UserDetailsCard from "../containers/UserDetailsCard";

const Page = ({
  currentPageData,
  handleDeleteUser,
  isUserDetailsCardOpen,
  handleOpenUserDetailsCard,
  selectedUser,
  handleCloseUserDetailsCard
}) =>
  currentPageData.map((user, index) => {
    const {
      id,
      name,
      username,
      email,
      phone,
      website,
      address,
      company
    } = user;
    return (
      <>
        <Row
          key={index}
          uid={id}
          name={name}
          username={username}
          email={email}
          address={`${address.suite}, ${address.street}, ${address.city} - ${address.zipcode}`}
          phone={phone}
          website={website}
          company={company.name}
          deletableRow={true}
          handleDeleteUser={handleDeleteUser}
          handleOpenUserDetailsCard={handleOpenUserDetailsCard}
          selectedUser={selectedUser}
          isUserDetailsCardOpen={isUserDetailsCardOpen}
        />
        <Conditional if={isUserDetailsCardOpen && id === selectedUser}>
          <UserDetailsCard
            handleCloseUserDetailsCard={handleCloseUserDetailsCard}
          />
        </Conditional>
      </>
    );
  });

Page.propTypes = {
  currentPageData: PropTypes.array.isRequired,
  handleDeleteUser: PropTypes.func.isRequired,
  isUserDetailsCardOpen: PropTypes.bool.isRequired,
  handleOpenUserDetailsCard: PropTypes.func.isRequired,
  selectedUser: PropTypes.number.isRequired,
  handleCloseUserDetailsCard: PropTypes.func.isRequired
};

export default Page;
