import React from "react";
import Button from "../navbar/registerbutton/navbtn";
import { Link } from "react-router-dom";

function festivelocation(props) {
  return (
    <div
      className="nav-button"
      style={{
        marginTop: "7vh",
      }}
    >
      <Link to="/buy_nft_ticket">
        <Button />
      </Link>
    </div>
  );
}

export default festivelocation;
