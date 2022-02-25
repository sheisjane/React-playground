import React from "react";

const Button = (props) => {
  return (
    <span
      style={{
        padding: "5px 10px",
        border: "1px solid red",
        backgroundColor: "grey",
      }}
    >
      {props.text}
    </span>
  );
};

export default Button;
