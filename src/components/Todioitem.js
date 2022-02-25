import React from "react";
import Button from "./Button";

function TodoItem(props) {
  return (
    <li>
      {props.text}
      <Button text="Test"></Button>
      <button>Complete</button>
      <button>Delete</button>
       <button>Complete</button>
    </li>
  );
  // return React.createElement('li',{},'watch 123')
}

export default TodoItem;
