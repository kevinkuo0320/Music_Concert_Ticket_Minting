import React from 'react'
import Slider from "react-slick";
import {Link} from "react-router-dom";
function gallery(props) {

  let img = props
    .img
    .map(item => {
      return (
        <div className="img" key={item.id}>
          <img src={item.img} img={item.img}/>
          <div className="overlay">
            <a className="venobox" data-gall="gallery01" href={item.img}>
              +
            </a>
          </div>
        </div>
      )
    })

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      }, {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="gallery-part">
      <div className="title text-center">
        <p>{props.title.subheading}</p>
        <h1>{props.title.heading}</h1>
      </div>
      <Slider {...settings}>

        {img}
      </Slider>
      <div className="button">
      <Link to="/gallery">
        

          <button>see more</button>
    
      </Link>
      </div>
    </div>
  )
}

export default gallery
