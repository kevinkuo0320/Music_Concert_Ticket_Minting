import React from "react";

function festivetext(props) {
  let textlength = props.text.details;
  return (
    <div>
      <h1 className="text-title" style={{ minWidth: "fit-content" }}>
        {props.text.heading}
      </h1>
      <p className="para1">{textlength.slice(0, 86)}</p>
      <p className="para2">{textlength.slice(86)}</p>
    </div>
  );
}

export default festivetext;
