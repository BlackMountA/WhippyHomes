import React from "react";
import "./Button.css";
const Button = (props) => {
  const classes = "waitlist-cta " + props.className;
  return <button className={classes}>Join The WaitList</button>;
};

export default Button;
