import React from "react";

const Button = (props) => {
  return <button {...props} className={"buton" + props.className} />;
};

export default Button;
