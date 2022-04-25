import { combineReducers } from "redux";
// import patientsReducer from "./patients";
// import errorsReducer from './errors';
// import messagesReducer from './messages';
import auth from './auth'

export default combineReducers({
    // patientsReducer,
    // errorsReducer,
    // messagesReducer,
    auth,
});