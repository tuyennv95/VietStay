import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Typography, Button, Divider } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Header2 from 'Components/Header2/Header2';
import Footer from 'Components/Footer/Footer';
import axios from 'axios';
import { BASE_API } from '../../Constants/index';
import moment from 'moment';
import { Link } from 'react-router-dom';
import slug from 'slug';


const useStyles = makeStyles({
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
        fontSize: '12px',
        lineHeight: '18px',
        color: '#999999',
        fontWeight: 500,
        marginTop: '5px'
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
        marginBottom: '15px'

    },
    my_booking_detail_name: {
        width: '65%',
        fontSize: '16px',
        lineHeight: '24px',
        fontWeight: 700,
        color: '#222222',
        margin: '15px'
    },
    my_booking_room_icon_location: {
        borderRadius: '50%',
        backgroundColor: '#CCCCCC',
        color: '#FFFFFF',
        marginRight: '5px'
    },
    my_booking_room_location: {
        fontSize: '14px',
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
    }



});
export default function MyBookingRoomId(props) {
    const classes = useStyles();
    const [data, setData] = React.useState();
    const id = props.match.params.id;
    React.useEffect(() => {
        axios.get(`${BASE_API}/bills/${id}`)
            .then(response => {
                // console.log(response);
                setData(response.data)
            })
            .catch(err => {
                console.log("loix")
            })
    }, [id])
    // console.log(data?.createdAt);
    // const c = data?.createdAt;

    // const a = moment(c, 'LTS');
    

    // const slugUrl = slug(data?.house_name, { lower: false,locale: 'vi',replacement: '-', });

    return (

        <>
            {(data && (
                <div>
            <Header2 />

        <div className={classes.my_booking_room_id} style={{marginTop:'80px'}}>
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
                                            {data?.createdAt}


                                </Typography>

                            </Grid>
                            <Grid item md={6} xs={6} ms={6} className={`${classes.timeline_item} ${classes.timeline_line2}`}>
                                <DoneIcon className={classes.timeline_item_icon} />
                                <Typography className={classes.timeline_title}>
                                            Hết hạn thanh toán
                             </Typography>
                                <Typography className={classes.timeline_time}>
                                            {data.checkIn}
                             </Typography>
                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid item md={4} sm={12} xs={12} className={classes.timeline_back}>
                        <Button variant="contained" className={classes.timeline_button_back_booking}>
                            <Link to={`/room/${slug(data?.house_name, { lower: false,locale: 'vi',replacement: '-', })}.${data?.houseId}`}>Đặt lại chỗ ở</Link>
                                   
                        </Button>
                    </Grid>
                </Grid>
            </Box>
            <Box className={classes.my_booking_detail}>
                <Grid container spacing={2} style={{ marginTop: '15px' }}>
                    <Grid item md={8} ms={12} xs={12}>
                        <Typography className={classes.my_booking_detail_title}>CHI TIẾT GIAO DỊCH</Typography>
                        <Box className={classes.my_booking_detail_total}>
                            <Typography style={{width:'45%', margin:'10px', fontSize:'14px', color:'#666666',lineHeight:'21px'}}>Ngày cập nhật</Typography>
                            <Typography style={{width:'45%', margin:'10px', fontSize:'14px', color:'#666666',lineHeight:'21px'}}>{data?.updatedAt}</Typography>
                            <Divider orientation='horizontal' variant='middle' style={{width:'95%', border:'0.5px solid #e2dede'}}/>
                            <Typography style={{width:'45%', margin:'10px', fontSize:'14px', color:'#666666',lineHeight:'21px'}}>Tổng tiền</Typography>
                            <Typography style={{width:'45%', margin:'10px', fontSize:'14px', color:'#666666',lineHeight:'21px',fontWeight:800}}>{data.total_cost}₫</Typography>
                        </Box>
                        {/* ------------------------------------------------- */}
                        <Typography className={classes.my_booking_detail_title}>THÔNG TIN ĐẶT CHỖ</Typography>
                        <Box className={classes.my_booking_detail_infor}>
                            <Box className={classes.my_booking_detail_infor_check_in_out}>
                                <Divider orientation='horizontal' variant='middle' style={{width:'45%',marginTop:'15px', border:'2px solid #28CA6E'}}/>
                                <Typography className={classes.check_in_out_title}>Nhận phòng</Typography>
                                <Typography className={classes.check_in_out_date}>{data.checkIn}</Typography>
                            </Box>
                            <Box className={classes.my_booking_detail_infor_check_in_out}>
                                <Divider orientation='horizontal' variant='middle' style={{width:'45%',marginTop:'15px', border:'2px solid #FBDB91'}}/>
                                <Typography className={classes.check_in_out_title}>Trả phòng</Typography>
                                <Typography className={classes.check_in_out_date}>{data.checkOut}</Typography>

                            </Box>
                        </Box>
                        {/* ------------------------------------------------- */}
                    </Grid>
                    <Grid item md={4} ms={12} xs={12}>
                        <Typography className={classes.my_booking_detail_title}>CHI TIẾT CHỖ Ở</Typography>
                        <Box className={classes.my_booking_detail_room}>
                        <Typography className={classes.my_booking_detail_name}>{data.house_name}</Typography>
                       <div style={{display:'flex', marginLeft:'15px', marginBottom:'15px'}}>
                        <LocationOnIcon className={classes.my_booking_room_icon_location}/>
                        {/* <Typography className={classes.my_booking_room_location}> Quận 1, Hồ Chí Minh, Vietnam </Typography> */}
                        </div>
                        </Box>
                        {/* ------------------------------- */}
                        <Typography className={classes.my_booking_detail_title}>THÔNG TIN CHỦ NHÀ</Typography>
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
            <Typography className={classes.my_booking_detail_title}>LIÊN HỆ CHÚNG TÔI</Typography>
               <Grid container>
                      <Grid item md={8} sm={12} xs={12} className={classes.contact_room}>
                    <Typography className={classes.contact_room_title}>Khi liên hệ Luxstay, bạn vui lòng chuẩn bị sẵn Mã đặt chỗ để việc hỗ trợ diễn ra thuận lợi.</Typography>
                    <Button variant="contained" style={{margin:'15px'}}>
                                    Liên hệ TripStay
                    </Button>
                    </Grid>
                </Grid>
            </Box>
        </div>
            <Footer/>
            </div>
            ) || null)}
        </>
    )
}
