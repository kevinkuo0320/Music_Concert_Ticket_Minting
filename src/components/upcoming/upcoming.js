import React from 'react';
import Location from './upcominglocation';
import Button from './upcomingbutton';
import {Link} from "react-router-dom";
import ScrollArea from 'react-scrollbar';
 


function upcoming(props) {
  let event = props
    .event
    .map(item => {
      
      return (
        <div key={item.id} className="col-lg-12">
          <div className="event">
            <div className="img">
              <img src={item.img} alt={item.img}/>
            </div>
            <div className="details">
              <h2>{item.title}</h2>
              <Location
                locationimg={item.locationIcon}
                phoneimg={item.phone}
                address={item.address}
                number={item.number}/>
            </div>
            <div className="button">
              <Link to="/pricing_plane" target="_blank"><Button/></Link>
            </div>
          </div>
        </div>
      )
    })
  return (
    <div className="upcoming-part">
      <div className="title text-center">
        <p>{props.title.subheading}</p>
        <h1>{props.title.heading}</h1>
      </div>
     
    
    <div className="container area">
        
    <div className="row">
    <ScrollArea
    speed={0.5}
    className="area"
    contentClassName="content"
    horizontal={false}
    >
    {event}
  </ScrollArea>
     
    </div>
  </div>
</div>
    
  )
}

export default upcoming;
