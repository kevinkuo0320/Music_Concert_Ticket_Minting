import React from "react";
// import Sheduleicon from './sheduleIcon'

function shedule(props) {
  let speaker = props.speaker.map((item) => {
    return (
      <div key={item.id} className="col-lg-6 col-md-6">
        <div className="speaker">
          <div className="img">
            <img src={item.img} alt={item.img} />
          </div>
          <div className="details">
            {/*<div className="date">
              <p>{item.time}</p>
            </div>*/}
            <h1 className="name">{item.name}</h1>
            <p className="desination">{item.designation}</p>
            {/*<div className="sheduleicon">
              <span>Follow</span>
              <a href="#">
                <i className={item.facebook}></i>
              </a>
              <a href="#">
                {" "}
                <i className={item.twiter}></i>
              </a>
              <a href="#">
                {" "}
                <i className={item.pinterest}></i>
              </a>
              <a href="#">
                <i className={item.linkdin}></i>
              </a>
            </div>*/}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div style={props.bg} className="shedule-part">
      <div className="overlay">
        <div className="title">
          {/*<p>{props.title.subheading}</p>*/}
          <h1>{props.title.heading}</h1>
        </div>
        <div className="container">
          <div className="row">{speaker}</div>
        </div>
      </div>
    </div>
  );
}

export default shedule;
