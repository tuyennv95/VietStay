import React from 'react'
import Slider from "react-slick";
import { roomInfoIpi } from 'Services/Api';
import './styles.css'
import {BASE_URL} from '../../Constants/index';


function SlideRoom({ data = [] }) {
    const [room, setRoom] = React.useState();
    const img = data.img_house;
    // const url = process.env.REACT_APP_BASE_API;
    // console.log("🚀 ~ file: SliderRoom.js ~ line 10 ~ SlideRoom ~ data.img_house", url )

    // setRoom(img);
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
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
        <div style={{ marginTop: 83 }}>
            <div className={'slick_slider_list haha'}>
                <Slider {...settings}>

                    {data?.img_house
                        &&
                        (
                            img.map((room) => {
                                return (
                                    <div key={room._id} style={{ width: `${room.width}` }}>
                                        <div className={'slider_element hihi'}>
                                            <img alt="" className={'slider_element_img'} src={`${BASE_URL}${room.url} `} />
                                        </div>
                                    </div>
                                )
                            }))}


                </Slider>
            </div>
        </div>
    );
}



export default SlideRoom