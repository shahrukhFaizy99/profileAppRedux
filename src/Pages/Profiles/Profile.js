import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchProfiles } from "./../../Redux/Profile/profileActions";

const Profile = (props) => {
  console.log(props.profile);
  useEffect(() => {
    props.fetchProfiles();
  }, []);
  return (
    <div>
      <h1>Profiles Page</h1>
    </div>
  );
};

var mapState = (store) => {
  return {
    profile: store.profile,
  };
};
var mapDispatchToProps = {
  fetchProfiles,
};

export default connect(mapState, mapDispatchToProps)(Profile);
