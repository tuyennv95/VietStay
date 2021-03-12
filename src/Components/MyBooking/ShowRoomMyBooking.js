import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import moment from 'moment';
import slug from 'slug';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Load from 'Components/Load/Load';
import axios from 'axios';
import {BASE_API} from '../../Constants/index';
import { useHistory } from 'react-router'

const useStyles = makeStyles((theme) => ({
    show_room_my_booking: {
        width: '100%',
        margin: 'auto',
        backgroundColor: '#FFFFFF',
        marginTop: '50px',
        border: '1px solid #e2dede',
        borderRadius: '15px',
        paddingTop: '20px'
    },
    show_room_my_booking_title: {
        position: 'relative',
        [theme.breakpoints.up('md')]: {

            '&:after': {
                content: '""',
                position: 'absolute',
                width: '1px',
                height: '80%',
                border: '0.5px solid #e2dede',
                top: 25,
                right: 50
            }
        },
    },
    show_room_my_booking_status: {
        fontSize: '10px',
        lineHeight: '15px',
        fontWeight: 700,
        color: '#ffffff',
        backgroundColor: '#7E8D9A',
        width: '90px',
        height: '20px',
        margin: '15px',
        paddingLeft: '5px',
        paddingTop: '2px'
    },
    show_room_my_booking_name: {
        fontSize: '24px',
        lineHeight: '36px',
        fontWeight: 500,
        color: '#222',
        width: '75%',
        paddingLeft: '15px',
        paddingBottom: '15px',
        paddingRight: '15px',
        '&:hover': {
            color: '#f65e39'
        }
    },
    show_room_my_booking__cate: {
        fontSize: '16px',
        lineHeight: '24px',
        fontWeight: 500,
        color: '#666666',
        paddingBottom: '15px',
        paddingLeft: '15px',
    },
    show_history_name: {
        fontSize: '12px',
        lineHeight: '18px',
        fontWeight: 500,
        color: '#999999',
    },
    show_history_value: {
        fontSize: '16px',
        lineHeight: '24px',
        fontWeight: 500,
        color: '#222222',
    },
    show_history: {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        height: '150px',
        alignItems: 'center',
        [theme.breakpoints.up('md')]: {
            marginTop: '38px',
        },

    },
    show_history_item: {
        width: '30%',
        paddingLeft: '10px',
        height: '30%'
    },
    show_room_button_link: {
        margin: 'auto',
        position: 'relative',
        [theme.breakpoints.up('sm')]: {
            marginTop: '65px',
            width: '85%',

        },
        [theme.breakpoints.down('sm')]: {
            marginTop: '20px',
            marginBottom: '25px',
            width: '95%',

        },

    },
    show_room_button_link_directional: {
        position: 'relative',
        '&:after': {
            [theme.breakpoints.down('sm')]: {
                content: '""',
                position: 'absolute',
                width: '95%',
                border: '0.5px solid #e2dede',
                top: 0,
                left: 15
            },

        },

        [theme.breakpoints.up('md')]: {
            '&:before': {

                content: '""',
                position: 'absolute',
                height: '80%',
                border: '0.5px solid #e2dede',
                top: 20,
                left: 0
            },
        }

    },
    show_room_button: {
        width: '100%',
    }
}));
export default function ShowRoomMyBooking(props) {
    const classes = useStyles();
    const room = props.item;
    var a = moment(room?.checkIn);
    // console.log(room)
    var b = moment(room?.checkOut);
    const ngayDen = a.format('DD-MM-YYYY');
    const ngayDi = b.format('DD-MM-YYYY');
    const numberDayBooking = b.diff(a, 'day');
    const history = useHistory();
    const [openHuy, setOpenHuy] = React.useState(false);
    const [load, setLoad] = React.useState(false);



    function checkPayType() {
        var date = moment(new Date()).format('MM/DD/YYYY');

        if (room?.statusPayment === 2) {
            if (moment(room?.checkIn).isBefore(date, 'day')) {
                return 1; //Da thanh toan + Huy (huy)
            }
            else if (moment(room?.checkIn).isSameOrAfter(date, 'day')) {
                return 2; //Da thanh toan + ko the Huy (Dat lai phong)
            }
        }
        else if (room?.statusPayment === 1) {
            return 3; // Chua thanh toan
        }
        else if (room?.statusPayment === 0) {
            return 4; //Hủy
        }
        else if (room?.statusPayment === 3) {
            return 5; // Cho huy
        }
    }
    checkPayType();
    const slugUrl = slug(room.house_name, { lower: false, locale: 'vi', replacement: '-', });
    function setHuyPay() {
        setOpenHuy(true);
    }
    function handleCloseBill() {
        setOpenHuy(false);

    }
    function handleSuccessBill() {
        setOpenHuy(false);
        setLoad(true);
        axios.put(`${BASE_API}/bills/${room?.id}`, {
            statusPayment: 3
        });
        history.go(0);

    }
    function setHuyNotPay(){
        setOpenHuy(true);

    }
    function handleSuccessBillNotPay(){
        setOpenHuy(false);
        setLoad(true);
        axios.put(`${BASE_API}/bills/${room?.id}`, {
            statusPayment: 0
        });
        history.go(0);

    }
    return (
        <>
            {(room && (
                <div className={classes.show_room_my_booking}>
                    <Grid container>
                        <Grid item md={4} sx={12} ms={12} className={classes.show_room_my_booking_title}>
                            <div>
                                <Typography className={classes.show_room_my_booking_status}>
                                    {room.statusPayment === 2 ? "Đã thanh toán" : (room.statusPayment === 1 ? "Chưa thanh toán" : "Hủy")}
                                </Typography>

                            </div>
                            <Link underline='none' to={`/history-booking/${room.id}`} >
                                <Typography className={classes.show_room_my_booking_name}>
                                    {room.house_name}
                                </Typography>
                            </Link>

                            <Typography className={classes.show_room_my_booking__cate}>
                                Nguyên căn
                        </Typography>
                        </Grid>

                        <Grid item md={5} sx={12} ms={12} className={classes.show_history}>

                            <div className={classes.show_history_item}>
                                <Typography className={classes.show_history_name}>Mã đặt chỗ</Typography>
                                <Typography className={classes.show_history_value}>{room?._id.substr(-8)}...</Typography>
                            </div>
                            <div className={classes.show_history_item}>
                                <Typography className={classes.show_history_name}>Số khách</Typography>
                                <Typography className={classes.show_history_value}>{room?.number_people}</Typography>
                            </div>
                            <div className={classes.show_history_item}>
                                <Typography className={classes.show_history_name}>Ngày đến</Typography>
                                <Typography className={classes.show_history_value}>{ngayDen}</Typography>
                            </div>
                            <div className={classes.show_history_item}>
                                <Typography className={classes.show_history_name}>Số đêm</Typography>
                                <Typography className={classes.show_history_value}>{numberDayBooking} đêm</Typography>
                            </div>
                            <div className={classes.show_history_item}>
                                <Typography className={classes.show_history_name}>Tổng tiền</Typography>
                                <Typography className={classes.show_history_value}>{new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(room?.total_cost)}

                                </Typography>
                            </div>
                            <div className={classes.show_history_item}>
                                <Typography className={classes.show_history_name}>Ngày đi</Typography>
                                <Typography className={classes.show_history_value}>{ngayDi}</Typography>
                            </div>
                        </Grid>
                        <Grid item md={3} xs={12} ms={12} className={classes.show_room_button_link_directional}>
                            <div className={classes.show_room_button_link}>
                                {/* {room?.statusPayment === 1 ?
                                    <Button variant="contained"
                                        color="secondary" className={classes.show_room_button}><Link to={`/bill/${room?.id}`}>Thanh toán</Link>
                                    </Button>
                                    :
                                    <Button variant="contained"
                                        color="primary" className={classes.show_room_button}><Link to={`/room/${slugUrl}.${room?.houseId}`}>Đặt lại chỗ ở</Link>
                                    </Button>
                                } */}
                                {
                                    checkPayType() === 2
                                        ?
                                        <Button variant="contained"
                                            color="secondary" className={classes.show_room_button} onClick={setHuyPay}>Hủy
                                        </Button>
                                        :
                                        (
                                            checkPayType() === 1
                                                ?
                                                <Button variant="contained" color="primary"
                                                    color="secondary" className={classes.show_room_button}><Link to={`/room/${slugUrl}.${room?.houseId}`}>Đặt lại chỗ ở</Link>
                                                </Button>
                                                :
                                                (
                                                    checkPayType() === 3
                                                        ?
                                                        <>
                                                            <Button
                                                                variant="contained" color="primary"
                                                                className={classes.show_room_button}><Link to={`/bill/${room?.id}`}>Thanh Toán</Link>
                                                            </Button>
                                                            <Button
                                                                style={{ marginTop: '5px' }}
                                                                variant="contained"
                                                                onClick={setHuyNotPay}
                                                                color="secondary" className={classes.show_room_button}>Hủy
                                                            </Button>
                                                        </>
                                                        :
                                                        (
                                                            checkPayType() === 4
                                                                ?

                                                                <Button
                                                                    variant="contained" color="primary"
                                                                    className={classes.show_room_button}><Link to={`/room/${slugUrl}.${room?.houseId}`}>Đặt lại chỗ ở</Link>
                                                                </Button>


                                                                :
                                                                (
                                                                    checkPayType() === 5
                                                                        ?

                                                                        <Button
                                                                            variant="contained" disabled
                                                                            color="secondary" className={classes.show_room_button}><Link to={`/bill/${room?.id}`}>...Loading</Link>
                                                                        </Button>


                                                                        :
                                                                        null
                                                                )
                                                        )
                                                )
                                        )

                                }
                            </div>
                        </Grid>



                    </Grid>
                    {(room && (
                        <div className={classes.bill}>
                            <div>

                                <Dialog
                                    open={openHuy}
                                    onClose={handleCloseBill}
                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-description"
                                >
                                    <DialogTitle id="alert-dialog-title">{"Xác nhận hủy phòng."}</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText id="alert-dialog-description">
                                            Xác nhận hủy đơn đặt phòng:<br />
                                            - Tên HomeStay: {room?.house_name} <br />
                                            - CheckIn: {ngayDen} <br />
                                            - CheckOut: {ngayDi} <br />
                                            - Đơn giá: {new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(room?.total_cost)} <br />
                                            - Trạng thái: {room?.statusPayment === 2 ? 'Đã thanh toán' : 'Chưa thanh toán'}<br />
                                            {room?.statusPayment === 2 ? 
                                            `*** Chúng tôi sẽ liên hệ với bạn qua số ${room?.phoneNumber} để xác nhận hủy phòng cũng như chính sách hoàn tiền, phí. Xin cảm ơn!`
                                            : ''
                                            }


                                        </DialogContentText>

                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleCloseBill} color="primary">
                                            Disagree
         </Button>                      
                                        {room?.statusPayment === 2 ? 
                                        
                                        <Button onClick={handleSuccessBill} color="primary" autoFocus>
                                            Agree
         </Button>
         : 
         <Button onClick={handleSuccessBillNotPay} color="primary" autoFocus>
         Agree
</Button>
}

                                    </DialogActions>
                                </Dialog>
                            </div>
                        </div>
                    ) || null)}
                    {load === true ? <Load /> : null}

                </div>
            ) || null)}
        </>
    )

}
