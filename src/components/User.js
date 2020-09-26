import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser, editUser } from "../redux/actions";
//import { useHttp } from "../hooks/http.hook";

export const User = ({ user }) => {
  //const { request, error, clearError } = useHttp();

  // const deleteUserHandler = async (id) => {
  //     try {
  //       const data = await request(`http://77.120.241.80:8911/api/user/${id}`, "DELETE");
  //     } catch (e) {}
  //   };

  const dispatch = useDispatch()

  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <div className="card blue darken-1">
          <div className="card-content white-text">
            <div>Name: {user.name}</div>
            <div>Surname: {user.surname}</div>
            <div>Description: {user.desc}</div>
          </div>
          <div className="card-action">
            <button
              className="btn yellow darken-4"
              style={{ marginRight: 10 }}
              onClick={() => dispatch(editUser(user.id))}
            >
              Edit
            </button>
            <button
              className="btn red lighten-1 white-text"
              onClick={() => dispatch(deleteUser(user.id))}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
