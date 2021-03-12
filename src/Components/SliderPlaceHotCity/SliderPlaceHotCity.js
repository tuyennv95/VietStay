import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import { makeStyles } from '@material-ui/core/styles';

import './styles.css';


export default function SliderPlaceHotCity(props) {

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className={'slider_place_hot_city'}>
      <div className={'slider_place_title'} >
        <h6 style={{ color: "#222222" }}>An tâm lưu trú tại {props.title}</h6>
        <p style={{ color: "#222222" }}>{props.des}

        </p>
      </div>
      <div className={'slick_slider_place_list'}>

        <Slider {...settings} className={'slider_place_list'}>
          {props.city.map((place, index, id) => (
            <a key={id} className={'slider_place_element'} href={place.href}>
              <img alt="" className={'slider_place_element_img'} src={place.img} />
              <div className={'slider_place_element_title'}>
                <h6>{place.title}</h6>
                <p>{place.description}</p>
              </div>
            </a>

          ))}
        </Slider>
      </div>
    </div>
  );
}

