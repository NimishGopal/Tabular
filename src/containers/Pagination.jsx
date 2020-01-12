import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteUser, setSelectedUser } from "../actions/userData";
import { setRowPerPage, setCurrentPage } from "../actions/pagination";
import { fetchUserData } from "../thunks/user";
import { setFilter } from "../actions/filter";
import Table from "../components/Table";
import Selector from "../components/Selector";
import Conditional from "../components/Conditional";
import PaginationBar from "../components/PaginationBar";
import SortBy from "../components/SortBy";

class Pagination extends Component {
  state = {
    isUserDetailsCardOpen: false
  };
  componentDidMount() {
    const { fetchUserData, userData } = this.props;
    fetchUserData("api/users");
  }
  componentDidUpdate() {
    // console.log(this.props.userData);
  }

  createPagedData = (userData, rowPerPage) => {
    if (userData) {
      let result = [];
      for (let i = 0; i < userData.length; i = i + rowPerPage) {
        result = [...result, userData.slice(i, i + rowPerPage)];
      }
      return result;
    }
  };

  getPaginationBar = totalPages => {
    let paginationBar = [];
    for (let i = 0; i < totalPages; i++) {
      paginationBar = [...paginationBar, i];
    }
    return paginationBar;
  };

  sortUserData = (userData, selectedFilter) =>
    [...userData].sort((a, b) =>
      a[selectedFilter].localeCompare(b[selectedFilter])
    );

  handleOpenUserDetailsCard = uid => {
    const { setSelectedUser } = this.props;
    setSelectedUser(uid);
    this.setState({ isUserDetailsCardOpen: true });
  };

  render() {
    const {
      userData,
      rowPerPage,
      currentPage,
      setRowPerPage,
      setCurrentPage,
      deleteUser,
      sortBy,
      setFilter,
      selectedUser
    } = this.props;

    const { isUserDetailsCardOpen } = this.state;

    const sortedData = this.sortUserData(userData, sortBy);
    const pagedData = this.createPagedData(sortedData, rowPerPage);
    const totalPages = Math.ceil(userData.length / rowPerPage);
    return (
      <div className="table-wrapper">
        <Selector rowPerPage={rowPerPage} handleOnChange={setRowPerPage} />
        <SortBy sortBy={sortBy} handleOnChange={setFilter} />
        <Table
          currentPage={currentPage}
          pagedData={pagedData}
          handleDeleteUser={deleteUser}
          handleOpenUserDetailsCard={this.handleOpenUserDetailsCard}
          isUserDetailsCardOpen={isUserDetailsCardOpen}
          selectedUser={selectedUser}
        />
        <Conditional if={pagedData.length}>
          <PaginationBar
            paginationBar={this.getPaginationBar(totalPages)}
            handlePageChange={setCurrentPage}
            currentPage={currentPage}
          />
        </Conditional>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUserData: url => {
    dispatch(fetchUserData(url));
  },
  setRowPerPage: rowPerPage => {
    dispatch(setRowPerPage(rowPerPage));
  },
  setCurrentPage: currentPage => {
    dispatch(setCurrentPage(currentPage));
  },
  deleteUser: id => {
    dispatch(deleteUser(id));
  },
  setFilter: filter => {
    dispatch(setFilter(filter));
  },
  setSelectedUser: selectedUser => {
    dispatch(setSelectedUser(selectedUser));
  }
});

const mapStateToProps = state => ({
  userData: state.userData.userData,
  rowPerPage: state.pagination.rowPerPage,
  currentPage: state.pagination.currentPage,
  sortBy: state.filter.sortBy,
  selectedUser: state.userData.selectedUser
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
