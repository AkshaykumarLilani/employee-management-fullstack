import axios from "axios";
import { LOAD_EMPLOYEE_FAILURE, LOAD_EMPLOYEE_REQUEST, LOAD_EMPLOYEE_SUCCESS } from "./actionTypes";
import { notify } from "../../Utilities/displayGlobalMessage";

export const loadEmployeesAction = (data) => {
    return async (dispatch) => {
        try {
            dispatch({ type: LOAD_EMPLOYEE_REQUEST });
            const response = await axios.post("/login", data);
            if (response.status === 200) {
                console.log(response.data);
                dispatch({ type: LOAD_EMPLOYEE_SUCCESS, payload: response.data });
            }
        } catch (err) {
            console.error(err);
            dispatch({ type: LOAD_EMPLOYEE_FAILURE });
            notify(`Employees Fetching failed`, "error");
        }
    }
}