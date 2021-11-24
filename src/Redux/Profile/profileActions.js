import { SET_PROFILES } from "./profileConstant";

export const fetchProfiles = () => async (dispatch) => {
  var data = await fetch("https://jsonplaceholder.typicode.com/users");
  var profile = await data.json();
  dispatch({
    type: SET_PROFILES,
    payload: {
      profile,
    },
  });
};
