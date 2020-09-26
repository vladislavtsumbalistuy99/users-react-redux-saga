import React, { Component } from "react";
import { connect } from "react-redux";
import  UsersList  from "../components/UserList";
import { useHttp } from "../hooks/http.hook";
import { fetchUsers } from "../redux/actions";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {users:[]};
  }
  componentDidMount(){
    this.props.fetchUsers()
  }
  render() {
      const users = this.state.users;
    return (
      <div>
        <UsersList />
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchUsers
};

export default connect(null,mapDispatchToProps) (Users)
