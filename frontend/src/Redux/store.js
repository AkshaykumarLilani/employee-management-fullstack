import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./AuthReducer/reducer";
import { employeeReducer } from "./EmployeeReducer/reducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
    "employeeAuthReducer": authReducer,
    employeeReducer
});

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

let composeEnhancers = null;
let store = null;
let persistor = null;

if (import.meta.env.VITE_NODE_ENV && import.meta.env.VITE_NODE_ENV === "development") {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    store = legacy_createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)));
    persistor = persistStore(store)
} else {
    store = legacy_createStore(persistedReducer, applyMiddleware(thunk));
    persistor = persistStore(store)
}


export {
    store,
    persistor
}

