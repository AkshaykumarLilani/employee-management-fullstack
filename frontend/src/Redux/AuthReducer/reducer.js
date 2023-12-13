import { SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from "./actionTypes";

const initialState = {
    user:{},
    token:null,
    loading: false,
}

export const authReducer = (state=initialState, action) => {
    const type = action.type;

    switch (type){
        case SIGNUP_REQUEST: {
            return {...initialState, loading: true, user: null};
        }
        case SIGNUP_SUCCESS: {
            return {...initialState, loading: false, user: null};
        }
        case SIGNUP_FAILURE: {
            return {...initialState, loading: false, user: null};
        }
        case LOGIN_REQUEST: {
            return {...initialState, loading: true, user: null};
        }
        case LOGIN_SUCCESS: {
            let newState = {};

            newState.user = action.payload.user;
            newState.token = action.payload.token;
            newState.loading = false;

            return newState;
        }
        case LOGIN_FAILURE: {
            return {...initialState, loading: false, user: null};
        }
        case LOGOUT: {
            return {...initialState};
        }
        default: {
            return state;
        }
    }
}