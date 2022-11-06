import React from "react";
import Slider from "react-slick";
import "./components-styles/cardSlider.css";

const CardSlider = () => {
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
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className="container-md">
      <h2 className="mt-5 mb-5">
        {" "}
       Top sellers{" "}
      </h2>
      <Slider {...settings}>
        {/* card 1 */}
        <div>
          <img
            className="slider-img"
            src="https://i.ibb.co/0rR03Nw/hallow.webp" alt="hallow" border="0"
          />
          <div className="slider-caption mt-2 p-2">
            <p className="slider-caption-p">
              <i className="fa-solid fa-star"></i>4.92{" "}
              <span className="text-secondary">(3,337) . Czech Republic</span>
              <br />
              The Plague Dactor of Prague - Hallowween Edition
              <br />
              <strong>from ₹1,323</strong>/person
            </p>
          </div>
        </div>

        {/* card 2 */}
        <div>
          <img
            className="slider-img"
src="https://i.ibb.co/YZ0tM7v/mistery-escape.webp" alt="mistery-escape" border="0"
          />
          <div className="slider-caption mt-2 p-2">
            <p className="slider-caption-p">
              <i className="fa-solid fa-star"></i>4.93{" "}
              <span className="text-secondary">(2,302) . Poland</span>
              <br />
              Solve the mistery Escape Room, also with Halloween
              <br />
              <strong>from ₹1,271</strong>/person
            </p>
          </div>
        </div>

        {/* caed 3 */}
        <div>
          <img
            className="slider-img"
  src="https://i.ibb.co/bFsY1SZ/murder-by.webp" alt="murder-by" border="0"
          />
          <div className="slider-caption mt-2 p-2">
            <p className="slider-caption-p">
              <i className="fa-solid fa-star"></i>4.86{" "}
              <span className="text-secondary">(564) .  Poland</span>
              <br />
              Murder Mystery Escape Room Game - Perfect For Viewers
              <br />
              <strong>from ₹1,272</strong>/person
            </p>
          </div>
        </div>

        {/* cartd 4 */}
        <div>
          <img
            className="slider-img"
            src="https://i.ibb.co/XxH43RS/no-spain.webp" alt="no-spain" border="0"
            
          />
          <div className="slider-caption mt-2 p-2">
            <p className="slider-caption-p">
              <i className="fa-solid fa-star"></i>4.91{" "}
              <span className="text-secondary">(2,590) . spain</span>
              <br />
              'No Sapin no Game ' The Fabulous Game
              <br />
              <strong>from 1,298</strong>/person
            </p>
          </div>
        </div>

        {/* card 5 */}
        <div>
          <img
            className="slider-img"
            src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-3134396-active_media/original/01ba2db5-1151-443e-8906-ed865ec91176.jpg?im_w=240"
            alt=""
          />
          <div className="slider-caption mt-2 p-2">
            <p className="slider-caption-p">
              <i className="fa-solid fa-star"></i>4.75{" "}
              <span className="text-secondary">(225) . Portugal</span>
              <br />
              The Circus Factory
              <br />
              <strong>from ₹2,028</strong>/person
            </p>
          </div>
        </div>

        {/* card 6 */}
        <div>
          <img
            className="slider-img"
            src="https://i.ibb.co/NxyDrDM/spannendes.webp" alt="spannendes" border="0"
          />
          <div className="slider-caption mt-2 p-2">
            <p className="slider-caption-p">
              <i className="fa-solid fa-star"></i>4.92{" "}
              <span className="text-secondary">(148) . united Kingdom</span>
              <br />
              Spannendes Murder Mystory Spiel mitology
              <br />
              <strong>from ₹1,954</strong>/person
            </p>
          </div>
        </div>

        {/* card 7 */}
        <div>
          <img
            className="slider-img"
            src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-2493134-active_media/original/90ff3c19-817e-48a5-be2e-2316a55852dd.jpeg?im_w=320"
            alt=""
          />
          <div className="slider-caption mt-2 p-2">
            <p className="slider-caption-p">
              <i className="fa-solid fa-star"></i>5.0{" "}
              <span className="text-secondary">(16) . italy</span>
              <br />
              plan a venice venture with giulia
              <br />
              <strong>from ₹2,461</strong>/person
            </p>
          </div>
        </div>

        {/* card 8 */}
        <div>
          <img
            className="slider-img"
            src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-2493583-active_media/original/41e41ce9-c713-4526-9c28-d8aab2b1bf82.jpeg?im_w=320"
            alt=""
          />
          <div className="slider-caption mt-2 p-2">
            <p className="slider-caption-p">
              <i className="fa-solid fa-star"></i>4.98{" "}
              <span className="text-secondary">(153) . united states</span>
              <br />
              Plan a trip to nashvile with a local insider
              <br />
              <strong>from ₹988</strong>/person
            </p>
          </div>
        </div>

        {/* card 9 */}
        <div>
          <img
            className="slider-img"
            src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-3076506-active_media/original/f41915a1-e446-4c7e-b778-21826aee2079.jpg?im_w=240"
            alt=""
          />
          <div className="slider-caption mt-2 p-2">
            <p className="slider-caption-p">
              <i className="fa-solid fa-star"></i>5.0{" "}
              <span className="text-secondary">(4) . united states</span>
              <br />
              Plan the perfect trip to sunny miami
              <br />
              <strong>from ₹1,729</strong>/person
            </p>
          </div>
        </div>

        {/* card 10 */}
        <div>
          <img
            className="slider-img"
            src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-4486443-media_library/original/3f642d23-14c5-4a45-b29c-0a5089fefcaa.jpeg?im_w=1200"
            alt=""
          />
          <div className="slider-caption mt-2 p-2">
            <p className="slider-caption-p">
              <i className="fa-solid fa-star"></i>4.99{" "}
              <span className="text-secondary">(153) . united states</span>
              <br />
              Plan the perfect new york vacation
              <br />
              <strong>from ₹1,564</strong>/person
            </p>
          </div>
        </div>

        {/* card 11 */}
        <div>
          <img
            className="slider-img"
            src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-4477143-media_library/original/2618d48d-c9f9-4b3f-aaf3-0d8c6f9195c1.jpeg?im_w=320"
            alt=""
          />
          <div className="slider-caption mt-2 p-2">
            <p className="slider-caption-p">
              <i className="fa-solid fa-star"></i>4.99{" "}
              <span className="text-secondary">(153) . united states</span>
              <br />
              Plan the perfect new york vacation
              <br />
              <strong>from ₹1,564</strong>/person
            </p>
          </div>
        </div>

        {/* card 12 */}
        <div>
          <img
            className="slider-img"
            src="https://a0.muscache.com/im/pictures/lombard/MtTemplate-4489667-media_library/original/0176fc13-e91c-4d46-83cb-74a4e998a1ac.jpeg?im_w=320"
            alt=""
          />
          <div className="slider-caption mt-2 p-2">
            <p className="slider-caption-p">
              <i className="fa-solid fa-star"></i>4.99{" "}
              <span className="text-secondary">(153) . united states</span>
              <br />
              Plan the perfect new york vacation
              <br />
              <strong>from ₹1,564</strong>/person
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default CardSlider;
