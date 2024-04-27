import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

function Slick() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false
  };
  return (
    <div className=" w-[50vw]  lg:h-[60vh] md:h-[50vh] h-[40vh] ml-20 rounded-2xl slider-container">
      <Slider className="outline-none" {...settings}>
        <div>
          <img className=" lg:h-[60vh] md:h-[50vh] h-[40vh] lg:w-[50vw] md:w-[40vh] w-[90vw]  ml-0 mt-5 rounded-2xl" src="/197277.jpg" />
        </div>
        
        <div >
          <img className="lg:h-[60vh] md:h-[50vh] h-[40vh] w-[50vw]   ml-0 mt-5 rounded-2xl" src="/770430.jpg" alt="" />
        </div>
        <div >
        <img className=" lg:h-[60vh] md:h-[50vh] h-[40vh] w-[50vw]  ml-0 mt-5 rounded-2xl" src="/2266021.jpg" />
        </div>
        <div >
        <img className="lg:h-[60vh] md:h-[50vh] h-[40vh] w-[50vw]  ml-0 mt-5 rounded-2xl " src="/107690.jpg" />
        </div>
      </Slider>
    </div>
  );
}

export default Slick;
