import React, { Component } from "react";
import { connect } from "react-redux";
import { createUser, editUser } from "../redux/actions";

class EditUserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      desc: "",
    };
  }
  newUserHandler = (e) => {
    e.preventDefault();
    // const self = this;
    // fetch("http://77.120.241.80:8911/api/users", {
    //   method: "POST",
    //   body: JSON.stringify(this.state),
    //   headers: {
    //     Accept: "application/json",
    //     "Content-Type": "application/json",
    //   },
    // }).then((response) => {
    //   response.json().then(() => {
    //     self.setState({
    //       name: "",
    //       surname: "",
    //       desc: "",
    //     });
    //   });
    // }).then(() =>{
    //   self.props.createUser(this.state)
    // })
    this.props.createUser(this.state);
  };

  editUserHandler = (id) => {
    this.props.editUser(id, this.state);
  };
  changeInputHandler = (e) => {
    e.persist();
    this.setState((prev) => ({
      ...prev,
      ...{ [e.target.name]: e.target.value },
    }));
  };
  render() {
    return (
      <div className="row">
        <div className="col s8 offset-s2">
          <div className="card blue darken-1">
            <div className="card-content white-text">
              <span className="card-title">Enter new data</span>

              <div>
                <div className="input-field">
                  <input
                    placeholder="Enter name"
                    id="name"
                    type="text"
                    name="name"
                    className="yellow-input"
                    value={this.state.name}
                    onChange={this.changeInputHandler}
                  />
                </div>

                <div className="input-field">
                  <input
                    placeholder="Enter surname"
                    id="surname"
                    type="text"
                    name="surname"
                    className="yellow-input"
                    value={this.state.surname}
                    onChange={this.changeInputHandler}
                  />
                </div>

                <div className="input-field">
                  <input
                    placeholder="Enter description"
                    id="desc"
                    type="text"
                    name="desc"
                    className="yellow-input"
                    value={this.state.desc}
                    onChange={this.changeInputHandler}
                  />
                </div>
              </div>
            </div>
            <div className="card-action">
              <button
                className="btn yellow darken-4"
                style={{ marginRight: 10 }}
                onClick={() => this.editUserHandler(this.props.userId)}
                //onClick={this.newUserHandler}
              >
                Edit user
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  createUser,
  editUser,
};

export default connect(null, mapDispatchToProps)(EditUserForm);
