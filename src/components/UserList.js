import React from "react";
import {connect} from "react-redux"
import { User } from "./User";

 const UsersList = ({ userList }) => {
  // if (!userList) {
  //   return (
  //       <p style={{textAlign:'center', fontSize:48}}>No users</p>
  //   );
  // }
  return (
    userList.map((user) => <User user={user} />)
      );
};

const mapStateToProps = state => {
  return {
    userList:state.users.users
  }
}

export default connect(mapStateToProps,null) (UsersList)