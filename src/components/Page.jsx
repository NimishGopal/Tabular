import React from "react";
import Row from "./Row";
import Conditional from "./Conditional";
import UserDetailsCard from "../containers/UserDetailsCard";

const Page = ({
  currentPageData,
  handleDeleteUser,
  isUserDetailsCardOpen,
  handleOpenUserDetailsCard,
  selectedUser
}) => {
  return currentPageData.map(user => {
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
          key={id}
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
        />
        <Conditional if={isUserDetailsCardOpen && id === selectedUser}>
          <UserDetailsCard />
        </Conditional>
      </>
    );
  });
};

export default Page;
