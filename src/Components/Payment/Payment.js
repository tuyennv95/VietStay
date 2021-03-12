import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import _ from "lodash/fp";
import { useForm } from "react-hook-form";
import { Box, Grid, Typography, Button, Divider } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { useHistory } from "react-router-dom";
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import './style.css';
import Header2 from 'Components/Header2/Header2';
import Footer from 'Components/Footer/Footer';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import queryString from 'query-string';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import ConfirmPay from '../ConfirmPay/ConfirmPay';
// --
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { BASE_API } from 'Constants/index';
// import {createBookingAPi } from '../../Services/Api';
import createBookingAPi from '../../Services/Api';
import Load from 'Components/Load/Load';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    my_booking_room_id: {
        width: '90%',
        maxWidth: '1440px',
        margin: '0 auto',
        // backgroundColor: '#d5d1d6',
        paddingTop: '80px'
    },
    my_booking_timeline: {
        minHeight: '200px',
        backgroundColor: '#FFFFFF',
        borderRadius: '10px',
        border: '1px solid #e2dede'
    },

    timeline_item: {
        textAlign: 'center',
        marginTop: '50px'
    },
    timeline_item_icon: {
        borderRadius: '50%',
        backgroundColor: '#28CA6E',
    },
    timeline_title: {
        color: '#222222',
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: 700,
        marginTop: '15px'
    },
    timeline_time: {
        color: '#222222',
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: 400,
    },
    timeline_line1: {
        position: 'relative',
        zIndex: 0,

        '&:after': {
            content: '""',
            position: 'absolute',
            width: '48%',
            borderBottom: '4px solid #28CA6E',
            top: '12%',
            right: 0
        }
    },
    timeline_line2: {
        position: 'relative',
        zIndex: 0,

        '&:after': {
            content: '""',
            position: 'absolute',
            width: '48%',
            borderBottom: '4px solid #28CA6E',
            top: '12%',
            left: 0,
        }
    },
    timeline_button_back_booking: {
        width: '90%',
        backgroundColor: '#28CA6E',
        marginTop: '15px'
    },
    timeline_back: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    },
    my_booking_detail_title: {
        fontSize: '18px',
        lineHeight: '18px',
        color: '#999999',
        fontWeight: 500,
        marginTop: '5px'
    },
    my_booking_number_guest: {
        backgroundColor: '#FFFFFF',
        padding: '15px 20px',
        borderRadius: '5px',
        marginTop: '20px',

    },
    my_booking_detail_total: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        textAlign: 'end',
        borderRadius: '10px',
        border: '1px solid #e2dede',
        marginTop: '10px',
        backgroundColor: '#FFFFFF',
    },
    my_booking_detail_infor: {
        display: 'flex',
        justifyContent: 'space-around',
        borderRadius: '10px',
        border: '1px solid #e2dede',
        backgroundColor: '#FFFFFF',
        marginTop: '15px'

    },
    my_booking_detail_infor_check_in_out: {
        width: '45%',
        borderRadius: '5px',
        border: '1px solid #e2dede',
        margin: '10px',
        marginTop: '30px',
        marginBottom: '30px',
    },
    check_in_out_title: {
        fontSize: '16px',
        lineHeight: '24px',
        color: '#999999',
        fontWeight: 500,
        margin: '15px',
    },
    check_in_out_date: {
        fontSize: '24px',
        lineHeight: '36px',
        color: '#222222',
        fontWeight: 700,
        margin: '15px',
    },
    my_booking_detail_room: {
        borderRadius: '10px',
        border: '1px solid #e2dede',
        backgroundColor: '#FFFFFF',
        marginTop: '10px',
        marginBottom: '15px',
        paddingBottom: '20px',

    },
    my_booking_detail_room_book: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%',

    },
    my_booking_text_house: {
        width: '50%',
    },
    my_booking_img_house: {
        width: '40%',
    },
    my_booking_detail_name: {
        width: '100%',
        fontSize: '14px',
        lineHeight: '24px',
        fontWeight: 700,
        color: '#222222',
        margin: '15px'
    },
    my_booking_room_icon_location: {
        borderRadius: '100%',
        backgroundColor: '#CCCCCC',
        color: '#FFFFFF',
        marginRight: '5px'
    },
    my_booking_room_location: {
        fontSize: '12px',
        lineHeight: '21px',
        fontWeight: 500,
        color: '#222222'
    },
    my_booking_detail_room_master: {
        borderRadius: '10px',
        border: '1px solid #e2dede',
        backgroundColor: '#FFFFFF',
        marginTop: '5px'
    },
    my_booking_name_room_master: {
        fontSize: '20px',
        lineHeight: '30px',
        color: '#222222',
        fontWeight: 700,
        margin: '15px',
    },
    name_room_master_button: {
        margin: '15px'
    },
    contact_room: {
        borderRadius: '10px',
        border: '1px solid #e2dede',
        backgroundColor: '#FFFFFF',
        marginTop: '15px',
    },
    contact_room_title: {
        fontSize: '16px',
        lineHeight: '24px',
        fontWeight: 500,
        color: '#222222',
        margin: '15px'
    },
    info_guest_book: {
        fontSize: '16px',
        fontWeight: 700,
        color: '#0a0909',
        display: 'block',
        // paddingTop: '25px'
    },
    input_guest_book: {
        padding: '10px 20px',
        width: '100%',
        borderRadius: '5px',
        backgroundColor: '#d3c9c9',
        border: 'none',
        outline: 'none',
        marginTop: '20px'
    },
    detail_day_guest: {
        width: '90%',
        margin: '0 auto',
        marginTop: '20px'
    },
    detail_price_house_book: {
        width: '90%',
        margin: '0 auto',
    },
    text_price_house_book: {
        fontSize: '14px',

    },





}));
export default function Payment(props) {
    const classes = useStyles();
    const history = useHistory();
    const infoBooking = useSelector((state) => state.booking);
    const infoUserLogin = useSelector((state) => state.login);


    const [open, setOpen] = React.useState(false);

    const [room, setRoom] = React.useState();
    const [time, setTime] = React.useState(300);
    const [openBill, setOpenBill] = React.useState(false);
    const [dataBill, setDataBill] = React.useState();
    const [inforUser, setInforUser] = React.useState();
    const [load, setLoad] = React.useState(false);
    const { register, handleSubmit, watch, errors } = useForm();

    React.useEffect(() => {
        setInforUser(infoUserLogin)
    }, [])
    React.useEffect(() => {
        const setInTime = setInterval(() => {
            setTime((time) => time - 1);
        }, 1000)
        return () => {
            clearInterval(setInTime);
        }
    }, [])

    const formatTime = () => {
        const getSeconds = `0${(time % 60)}`.slice(-2)
        const ss = `${Math.floor(time / 60)}`
        const getss = `0${ss % 60}`.slice(-2)
        const getHours = `0${Math.floor(time / 3600)}`.slice(-2)

        return `${getHours} : ${getss} : ${getSeconds}`
    }
    if (time == 0) {
        history.push("")
    }



    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const timeBookingSuccess = moment().format('DD-MM-YYYY');


    const param = props?.location?.search;
    const keyParam = queryString.parse(param);

    const numberAdults = Number(keyParam?.adults);
    const numberChildren = Number(keyParam?.children || 0);
    const checkIn = keyParam?.checkIn;
    const checkOut = keyParam?.checkOut;
    const idRoom = keyParam?.id;
    let a = moment(checkIn, 'DD-MM-YYYY')
    let b = moment(checkOut, 'DD-MM-YYYY')
    const numberDayBooking = b.diff(a, 'days');
    // console.log(a,b);
    React.useEffect(() => {
        axios.get(`http://localhost:1337/house-for-rents/${idRoom}`)
            .then(response => {
                setRoom(response.data);
            }).catch((error) => {
                console.log("lỗi");
            })
    }, [idRoom])
    const [district, setDistrict] = React.useState();
    const [province, setProvince] = React.useState();
    React.useEffect(() => {
       async function GetDistrict(){
          const getList = await axios.get(`http://localhost:1337/districts?district_id=${room?.districts_id}`)
          setDistrict(getList?.data[0]?.district_name)
       }
       GetDistrict();

       async function GetProvince(){
          const getList2 = await axios.get(`http://localhost:1337/provinces?province_id=${room?.provinces_id}`)
          setProvince(getList2?.data[0]?.province_name)
       }
       GetProvince();
    })
    const adres = `${room?.address_ward}, ${district}, ${province}`;
    const imgUrl = room?.img_avatar_house.url;

    const price1Dem = room?.price;
    function tinhPhi() {
        if (room) {
            if ((numberAdults + numberChildren) <= room?.people_number) {
                return 0;
            }
            else {
                const phi = ((numberAdults + numberChildren) - room?.people_number) * room?.price_1_poeple_exceed;
                return phi;

            }
        }
    }

    const dispatch = useDispatch();
    function huyBooking() {
        history.push("/");
        dispatch({
            type: "HUY_BOOKING"
        })
    }
    // React.useEffect(() => {
    //     if (infoBooking?.data?.idRoom != idRoom
    //         || infoBooking?.data?.startDate != checkIn
    //         || infoBooking?.data?.endDate != checkOut

    //     ) {
    //         history.push("/404");
    //     }
    // }, [])

    const onSubmit = data => {
        setOpenBill(true);
        setDataBill(data);

    };
    function handleCloseBill() {
        setOpenBill(false);

    }
    const total_cost = price1Dem * numberDayBooking + tinhPhi();
    function handleSuccessBill() {
        setOpenBill(false);
        dispatch({
            type: "HUY_BOOKING",
        });
        axios.post(`${BASE_API}/bills`, {
            customer_name: dataBill.name,
            email: dataBill.email,
            phoneNumber: dataBill.phoneNumber,
            userId: inforUser.id,
            time_booking: new Date(),
            house_type: room.house_type,
            checkIn: moment(checkIn, 'DD-MM-YYYY').toDate(),
            checkOut: moment(checkOut, 'DD-MM-YYYY').toDate(),
            number_people: numberAdults + numberChildren,
            house_name: room.house_name,
            houseId: room.id,
            price: room.price,
            total_cost: total_cost,
            statusPayment: 1,
        })
            .then((response) => {
                
                const idBill = response.data.id;
                setLoad(true);
                setTimeout(() =>{
                setLoad(false);
                },3000);
                setTimeout(() =>{
                    history.push(`/bill/${idBill}`);
                },3100)
               

            })
            .catch((error) => console.log(error))




    }
    // console.log(room);

    return (
        <>
            {/* {(infoBooking && ( */}
            <div className="payment" style={{ backgroundColor: '#e1dce2' }}>
                <Header2 />
                <div className={classes.my_booking_room_id}>
                    <Box className={classes.my_booking_timeline}>
                        <Grid container>
                            <Grid item md={8} sm={12} xs={12}>
                                <Grid container >
                                    <Grid item md={6} xs={6} ms={6} className={`${classes.timeline_item} ${classes.timeline_line1}`}>
                                        <DoneIcon className={classes.timeline_item_icon} />

                                        <Typography className={classes.timeline_title}>
                                            Tạo đơn hàng thành công
                                </Typography>

                                        <Typography className={classes.timeline_time}>
                                            {timeBookingSuccess}


                                        </Typography>

                                    </Grid>
                                    <Grid item md={6} xs={6} ms={6} className={`${classes.timeline_item} ${classes.timeline_line2}`}>
                                        <DoneIcon className={classes.timeline_item_icon} />
                                        <Typography className={classes.timeline_title}>
                                            Hết hạn thanh toán
                             </Typography>
                                        <Typography className={classes.timeline_time}>
                                            {/* 00:{`0${minutes}`.slice(-2)}:{`0${seconds}`.slice(-2)} */}
                                            {formatTime(time)}
                                        </Typography>
                                    </Grid>
                                </Grid>

                            </Grid>
                            <Grid item md={4} sm={12} xs={12} className={classes.timeline_back}>
                                <Button variant="contained" className={classes.timeline_button_back_booking} onClick={huyBooking}>
                                    Hủy
                        </Button>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box className={classes.my_booking_detail}>
                        <Grid container spacing={2} style={{ marginTop: '15px' }}>
                            <Grid item md={8} ms={12} xs={12}>
                                {/* ------------------------------------------------- */}
                                <Typography component="h2" className={classes.my_booking_detail_title}>THÔNG TIN ĐẶT CHỖ</Typography>
                                <Box className={classes.my_booking_number_guest}>
                                    {numberAdults + numberChildren} khách
                        </Box>
                                <Box className={classes.my_booking_detail_infor}>
                                    <Box className={classes.my_booking_detail_infor_check_in_out}>
                                        <Divider orientation='horizontal' variant='middle' style={{ width: '45%', marginTop: '15px', border: '2px solid #28CA6E' }} />
                                        <Typography className={classes.check_in_out_title}>Nhận phòng</Typography>
                                        <Typography className={classes.check_in_out_date}>{checkIn}</Typography>
                                    </Box>
                                    <Box className={classes.my_booking_detail_infor_check_in_out}>
                                        <Divider orientation='horizontal' variant='middle' style={{ width: '45%', marginTop: '15px', border: '2px solid #FBDB91' }} />
                                        <Typography className={classes.check_in_out_title}>Trả phòng</Typography>
                                        <Typography className={classes.check_in_out_date}>{checkOut}</Typography>

                                    </Box>

                                </Box>
                                <Typography className={classes.trachnhiem}>
                                    *Khách hàng chịu mọi trách nhiệm thiệt hại về tài sản đã gây ra tại chỗ ở trong thời gian lưu trú.
                        </Typography>
                                {/* ------------------------------------------------- */}
                                <Typography component="h2" className={classes.my_booking_detail_title}>THÔNG TIN CỦA BẠN</Typography>
                                <div className="form_payment">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <label className={classes.info_guest_book}><span style={{ color: 'red' }}>*</span>Họ và tên khách hàng</label>
                                        <input
                                            className={classes.input_guest_book}

                                            name="name"
                                            ref={register({
                                                required: true,
                                                maxLength: 30,
                                                pattern: /[\w]{2,}( [\w]{2,})+/i
                                            })}
                                        />
                                        {_.get("name.type", errors) === "required" && (
                                            <p>This field is required</p>
                                        )}
                                        {_.get("name.type", errors) === "maxLength" && (
                                            <p>Name cannot exceed 20 characters</p>
                                        )}
                                        {_.get("name.type", errors) === "pattern" && (
                                            <p>Alphabetical characters only</p>
                                        )}
                                        <label className={classes.info_guest_book}><span style={{ color: 'red' }}>*</span>Số điện thoại</label>
                                        <input
                                            className={classes.input_guest_book}
                                            name="phoneNumber"
                                            type="tel"
                                            ref={register({
                                                required: true,
                                                minLength: 10,
                                                maxLength: 10,
                                                pattern: /(09|01[2|6|8|9])+([0-9]{8})\b/g
                                            })}
                                        />
                                        {_.get("phoneNumber.type", errors) === "required" && (
                                            <p>This field is required</p>
                                        )}
                                        {_.get("phoneNumber.type", errors) === "maxLength" || _.get("phoneNumber.type", errors) === "minLength" && (
                                            <p>Phone number can only have 10 numbers </p>
                                        )}
                                        {_.get("phoneNumber.type", errors) === "pattern" && (
                                            <p>Only numeric characters
                                            </p>
                                        )}
                                        <label className={classes.info_guest_book}><span style={{ color: 'red' }}>*</span>Email</label>
                                        <input
                                            className={classes.input_guest_book}

                                            name="email"
                                            ref={register({
                                                required: true,
                                                pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                                            })}
                                        />
                                        {_.get("email.type", errors) === "required" && (
                                            <p>This field is required</p>
                                        )}
                                        {_.get("email.type", errors) === "pattern" && (
                                            <p>Illegal
                                            </p>
                                        )}
                                        <input type="submit" />
                                        {/* <Button type="submit"> */}
                                        {/* <CircularProgress size={20}/> */}
                                        {/* Thanh Toán</Button> */}
                                    </form>
                                </div>
                            </Grid>
                            <Grid item md={4} ms={12} xs={12}>
                                <Typography component="h2" className={classes.my_booking_detail_title}>CHI TIẾT ĐẶT PHÒNG</Typography>
                                {(room && (
                                    <Box className={classes.my_booking_detail_room}>
                                        <div className={classes.my_booking_detail_room_book}>
                                            <div className={classes.my_booking_text_house}>
                                                <Typography className={classes.my_booking_detail_name}>{room.house_name}</Typography>
                                                <div style={{ display: 'flex', marginLeft: '15px', marginBottom: '15px' }}>
                                                    <LocationOnIcon className={classes.my_booking_room_icon_location} />
                                                    <Typography className={classes.my_booking_room_location}>{adres}    </Typography>
                                                </div>
                                            </div>
                                            <div className={classes.my_booking_img_house}>
                                                <img style={{ width: '100%', height: 'auto', paddingTop: '20px' }} src={`http://localhost:1337${imgUrl}`} alt=""></img>

                                            </div>
                                        </div>
                                        <Divider component="hr" style={{ width: '85%', margin: '0 auto' }} />
                                        <div className={classes.detail_day_guest}>
                                            <i className="fa fa-calendar" aria-hidden="true"></i>
                                            <Typography style={{ fontSize: '14px', display: 'inline' }}>
                                                <span style={{ fontWeight: 700 }}>{numberDayBooking} đêm · </span>
                                                {checkIn} - {checkOut}
                                            </Typography> <br />
                                            <br />
                                            <i className="fa fa-user-o" aria-hidden="true"></i>
                                            <Typography style={{ fontSize: '14px', display: 'inline' }}>
                                                <span style={{ fontWeight: 700 }}>{numberAdults} người lớn {numberChildren !== 0 ? `,${numberChildren} trẻ em` : ''}</span>

                                            </Typography>

                                        </div>
                                        <Divider component="hr" style={{ width: '85%', margin: '0 auto', marginTop: '20px' }} />
                                        <div className={classes.detail_price_house_book}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '20px' }}>
                                                <Typography className={classes.text_price_house_book}> Giá thuê {numberDayBooking} đêm</Typography>
                                                <Typography className={classes.text_price_house_book}>
                                                    {new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(price1Dem * numberDayBooking)}
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
                                                    {new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(price1Dem * numberDayBooking + tinhPhi())}

                                                </Typography>
                                            </div>
                                        </div>
                                    </Box>
                                ) || null)}
                                {/* ------------------------------- */}
                                <Typography component="h2" className={classes.my_booking_detail_title}>THÔNG TIN CHỦ NHÀ</Typography>
                                <Box className={classes.my_booking_detail_room_master}>
                                    <Typography className={classes.my_booking_name_room_master}>Homestay Stayandfun</Typography>
                                    <Button variant="contained" className={classes.name_room_master_button}>
                                        Thông tin chủ nhà
                            </Button>

                                </Box>


                            </Grid>
                        </Grid>
                    </Box>
                    <Box >
                        <Typography component="h2" className={classes.my_booking_detail_title}>LIÊN HỆ CHÚNG TÔI</Typography>
                        <Grid container>
                            <Grid item md={8} sm={12} xs={12} className={classes.contact_room}>
                                <Typography className={classes.contact_room_title}>Khi liên hệ Luxstay, bạn vui lòng chuẩn bị sẵn Mã đặt chỗ để việc hỗ trợ diễn ra thuận lợi.</Typography>
                                <Button variant="contained" style={{ margin: '15px' }}>
                                    Liên hệ V-Stay
                    </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
                <Footer />
                {(room && (
                    <div className={classes.bill}>
                        <div>

                            <Dialog
                                open={openBill}
                                onClose={handleCloseBill}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                            >
                                <DialogTitle id="alert-dialog-title">{"Xác nhận đặt phòng."}</DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        Xác nhận đơn đặt phòng:<br />
                                    - HomeName: {room.house_name} <br />
                                    - Giá: {new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(price1Dem * numberDayBooking + tinhPhi())} <br />
                                    - Số lượng: {numberAdults + numberChildren} khách <br />
                                    - CheckIn-CheckOut: {checkIn}-{checkOut}

                                    </DialogContentText>
                                    
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleCloseBill} color="primary">
                                        Disagree
         </Button>
                                    <Button onClick={handleSuccessBill} color="primary" autoFocus>
                                        Agree
         </Button>
                                </DialogActions>
                            </Dialog>
                        </div>
                    </div>
                ) || null)}
            </div>
            )
            {load === true ? <Load/> : null}
            {/* || null)} */}
        </>
    )
}
