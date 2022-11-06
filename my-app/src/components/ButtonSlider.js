import React from "react";
import Slider from "react-slick";
import "./components-styles/cardSlider.css";

const ButtonSlider = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  };
  return (
    <div className="container-md mt-5 mb-5">
      <div className="row">
        <div
          className="col-sm-12 col-md-6 col-lg-4 d-flex justify-content-between"
          style={{ borderRight: "1px solid black" }}
        >
          <button type="button" className="btn btn-outline-secondary first-button">
            Dates
          </button>
          <button type="button" className="btn btn-outline-secondary first-button">
            Group Size
          </button>
          <button type="button" className="btn btn-outline-secondary first-button">
            More Filters
          </button>
        </div>
        <br className="sm-d-none" />
        <div className="col-sm-12 col-md-6 col-lg-8 text-center">
          <Slider {...settings} className="ml-5">
            <div>
              <button type="button" className=" button btn btn-light">
                Great for groups
              </button>
            </div>
            <div>
              <button type="button" className="button btn btn-light">
                Family-friendly
              </button>
            </div>
            <div>
              <button type="button" className="button btn btn-light">
                Animals
              </button>
            </div>
            <div>
              <button type="button" className="button btn btn-light">
                Arts & writing
              </button>
            </div>
            <div>
              <button type="button" className="button btn btn-light">
                Baking
              </button>
            </div>
            <div>
              <button type="button" className="button btn btn-light">
                Cooking
              </button>
            </div>
            <div>
              <button type="button" className="button btn btn-light">
                Dance
              </button>
            </div>
            <div>
              <button type="button" className="button btn btn-light">
                Drinks
              </button>
            </div>
            <div>
              <button type="button" className="button btn btn-light">
                Enterprices
              </button>
            </div>
            
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ButtonSlider;