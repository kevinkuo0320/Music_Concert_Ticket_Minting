import React from "react";

import "../src/assets/css/slick.css";
import "../src/assets/css/bootstrap.min.css";
import "../src/assets/css/venobox.css";
import "../src/assets/css/navbar.css";
import "../src/assets/css/navbutton.css";
import "../src/assets/css/banner.css";
import "../src/assets/css/festiveslider.css";
import "../src/assets/css/shedule.css";
import "../src/assets/css/upcoming.css";
import "../src/assets/css/gallery.css";
import "../src/assets/css/event.css";
import "../src/assets/css/pricing.css";
import "../src/assets/css/sponsor.css";
import "../src/assets/css/about-page.css";
import "../src/assets/css/pricingpahe.css";
import "../src/assets/css/sponsorpage.css";
import "../src/assets/css/comingsoon.css";
import "../src/assets/css/error-page.css";
import "../src/assets/css/footer.css";
import "../src/assets/css/responsive.css";
import "./App.css";

import Home from "./pages/home";
import Gallery from "./pages/gallery";
import Pricing from "./pages/pricing_plane";
import Sponsor from "./pages/sponsor";
import Coming from "./pages/comingsoon";
import Err from "./pages/error";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch basename="/">
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/gallery" component={Gallery}></Route>
          <Route exact path="/buy_nft_ticket" component={Pricing}></Route>
          <Route exact path="/sponsor" component={Sponsor}></Route>
          <Route exact path="/coming_soon" component={Coming}></Route>
          <Route exact path="/error" component={Err}></Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
