import React from "react";
import ReactDom from "react-dom";
import './index.css';

function HelloWorld() {
  const name = "Nirmala";
  return (
    <div>
      <h1 className = 'heading'>Heading</h1>
      My name is <strong>{name}</strong>, this is my {0 + 1}
      <sup>st</sup> react component!
    </div>
  );
}

ReactDom.render(<HelloWorld />, document.getElementById("root"));


		