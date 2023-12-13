import { 
    ADD_EMPLOYEE_FAILURE, 
    ADD_EMPLOYEE_REQUEST, 
    ADD_EMPLOYEE_SUCCESS,
    EDIT_EMPLOYEE_FAILURE,
    EDIT_EMPLOYEE_REQUEST,
    EDIT_EMPLOYEE_SUCCESS,
    DELETE_EMPLOYEE_FAILURE,
    DELETE_EMPLOYEE_REQUEST,
    DELETE_EMPLOYEE_SUCCESS,
    LOAD_EMPLOYEE_FAILURE,
    LOAD_EMPLOYEE_REQUEST,
    LOAD_EMPLOYEE_SUCCESS
} from "./actionTypes";

const initialState = {
    employees:[],
    next: null,
    loading: false
}

export const employeeReducer = (state=initialState, action) => {
    const type = action.type;

    switch (type){
        case ADD_EMPLOYEE_REQUEST: {
            return {...state, loading: true};
        }
        case ADD_EMPLOYEE_FAILURE: {
            return {...state, loading: false};
        }
        case ADD_EMPLOYEE_SUCCESS: {
            return {...state, loading: false};
        }
        case EDIT_EMPLOYEE_REQUEST: {
            return {...state, loading: true};
        }
        case EDIT_EMPLOYEE_FAILURE: {
            return {...state, loading: false};
        }
        case EDIT_EMPLOYEE_SUCCESS: {
            return {...state, loading: false};
        }
        case LOAD_EMPLOYEE_REQUEST: {
            return {...state, loading: true};
        }
        case LOAD_EMPLOYEE_FAILURE: {
            return {...state, loading: false};
        }
        case LOAD_EMPLOYEE_SUCCESS: {
            return {...state, loading: false};
        }
        case DELETE_EMPLOYEE_REQUEST: {
            return {...state, loading: true};
        }
        case DELETE_EMPLOYEE_FAILURE: {
            return {...state, loading: false};
        }
        case DELETE_EMPLOYEE_SUCCESS: {
            return {...state, loading: false};
        }
        default: {
            return state;
        }
    }
}