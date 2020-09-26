import { REQUEST_CREATE_USER, REQUEST_DELETE_USER, REQUEST_USERS } from "./types";

export function createUser(user) {
  return {
    type: REQUEST_CREATE_USER,
    payload: user,
  };
}

export function fetchUsers() {
  return {
    type: REQUEST_USERS
  };
}

export function deleteUser(id) {
    return {
        type: REQUEST_DELETE_USER,
        payload: id
    }
}
