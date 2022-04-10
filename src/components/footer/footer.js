import React from "react";
import { Link } from "react-router-dom";
import { footbartitle } from "../variables/variable";

function footer(props) {
  return (
    <section style={props.bg} className="footer-part">
      <div className="title">
        <h2>{footbartitle.heading}</h2>
      </div>
      {/*  <form>
        <input type="text" placeholder="Your e-mail Here" />
        <button type="submit">Subscribe</button>
      </form>*/}
      <div className="icon" style={{ paddingBottom: "0px" }}>
        <Link
          to={{
            pathname: "https://www.facebook.com/NanaFormosa.tw",
          }}
          target="_blank"
        >
          <i className="fa fa-facebook" aria-hidden="true"></i>
        </Link>
        <Link
          to={{
            pathname: "https://www.instagram.com/nanaformosa_perc_duo/",
          }}
          target="_blank"
        >
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </Link>
      </div>
      {/*<div className="fotermenu">
        <ul>
          <li>
            <Link to="#">Overview</Link>
          </li>
          <li>
            <Link to="#">??</Link>
          </li>
          <li>
            <Link to="#">????</Link>
          </li>
          <li>
            <Link to="#">??</Link>
          </li>
          <li>
            <Link to="#">????</Link>
          </li>
        </ul>
      </div>*/}
      <div className="copy" style={{ paddingTop: "0px" }}>
        <span>&copy; Copyright 2022. All rights reserved by k</span>
      </div>
    </section>
  );
}
export default footer;
