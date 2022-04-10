import React from "react";
import Navbar from "../components/navbar/navbar";
import Banner from "../components/banner/banner";
import Festival from "../components/festival/festival";
import Shedule from "../components/shedule/shedule";
import Upcoming from "../components/upcoming/upcoming";
import Gallery from "../components/gallery/gallery";
import Event from "../components/event/event";
import Pricing from "../components/pricing/pricing";
import Sponsor from "../components/sponsor/sponsor";
import Footer from "../components/footer/footer";
import {
  navitem,
  image,
  bgimg,
  bannerText,
  bannerCountdown,
  videobtn,
  festiveimg,
  festivedate,
  festivetext,
  location,
  shedulebg,
  speaker,
  title,
  upcomingtitle,
  event,
  galleryTitle,
  galleryImg,
  feedback,
  feedbackTitle,
  pricingTitle,
  pricingPlane,
  selectplan,
  sponsorTitle,
  sponsorimg,
  footerbg,
} from "../components/variables/variable";
function home() {
  return (
    <div>
      <Navbar name={navitem} logo={image} />
      <Banner
        bg={bgimg}
        text={bannerText}
        countdown={bannerCountdown}
        videobtn={videobtn}
      />
      <Festival
        img={festiveimg}
        year={festivedate}
        text={festivetext}
        location={location}
      />
      <Shedule speaker={speaker} bg={shedulebg} title={title} />
      {/*<Upcoming title={upcomingtitle} event={event}/>*/}
      {/* <Gallery title={galleryTitle} img={galleryImg} />*/}
      {/*<Event feedback={feedback} title={feedbackTitle}/>*/}
      {/*  <Pricing
        title={pricingTitle}
        plan={pricingPlane}
        selectplan={selectplan}
      />*/}
      <Sponsor title={sponsorTitle} sponsor={sponsorimg} />
      <Footer bg={footerbg} />
    </div>
  );
}

export default home;
