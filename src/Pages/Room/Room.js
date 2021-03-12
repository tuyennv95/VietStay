import React from 'react'
import SlideRoom from '../../Components/SliderRoom/SliderRoom';
import Header2 from '../../Components/Header2/Header2';
import Breadcrumb from '../../Components/Breadcrumb/Breadcrumb';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Button } from '@material-ui/core';
import InfoRoom from '../../Components/InfoRoom/InfoRoom';
import Utilities from '../../Components/Utiliti/Utilities'
import PriceTable from '../../Components/PriceTable/PriceTable'
import Availability from '../../Components/Availabitil/Availability'
import Feedback from '../../Components/FeedBack/Feedback'
import Booking from '../../Components/Booking/Booking';
import RangeDate from 'Components/RangeDate/RangeDate';
import TimeInOut from 'Components/TimeInOut/TimeInOut';
import Map from '../../Components/Map/Map';
import ShowRoom from '../../Components/ShowRoom/ShowRoom';
import Footer from 'Components/Footer/Footer';
import { roomInfoIpi } from 'Services/Api';
import axios from 'axios';
// import RangeDate from '../../Components/RangeDate/RangeDate';

const useStyles = makeStyles((theme) => ({
    button: {
        backgroundColor: '#fff',
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    rangeDate: {
        paddingTop: '20px',
    }
}));

// function PositionIcon(props) {
//     return (
//         <SvgIcon style={{ marginRight: 5 }}  {...props}>
//             <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
//         </SvgIcon>
//     );
// }

function room(props) {
    const [room, setRoom] = React.useState();
    const classes = useStyles();
    const id = props.match.params.id;
    React.useEffect(() => {
         axios.get(`http://localhost:1337/house-for-rents/${id}`)
            .then(response => {
                setRoom(response.data);
            }).catch((error) => {
                console.log("lỗi");
            })
        },[])
    const hihi = document.cookie;
    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, [])
    return (
        <div>
            <Header2 />
            <SlideRoom data={room} />
            <Container >
                <Grid container spacing={3} style={{ marginTop: 10 }}>
                    <Grid item xs={8}>
                        <Breadcrumb roomId={id} />
                        <InfoRoom roomId={id} />
                        <Utilities roomId={id}/>
                        <Availability />

                        <PriceTable roomId={id} />
                        <div className={classes.rangeDate}>
                            <RangeDate roomId={id} />
                        </div>
                        <Feedback roomId={id}/>

                        <TimeInOut />
                        {/* <Map /> */}
                        <ShowRoom />
                    </Grid>
                    <Grid item xs={4}>

                        <Booking roomId={id} />
                    </Grid>
                </Grid>
                <Footer />

            </Container>
        </div >
    )
}


export default room