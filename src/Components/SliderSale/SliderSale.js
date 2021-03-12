import React, { Component } from "react";
import Slider from "react-slick";

export default function AutoPlayMethods() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        height: "80px",
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
        <div style={{ justifyContent: "center" }}>
            <div >
                <Slider {...settings}  >
                    <div >
                        <img src="https://cdn.luxstay.com/home/event/event_1_1598934299.jpg" />
                    </div>
                    <div>
                        <img src="https://cdn.luxstay.com/home/event/event_1_1596605825.jpg" />
                    </div>
                    <div>
                        <img src="https://cdn.luxstay.com/home/event/event_17_1596604856.jpg" />
                    </div>
                    <div>
                        <img src="https://cdn.luxstay.com/home/event/event_13_1596604790.jpg" />
                    </div>
                    <div>
                        <img src="https://cdn.luxstay.com/home/event/event_1_1596604498.jpg" />
                    </div>
                    <div>
                        <img src="https://cdn.luxstay.com/home/event/event_5_1596604581.jpg" />
                    </div>
                </Slider>
            </div>
        </div>
    );
}