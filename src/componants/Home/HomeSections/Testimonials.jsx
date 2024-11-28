import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../HomeSections/Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    { img: "https://randomuser.me/api/portraits/men/82.jpg", name: "Mark Huff", position: "Businesswoman" },
    { img: "https://randomuser.me/api/portraits/men/83.jpg", name: "Rodel Golez", position: "Businesswoman" },
    { img: "https://randomuser.me/api/portraits/men/84.jpg", name: "Ken Bosh", position: "Businesswoman" },
    { img: "https://randomuser.me/api/portraits/men/85.jpg", name: "Racky Henderson", position: "Father" },
    { img: "https://randomuser.me/api/portraits/men/86.jpg", name: "Henry Dee", position: "Businesswoman" },
  ];

  const settings = {
    dots: true,
    infinite: true, 
    speed: 500, 
    slidesToShow: 3, 
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        },
      },
    ],
  };

  return (
    <div className="testimonials-wrap" style={{ backgroundColor: "#000", color: "#fff" }}>
      <div className="container">
        <div className="heading-section">
          <span className="sub-heading">Testimonials</span>
          <h2>Happy Clients &amp; Feedbacks</h2>
        </div>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div className="item" key={index}>
              <div className="testimonial-box d-flex">
                <div
                  className="user-img"
                  style={{ backgroundImage: `url(${testimonial.img})` }}
                ></div>
                <div className="text pl-4">
                  <span className="quote">
                    <i className="fa fa-quote-left"></i>
                  </span>
                  <p>Far far away, behind the word mountains...</p>
                  <p className="testimonial-name">{testimonial.name}</p>
                  <span className="position">{testimonial.position}</span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;