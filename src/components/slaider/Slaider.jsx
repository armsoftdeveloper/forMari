import React from "react";
import Slider from "react-slick";
import "./Slaider.scss";

export default function Slaider() {
  const settings = {
    className: "",
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    focusOnSelect: true,
    infinite: true,
    arrows: false,
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
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 510,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      <div>
        <h1>Որակ</h1>
      </div>
      <div>
        <h1>Շահավետություն</h1>
      </div>
      <div>
        <h1>Թրենդային </h1>
      </div>
      <div>
        <h1>ֆունկցիոնալ</h1>
      </div>
      <div>
        <h1>Հարմարավետ</h1>
      </div>
      <div>
        <h1>Ստեղծարար</h1>
      </div>
    </Slider>
  );
}
