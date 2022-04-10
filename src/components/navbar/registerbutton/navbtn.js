import React from "react";
import { buybutton } from "../../variables/variable";
import "./button.css";

function button() {
  return (
    <button className="theButton">
      <p>{buybutton.heading} </p>
    </button>
  );
}

export default button;
