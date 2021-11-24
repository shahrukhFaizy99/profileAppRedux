import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Profile</h1>
      <Link to="/Profiles">
        <button>View Profile</button>
      </Link>
    </div>
  );
};

export default Home;
