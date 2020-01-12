import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteUser, setSelectedUser } from "../actions/userData";
import { setRowPerPage, setCurrentPage } from "../actions/pagination";
import { fetchUserData } from "../thunks/user";
import { setFilter } from "../actions/filter";
import Table from "../components/Table";
import SelectVisibleRows from "../components/SelectVisibleRows";
import Conditional from "../components/Conditional";
import PaginationBar from "../components/PaginationBar";
import SortBy from "../components/SortBy";
import Utils from "../utils";

class Pagination extends Component {
  static propTypes = {
    fetchUserData: PropTypes.func.isRequired,
    setSelectedUser: PropTypes.func.isRequired,
    userData: PropTypes.array.isRequired,
    rowPerPage: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    setRowPerPage: PropTypes.func.isRequired,
    setCurrentPage: PropTypes.func.isRequired,
    deleteUser: PropTypes.func.isRequired,
    sortBy: PropTypes.string.isRequired,
    setFilter: PropTypes.func.isRequired,
    selectedUser: PropTypes.number.isRequired
  };

  state = {
    isUserDetailsCardOpen: false
  };
  componentDidMount() {
    const { fetchUserData } = this.props;
    fetchUserData("api/users");
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
    return Utils.generateValuesTillNumber(totalPages);
  };

  sortUserData = (userData, selectedFilter) =>
    [...userData].sort((a, b) =>
      a[selectedFilter].localeCompare(b[selectedFilter])
    );

  handleOpenUserDetailsCard = async uid => {
    const { setSelectedUser } = this.props;
    await setSelectedUser(uid);
    this.setState(prevState => ({
      isUserDetailsCardOpen: true
    }));
  };

  getPerPageRowOptions = totalRows => {
    return Utils.generateValuesTillNumber(totalRows);
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
        <SelectVisibleRows
          rowPerPage={rowPerPage}
          handleOnChange={setRowPerPage}
          options={this.getPerPageRowOptions(userData.length)}
        />
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
