import React from "react";

import Card from "../UI/Card/Card";
import classes from "./Home.module.css";

const Home = (props) => {
  return (
    <Card className={classes.home}>
      <h2>Welcome to the Home Page</h2>
      {props.loginDetails && (
        <div>
          <p>Your login details:</p>
          <p>Email: {props.loginDetails.email}</p>
          <p>Password: {props.loginDetails.password}</p>
          <p>WARNING: Do not share your login details with anyone!</p>
        </div>
      )}
    </Card>
  );
};

export default Home;
