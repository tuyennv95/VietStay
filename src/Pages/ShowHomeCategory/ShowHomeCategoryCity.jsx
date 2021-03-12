import React from "react";
import { ThemeProvider } from '@material-ui/core/styles';
// import theme from './theme.js';
// import Container from '@material-ui/core/Container';
// import Box from '@material-ui/core/Box';
// import { makeStyles } from '@material-ui/core/styles';
import Loading from '../../Components/Load/Load'
import Header from '../../Components/Header/Header';
import Category from '../../Components/Category/Category';
import ShowRoom from '../../Components/ShowRoom/ShowRoom';
import Slider from '../../Components/Slider/Slider';
import Footer from '../../Components/Footer/Footer';
import { BASE_API } from '../../Constants/index';
import axios from 'axios';
import Load from '../../Components/Load/Load';
import { useSelector, useDispatch } from 'react-redux';

export default function ShowHomeCategoryCity(props) {
    const [roomInfor, setRoomInfor] = React.useState([]);
    const dispatch = useDispatch();
    // const [kq, setKq] = React.useState([])
    // const classes = useStyles();
    const search = useSelector(state => state.searchAdv);
    const slug = props.match.params.slug;


    React.useEffect(() => {
        if (slug == "gia-uu-dai") {
            axios.get(`http://localhost:1337/house-for-rents?_where[0][provinces_id]=01&_where[1][price_lte]=600000`)
                .then(response => {
                    setRoomInfor(response.data);
                }).catch((error) => {
                    console.log("lỗi");
                })
        }
        else if(slug === "gan-pho-co"){
            axios.get(`http://localhost:1337/house-for-rents?districts_id=002`)
                .then(response => {
                    setRoomInfor(response.data);
                }).catch((error) => {
                    console.log("lỗi");
                })
        }
        else if(slug === "cap-doi"){
            axios.get(`http://localhost:1337/house-for-rents?_where[0][provinces_id]=01&_where[1][people_number]=2&_where[2][bed_number]=1`)
                .then(response => {
                    setRoomInfor(response.data);
                }).catch((error) => {
                    console.log("lỗi");
                })
        }

    }, [])
    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, [])
    return (
        <div>
            {/* <ThemeProvider theme={theme}> */}

            <Header />
            <div style={{ marginTop: '120px' }}>
                <Slider />
                <ShowRoom data={roomInfor} />

            </div>
            <Footer />




            {/* </ThemeProvider > */}
        </div>
    )
}