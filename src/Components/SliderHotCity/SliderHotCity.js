import React from 'react';
import Slider from 'react-slick';
// import '../../../../node_modules/slick-carousel/slick/slick.css';
// import { makeStyles } from '@material-ui/core/styles';
// import '../../../../node_modules/slick-carousel/slick/slick-theme.css';
import './styles.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import axios from 'axios';
import {BASE_API} from '../../Constants/index';


export default function SliderHotCity() {


  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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
  const [roomHN, setRoomHN]= React.useState(0);
  const [roomHCM, setRoomHCM]= React.useState(0);
  const [roomVungTau, setRoomVungTau]= React.useState(0);
  const [roomDaNang, setRoomDaNang]= React.useState(0);
  const [roomDaLat, setRoomDaLat]= React.useState(0);
  const [roomNhaTrang, setRoomNhaTrang]= React.useState(0);
  React.useEffect(()=>{
    axios.get(`${BASE_API}/house-for-rents/count?provinces_id=01`)
    .then((response)=>{
      setRoomHN(response.data)
    })

    axios.get(`${BASE_API}/house-for-rents/count?provinces_id=79`)
    .then((response)=>{
      setRoomHCM(response.data)
    })
    axios.get(`${BASE_API}/house-for-rents/count?provinces_id=77`)
    .then((response)=>{
      setRoomVungTau(response.data)
    })
    axios.get(`${BASE_API}/house-for-rents/count?provinces_id=48`)
    .then((response)=>{
      setRoomDaNang(response.data)
    })
    axios.get(`${BASE_API}/house-for-rents/count?districts_id=672`)
    .then((response)=>{
      setRoomDaLat(response.data)
    })

    
  },[])
  return (
    <div className={'slider_hot_city'}>
      <div className={'slider_title'} >
        <h6 style={{ color: "#222222" }}>?????a ??i???m n???i b???t</h6>
        <p style={{ color: "#222222" }}>C??ng VietStay b???t ?????u chuy???n h??nh tr??nh chinh ph???c th??? gi???i c???a b???n

</p>
      </div>
      <div className={'slick_slider_list'}>
        <Slider {...settings} className={'slider_list'}>
          <div className={'slider_element'} >
            <img alt="" className={'slider_element_img'} src="image/hanoi_noibat.png" />
            <div className={'slider_element_title'}>
              <h6>H?? N???i</h6>
              <p>{roomHN} Ch??? ???</p>
            </div>
          </div>
          <div className={'slider_element'}>
            <img alt="" className={'slider_element_img'} src="image/hcm_noibat.png" />

            <div className={'slider_element_title'}>
              <h6>TP.H??? Ch?? Minh</h6>
              <p>{roomHCM} Ch??? ???</p>

            </div>
          </div>
          <div className={'slider_element'}>
            <img alt="" className={'slider_element_img'} src="image/vungtau_noibat.png" />

            <div className={'slider_element_title'}>
              <h6>V??ng T??u</h6>
              <p>{roomVungTau} Ch??? ???</p>

            </div>
          </div>
          <div className={'slider_element'}>
            <img alt="" className={'slider_element_img'} src="image/danang_noibat.png" />

            <div className={'slider_element_title'}>
              <h6>???? N???ng</h6>
              <p>{roomDaNang} Ch??? ???</p>

            </div>
          </div>
          <div className={'slider_element'}>
            <img alt="" className={'slider_element_img'} src="image/dalat_noibat.png" />

            <div className={'slider_element_title'}>
              <h6>???? L???t</h6>
              <p>{roomDaLat} Ch??? ???</p>

            </div>
          </div>
          <div className={'slider_element'}>
            <img alt="" className={'slider_element_img'} src="image/nhatrang_noibat.png" />
            <div className={'slider_element_title'}>
              <h6>Nha Trang</h6>
              <p>xxxx Ch??? ???</p>

            </div>
          </div>
          <div className={'slider_element'}>
            <img alt="" className={'slider_element_img'} src="image/quangninh_noibat.png" />
            <div className={'slider_element_title'}>
              <h6>Qu???ng Ninh</h6>
              <p>xxxx Ch??? ???</p>

            </div>
          </div>
          <div className={'slider_element'}>
            <img alt="" className={'slider_element_img'} src="image/hoian_noibat.png" />
            <div className={'slider_element_title'}>
              <h6>H???i An</h6>
              <p>xxxx Ch??? ???</p>

            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}