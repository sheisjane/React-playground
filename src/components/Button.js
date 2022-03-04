import React from "react";

const Button = (props) => {
  return (
    <span
      style={{
        padding: "2px 10px",
        color:"#eee",
        // border: "1px solid red",
        borderRadius :'10px',
        backgroundColor: "grey",
      }}
    >
      {props.children}
    </span>
  );
};

export default Button;
