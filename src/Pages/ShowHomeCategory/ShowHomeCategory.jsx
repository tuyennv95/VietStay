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
import {useSelector,useDispatch} from 'react-redux';

export default function ShowHome(props) {
    const [roomInfor, setRoomInfor] = React.useState([]);
    const dispatch = useDispatch();
    
    const search = useSelector(state => state.searchAdv);
const id = props.match.params.id;



    React.useEffect(() => {
        
        dispatch({
            type: "DEL_SEARCH",
        })
        axios.get(`http://localhost:1337/house-for-rents?${id.length ===2 ? 'provinces_id' : 'districts_id'}=${id}&${search.checkedChungCu === true ? 'id_typehouse=600f0b2a3f60ed53ac6d94ef' : ''}&${search.checkedBietThu === true ? 'id_typehouse=600fde2523d29a1b5ac97272' : ''}&${search.checkedHomeStay === true ? 'id_typehouse=600f12293f60ed53ac6d94f0' : ''}&${search.checkedNhaRieng === true ? 'id_typehouse=600fddcc23d29a1b5ac97271' : ''}&${search.checkedNhaNghi ===true ? 'id_typehouse=60102d87ada05dde5ecc034d' : ''}&${search.checkedKhac === true ? 'id_typehouse_nin=600f0b2a3f60ed53ac6d94ef&id_typehouse_nin=600f12293f60ed53ac6d94f0&id_typehouse_nin=600f12293f60ed53ac6d94f0&id_typehouse_nin=600fde2523d29a1b5ac97272&id_typehouse_nin=60102d87ada05dde5ecc034d&id_typehouse_nin=600fddcc23d29a1b5ac97271' : ''}&_where[0][price_gte]=${search.valuePriceMin}&_where[0][price_lte]=${search.valuePriceMax}&number_of_bedroom_gte=${search.numberRoom}`)
            .then(response => {
                setRoomInfor(response.data);
            }).catch((error) => {
                console.log("lỗi");
            })
    }, [search, id.length])
    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, [])
    return (
        <div>
            {/* <ThemeProvider theme={theme}> */}
            
                        <Header />
                        <Category />
                        <ShowRoom data={roomInfor} />
                        <Footer />
                    
                

            {/* </ThemeProvider > */}
        </div>
    )
}