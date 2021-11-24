import { SET_PROFILES } from "./profileConstant";

var initialState = [];
var profileReducers = (state = initialState, action) => {
  var { type, payload } = action;
  switch (type) {
    case SET_PROFILES:
      return [...payload.profile];

    default:
      return state;
  }
};

export default profileReducers;
