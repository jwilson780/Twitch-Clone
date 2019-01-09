import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form"; //form reducer built by reducer form (renamed form reducer to make it more clear)

import authReducer from "./authReducer";
import streamReducer from "./streamReducer";

export default combineReducers({
  auth: authReducer,
  form: formReducer, //must be named form as reducer
  streams: streamReducer
});
