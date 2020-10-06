import React from "react";
import ReactDOM from "react-dom";

const HelloWorld = () => {
  return (
    <div>
     <h2> Hello World </h2>
    </div>
  )
}

ReactDOM.render(<HelloWorld />, document.getElementById("app"));