import { takeEvery, put, call } from "redux-saga/effects";
import {
  CREATE_USER,
  FETCH_USERS,
  REQUEST_CREATE_USER,
  REQUEST_DELETE_USER,
  REQUEST_USERS,
  DELETE_USER,
} from "./types";
import { useHttp } from "../hooks/http.hook";

export function* sagaWatcher() {
  yield takeEvery(REQUEST_USERS, usersWorker);
  yield takeEvery(REQUEST_CREATE_USER, createUserWorker);
  yield takeEvery(REQUEST_DELETE_USER, deleteUserWorker);
}

function* usersWorker() {
  const payload = yield call(fetchUsers);
  yield put({ type: FETCH_USERS, payload });
}

function* createUserWorker(action) {
  const payload = action.payload;
  yield call(createUser, payload);
  yield put({ type: CREATE_USER, payload });
}

function* deleteUserWorker(action) {
  let payload = action.payload;
  payload = yield call(deleteUser, payload);
  yield put({ type: DELETE_USER, payload });
}

async function fetchUsers() {
  const responce = await fetch("http://77.120.241.80:8911/api/users");
  return await responce.json();
}

async function createUser(data) {
  const responce = await fetch("http://77.120.241.80:8911/api/users", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  // return await responce.json()
}

async function deleteUser(id) {
  const responce = await fetch(`http://77.120.241.80:8911/api/user/${id}`, {
    method: "DELETE",
    // body: JSON.stringify(data),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  return await responce.json();
}
