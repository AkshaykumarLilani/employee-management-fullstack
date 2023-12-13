import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./actionTypes"
import { notify } from "../../Utilities/displayGlobalMessage";


export const signupAction = (data) => {
    return async (dispatch) => {
        try {
            dispatch({ type: SIGNUP_REQUEST });
            const response = await axios.post("/signup", data);
            if (response.status === 201) {
                console.log(response.data);
                dispatch({ type: SIGNUP_SUCCESS, payload: response.data });
                notify("Sign up successful, please login", "success");
            }
        } catch (err) {
            console.error(err);
            dispatch({ type: SIGNUP_FAILURE });
            if (err.response && err.response.data && err.response.data.message) {
                notify(err.response.data.message, "error");
            } else {
                notify(`Sign up failed`, "error");
            }
        }
    }
}

export const loginAction = (data) => {
    return async (dispatch) => {
        try {
            dispatch({ type: LOGIN_REQUEST });
            const response = await axios.post("/login", data);
            if (response.status === 200) {
                console.log(response.data);
                dispatch({ type: LOGIN_SUCCESS, payload: response.data });
                notify("Login successful.", "success");
            }
        } catch (err) {
            console.error(err);
            dispatch({ type: LOGIN_FAILURE });
            notify(`Login failed`, "error");
        }
    }
}

export const logoutAction = () => {
    return async (dispatch) => {
        dispatch({ type: LOGOUT });
    }
}