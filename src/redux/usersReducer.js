import { CREATE_USER, DELETE_USER, FETCH_USERS } from "./types"

const initialState = {
    users:[]
}

export const usersReducer = (state = initialState,action) => {

    switch (action.type){
        case CREATE_USER:
            return {...state, users:[...state.users, action.payload]}
        case FETCH_USERS:
            return {...state, users:action.payload}
        case DELETE_USER:
            console.log({users:action.payload});
            return {users:action.payload}
        default: return state
    }
}