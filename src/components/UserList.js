import React, { useState } from "react";
import { connect } from "react-redux";
import { User } from "./User";
import { Pagination } from "../components/Pagination";

const UsersList = ({ userList }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setusersPerPage] = useState(5);
  const indexOfLastMovie = currentPage * usersPerPage;
  const indexOfFirstMovie = indexOfLastMovie - usersPerPage;
  const currentUsers = userList.slice(indexOfFirstMovie, indexOfLastMovie);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  if (!currentUsers) {
    return <p style={{ textAlign: "center", fontSize: 48 }}>No users</p>;
  }
  return (
    <div>
      {currentUsers.map((user) => (
        <User user={user} key={user.id}/>
      ))}
      <Pagination
        usersPerPage={usersPerPage}
        totalusers={userList.length}
        paginate={paginate}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userList: state.users.users,
  };
};

export default connect(mapStateToProps, null)(UsersList);
