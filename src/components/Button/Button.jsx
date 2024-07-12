import React from "react";
import "./Button.css";

const Button = (props) => {
  return <button {...props} className={"buton" + props.className} />;
};

export default Button;
