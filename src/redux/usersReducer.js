import { CREATE_USER, DELETE_USER, EDIT_USER, FETCH_USERS } from "./types";

const initialState = {
  users: [],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return { ...state, users: [...state.users, action.payload] };
    case FETCH_USERS:
      return { ...state, users: action.payload };
    case EDIT_USER:
      return { ...state, users: action.payload };
    case DELETE_USER:
      return { state, users: action.payload };
    default:
      return state;
  }
};
