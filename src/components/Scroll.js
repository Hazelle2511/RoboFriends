import React from "react";

//using children, you can wrap components with other components
const Scroll = (props) => {
  return (
    /*props.children;*/ <div
      style={{
        overflowY: "scroll",
        border: "4px solid black",
        height: "500px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
