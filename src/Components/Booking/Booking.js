import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import RangeDateBlock from '../../Components/RangeDateBlock/RangeDateBlock';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { Box, Divider } from '@material-ui/core';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import queryString from "query-string";
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import {useHistory} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    cart: {
        borderWidth: "1px",
        border: "solid",
        borderColor: "#E9E9E9",
        textAlign: "center",
        width: '395px'
    },
    selectDate: {
        width: '90%', margin: 'auto', border: '1px solid gray',
        position: 'relative',
        height: '45px',
        marginBot: '20px',
        display: 'flex',
        justifyContent: 'space-around',
        '&:focus-within': {
            '& $tableSelectDate': {
                display: 'inline-block',
            }

        }
    },
    tableSelectDate: {
        position: 'absolute',
        top: '50px',
        left: '30%',
        transform: 'translateX(-50%)',
        zIndex: 999,
        display: 'none',
        height: '500px',
    },
    selectGuest: {
        width: '90%', margin: 'auto', border: '1px solid gray',
        position: 'relative',
        height: '45px',
        margin: '20px 0',
        textAlign: 'left',

        '&:focus-within': {
            '& $tableSelectGuest': {
                display: 'inline-block',
            }


        }

    },
    tableSelectGuest: {
        backgroundColor: '#FFFFFF',
        border: '1px solid gray',
        borderRadius: '5px',
        position: 'absolute',
        top: '50px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 999,
        display: 'none',
        height: '300px',
        width: '300px',
    },
    select_slot: {
        position: 'absolute',
        width: '320px',
        height: '230px',
        backgroundColor: '#FFFFFF',
        top: '140%',
        left: 0,

        display: 'none',
        borderRadius: '5px',
        border: '1px solid #c6c9d1',
    },
    select_slot_object: {
        width: '90%',
        height: '25%',
        paddingTop: '25px',

        display: 'flex',
        margin: 'auto',
        justifyContent: 'space-between'

    },
    slot_object_amount: {
        width: '40%',
        display: 'flex',
        justifyContent: 'space-between',
        // paddingBottom: '5px',

    },
    button_cancel_check: {
        width: '100%',
        display: 'flex',
        textAlign: 'right',
        justifyContent: 'flex-end',
        marginBottom: '5px',

    },
    button_cancel: {
        marginRight: '15px',
        paddingTop: '2px',

    },
    button_check: {
        padding: '3px 10px',
        // backgroundColor: '#f77307',
        borderRadius: '30px',


    },
    detail_price_house_book: {
        width: '90%',
        margin: '0 auto',
    },
    text_price_house_book: {
        fontSize: '14px',

    },



}));

function Booking(props) {
    const classes = useStyles()
    const [adults, setAdults] = React.useState(1);
    const [children, setChildren] = React.useState(0);
    const [infant, setInfant] = React.useState(0);
    const [startDate, setStartDate] = React.useState();
    const [endDate, setEndDate] = React.useState();
    // const [roomBook,setRoomBook] = React.useState({
    //     adults: adults,
    //     children:children,
    //     infant:infant,
    //     startDate: null,
    //     endDate: null,

    // })
    const [hidden, setHidden] = React.useState(false);
    const [room, setRoom] = React.useState();
    const [tb, setTb] = React.useState(false);
    const id = props.roomId;
    const addAdults = () => {
        setAdults(adults + 1);
        
        
    };
    const removeAdults = () => {
        if (adults > 1) {
            setAdults(adults - 1);
        }
    };
    const addChildren = () => {
        setChildren(children + 1)
    };
    const removeChildren = () => {
        if (children > 0) {
            setChildren(children - 1);
        }
    };
    const addInfant = () => {
        setInfant(infant + 1)
    };
    const removeInfant = () => {
        if (infant > 0) {
            setInfant(infant - 1);
        }
    };

    function huyPeople() {
        setChildren(0);
        setInfant(0);
        setAdults(1);
    }

    const [scrollPosition, setScrollPosition] = React.useState(false);
    const handleScroll = () => {
        const position = window.pageYOffset;

        if (position >= 520) {
            setScrollPosition(!scrollPosition)
        }
        else if (position < 520) {
            setScrollPosition(false)
        }
    };
    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    React.useEffect(() => {
        axios.get(`http://localhost:1337/house-for-rents/${id}`)
            .then(response => {
                setRoom(response.data);
            }).catch((error) => {
                console.log("lỗi");
            })
    }, [])
    let dataBooking = useSelector((state) => state.search)
   
    React.useEffect(() => {
        
        // setAdults(()=>{
        //     if((dataBooking?.adults + dataBooking?.children) <= room?.people_max){
        //         return dataBooking?.adults;
        //     }
        // }) 
        // setChildren(()=>{
        //     if((dataBooking?.adults + dataBooking?.children) <= room?.people_max){
        //         return dataBooking?.children;
        //     }
        // }) 
            // setAdults(dataBooking?.adults, dataBooking?.children, room?.people_max);
            // setChildren(dataBooking?.adults, dataBooking?.children, room?.people_max);
            // setChildren(dataBooking.children);
        
        // else{
            setAdults(dataBooking.adults);
            setChildren(dataBooking.children);
        // }
        // else if( dataBooking?.adults > room?.people_max || dataBooking?.children > room?.people_max){
        //     setAdults(room.people_max - 1);
        //     setChildren(1);

        // }
            
        
         setInfant(dataBooking.infant);
        setStartDate(dataBooking.startDate);
        setEndDate(dataBooking.endDate);
    }, [dataBooking ])

    let a = moment(startDate, 'DD-MM-YYYY')
    let b = moment(endDate, 'DD-MM-YYYY')
    const numberDayBooking = b.diff(a, 'days');
        // console.log(a,b)
    // const calPrice = numberDayBooking * room.price;

    function calculate() {
        if (numberDayBooking) {
            return numberDayBooking * room.price;
        }
        else
            return room.price;
    }
    function tinhPhi(){
        if((adults + children) <= room.people_number){
            return 0;
        }
        else{
            const phi = ((adults + children) - room.people_number)* room.price_1_poeple_exceed;
            return phi;
            
        }
    }
    const dispatch = useDispatch();
    const history = useHistory();
         // console.log("🚀 ~ file: Booking.js ~ line 247 ~ Booking ~ idUser", idUser)
    const idUser = useSelector((state) => state.login.id);
    function setBookingSuccess(){
        dispatch({
            type: "BOOKING",
            payload:{
                idRoom: id,
                idUser: idUser,
                startDate: startDate,
                endDate: endDate,
                numberDayBooking: numberDayBooking,
                adults: adults,
                children: children,
                price:  calculate(),
                phi: tinhPhi(),
            }
        })
        history.push(`/pay?id=${id}&checkIn=${startDate}&checkOut=${endDate}${adults ? `&adults=${adults}` : ''}${children ? `&children=${children}` : ''}`)
    }
    // console.log(room)
    
    return (
        <>
            { (room && (
                <div className={classes.cart} style={{
                    position: `${scrollPosition === true ? 'fixed' : ''}`,
                    top: `${scrollPosition === true ? '100px' : ''}`

                }} >
                    <div style={{ display: 'flex', padding: '20px 20px' }}>
                        <h1>{new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(calculate())}</h1>
                        <p style={{ marginLeft: 5, alignSelf: 'center', }}>/{numberDayBooking ? numberDayBooking : null}đêm</p>
                        {/* <p style={{ marginLeft: 5, alignSelf: 'center', textDecorationLine: "line-through" }}>1,000,000₫</p> */}
                    </div>
                    <Button className={classes.selectDate} >
                        <Typography >
                            {startDate || 'dd/mm/yy'}
                        </Typography>
                        <Typography >
                            <ArrowRightAltIcon fontSize="large" />
                        </Typography>
                        <Typography>
                            {endDate || 'dd/mm/yy'}

                        </Typography>

                        {/* <div className={classes.tableSelectDate}>
                    <RangeDateBlock />
                </div> */}
                    </Button>
                    <Button className={classes.selectGuest} >
                        <Typography >
                            {adults + children}
                        </Typography>
                        <div className={classes.tableSelectGuest}>
                            {/* <Box className={classes.select_slot}> */}
                            <Box className={classes.select_slot_object}>
                                <Typography>Người lớn</Typography>
                                <Box className={classes.slot_object_amount}>
                                    <RemoveCircleOutlineIcon fontSize="large" color="action" onClick={removeAdults}  />
                                    <Typography variant="h5">
                                        {adults}
                                    </Typography>
                                    <AddCircleOutlineIcon fontSize="large" color={adults + children >= room?.people_max ? 'disabled' : 'action'} onClick={addAdults} style={{pointerEvents: `${adults + children >= room?.people_max ? 'none' : 'auto'}`  }} />

                                </Box>
                            </Box>
                            <Box className={classes.select_slot_object}>
                                <Typography >
                                    Trẻ em <br />

                                </Typography>
                                <Box className={classes.slot_object_amount}>
                                    <RemoveCircleOutlineIcon fontSize="large" color="action" onClick={removeChildren} />
                                    <Typography variant="h5">
                                        {children}
                                    </Typography>
                                    <AddCircleOutlineIcon fontSize="large" color={adults + children >= room?.people_max ? 'disabled' : 'action'} onClick={addChildren} style={{pointerEvents: `${adults + children >= room?.people_max ? 'none' : 'auto'}`  }} />

                                </Box>
                            </Box>
                            <Box className={classes.select_slot_object}>
                                <Typography >
                                    Trẻ sơ sinh <br />

                                </Typography>
                                <Box className={classes.slot_object_amount}>
                                    <RemoveCircleOutlineIcon fontSize="large" color="action" onClick={removeInfant} />
                                    <Typography variant="h5">
                                        {infant}
                                    </Typography>
                                    <AddCircleOutlineIcon fontSize="large" color="action" onClick={addInfant} />

                                </Box>
                            </Box>
                            <Box className={classes.select_slot_object}>
                                <div className={classes.button_cancel_check}>
                                    <Typography color="textSecondary" className={classes.button_cancel} onClick={huyPeople}>
                                        Hủy
                                        </Typography>
                                    <Typography color="textSecondary" className={classes.button_check}>
                                        Áp dụng
                                            </Typography>
                                </div>

                            </Box>
                            {/* </Box> */}
                        </div>
                    </Button>
                    
                    {(numberDayBooking && (
                    <>
                    <Divider component="hr" style={{ width: '85%', margin: '0 auto', marginTop: '20px' }} />
                    <div className={classes.detail_price_house_book}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '20px' }}>
                            <Typography className={classes.text_price_house_book}> Giá thuê {numberDayBooking} đêm</Typography>
                            <Typography className={classes.text_price_house_book}>
                            {new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(calculate())}
                            </Typography>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '20px' }}>
                            <Typography className={classes.text_price_house_book}>Phí</Typography>
                            <Typography className={classes.text_price_house_book}> 
                            {new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(tinhPhi())}
                            
                            </Typography>
                        </div>


                        <Divider component="hr" style={{ width: '100%', margin: '0 auto', marginTop: '20px' }} />
                        <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '20px' }}>
                            <Typography className={classes.text_price_house_book} style={{ fontWeight: 700 }}>Tổng tiền</Typography>
                            <Typography className={classes.text_price_house_book} style={{ fontWeight: 700 }}>
                            {new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(calculate() + tinhPhi() )}

                            </Typography>
                        </div>
                    </div>
                    <div style={{ textAlignLast: "center", marginTop: '20px' }}>
                        <Button variant="contained" size="large" color="secondary" style={{ width: '85%', margin: '0 auto' }} onClick={setBookingSuccess}>
                                Đặt Ngay
                        </Button>

                    </div>
                    </>
                    ) || null )}




                </div>
            ) || null)}
        </>
    )
}


export default Booking