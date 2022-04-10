import React from "react";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Form from "../components/pricing/form/form";
import {
  navitem,
  image,
  aboutbgimg,
  selectplan,
  footerbg,
} from "../components/variables/variable";

function pricing_plane(props) {
  return (
    <section className="prcing-page">
      <Navbar name={navitem} logo={image} />
      <nav aria-label="breadcrumb" style={aboutbgimg}>
        <div className="overlay"></div>
      </nav>

      <div className="container">
        <Form selectplan={selectplan} />
      </div>

      <Footer bg={footerbg} />
    </section>
  );
}

export default pricing_plane;
