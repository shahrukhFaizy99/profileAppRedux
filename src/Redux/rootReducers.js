import { combineReducers } from "redux";
import profileReducers from "./Profile/profileReducers";

var rootReducers = combineReducers({
  profile: profileReducers,
});

export default rootReducers;
