import React, { Component } from "react";
import NewUserForm from "../components/NewUserForm";

class NewUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <NewUserForm />
      </div>
    );
  }
}

export default NewUsers;
