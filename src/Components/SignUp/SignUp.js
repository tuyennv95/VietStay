import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography, InputBase, InputAdornment, Button, Link, IconButton } from '@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
// import './styles.css';
// import Autocomplete from '@material-ui/lab/Autocomplete';
import FacebookIcon from '@material-ui/icons/Facebook';
import HttpsIcon from '@material-ui/icons/Https';
// -----------------------
import { registrationApi } from '../../Services/Api';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    sign_up: {
        width: '85%',
        paddingTop: '30px',
        margin: 'auto',
    },
    input_group: {
        width: '100%',
    },
    sign_up_name_form: {
        fontSize: '24px',
        fontWeight: 900,

        lineHeight: '30px',
        color: '#000000',
    },
    name_input: {
        fontSize: '16px',
        fontWeight: 500,
        lineHeight: '24px',
        color: '#222222',
        paddingTop: '20px',
        paddingBottom: '10px',
    },
    input: {
        border: '1px solid #d6d1d1',
        borderRadius: '30px',
        paddingLeft: '20px',
        paddingRight: '10px',
        width: '100%',
        height: '48px',
    },
    // ------------------------------------------------------------
    input_phone_code_nation: {
        width: '120px',
        height: '48px',
        // borderRadius:'25px!important',
        // border:'1px solid rimport { Button } from '@material-ui/core/Button';
    },
    input2: {
        border: '1px solid #d6d1d1',
        borderRadius: '30px',
        paddingLeft: '20px',
        paddingRight: '10px',
        width: '100%',
        height: '48px',
    },

    button_sign_up: {
        width: '100%',
        backgroundImage: 'linear-gradient(90deg,#f65e38 0,#f68a39 51%,#f65e38)',
        backgroundSize: '200% auto',
        marginTop: '25px',
        height: '48px',
        borderRadius: '30px',
        '&:hover': {
            backgroundPositionX: '100%',
            backgroundPositionY: 'center',
        }
    },
    button_add_mxh: {
        width: '100%',
        height: '48px',
        borderRadius: '30px',
        border: '1px solid gray',
        fontSize: '14px',
        marginTop: '20px',
        pointerEvents: 'relative'
    },
    icon_button_mxh: {
        position: 'absolute',
        right: 0,
    },
    icon_button_mxh2: {
        position: 'absolute',
        right: 3,
    }



}));

export default function Reg() {
    const classes = useStyles();
    const history = useHistory();
    const [inputSignUp, setInputSignUp] = React.useState({
        email: '',
        phoneNumber: 0,
        name: '',
        password: '',
        confirmPassword: '',
    });
    function onChangeInput(e) {
        const { name, value } = e.target;
        setInputSignUp({
            ...inputSignUp,
            [name]: value
        });
        // console.log(typeof parseInt(inputSignUp.phoneNumber));
    }
    function clickSignUp(e) {
        e.preventDefault();
        let check = true;
        const checkFn = () => {
            let checkEmail = inputSignUp.email;
            if (checkEmail.indexOf('@gmail.com') === -1) return 0;
            // let vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
            // if(vnf_regex.test(parseInt(inputSignUp.phoneNumber)) === false) return 0;
            if (inputSignUp.phoneNumber.length !== 10) return 0;
            if (inputSignUp.name.length <= 0) return 0;
            let format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
            if (format.test(inputSignUp.password) === true) return 0;
            if (inputSignUp.confirmPassword !== inputSignUp.password) return 0;
            else return 1;
        }
        if (!checkFn()) {
            alert("Lỗi validate form, vui lòng nhập lại");
        }
        else {
            registrationApi({
                username: inputSignUp.name,
                email: inputSignUp.email,
                password: inputSignUp.password,
                phoneNumber: inputSignUp.phoneNumber,

            }
            ).then(response => {
                alert("Đăng ký thành công");
                history.push("/form/signin")

            })
                .catch(error => {
                    console.log('An error occurred:', error.response);

                })
        }

    }
    // username: inputSignUp.name,
    //     email: inputSignUp.email,
    //         password: inputSignUp.password,

    return (
        <div className={classes.sign_up} >
            <Typography className={classes.sign_up_name_form}>
                Đăng ký thành viên
                </Typography>
            {/* -------------------------------------------------------- */}
            <div className={classes.input_group}>
                <Typography className={classes.name_input}>
                    Địa chỉ email
                    </Typography>
                <InputBase
                    onChange={onChangeInput}
                    className={classes.input}
                    name="email"
                    value={inputSignUp.email || ''}
                    inputProps={{ 'aria-label': 'input email' }}
                    endAdornment={
                        <InputAdornment position='start'>
                            <MailOutlineIcon style={{ color: 'gray' }} />
                        </InputAdornment>
                    }
                />

            </div>
            {/* --------------------------------------------------- */}
            <div className={classes.input_group}>
                <Typography className={classes.name_input}>
                    Số điện thoại
                    </Typography>
                <div style={{ display: 'flex', justifyContent: "space-between" }}>


                    <InputBase
                        onChange={onChangeInput}

                        className={classes.input2}
                        name="phoneNumber"
                        value={inputSignUp.phoneNumber || ''}
                        inputProps={{ 'aria-label': 'input telephone number' }}

                    />

                </div>

            </div>
            {/* --------------------------------------------------- */}
            <div className={classes.input_group}>
                <Typography className={classes.name_input}>
                    Họ và tên
                    </Typography>
                <InputBase
                    onChange={onChangeInput}

                    className={classes.input}
                    name="name"
                    value={inputSignUp.name || ''}
                    inputProps={{ 'aria-label': 'input name' }}
                />

            </div>
            {/* --------------------------------------------------- */}
            <div className={classes.input_group}>
                <Typography className={classes.name_input}>
                    Mật khẩu
                    </Typography>
                <InputBase
                    className={classes.input}
                    onChange={onChangeInput}

                    name="password"
                    value={inputSignUp.password || ''}
                    inputProps={{ 'aria-label': 'input pass' }}
                    endAdornment={
                        <InputAdornment position='start'>
                            <HttpsIcon style={{ color: 'gray' }} />
                        </InputAdornment>
                    }
                />

            </div>
            {/* --------------------------------------------------- */}
            <div className={classes.input_group}>
                <Typography className={classes.name_input}>
                    Xác nhận mật khẩu

                    </Typography>
                <InputBase
                    className={classes.input}
                    onChange={onChangeInput}

                    name="confirmPassword"
                    value={inputSignUp.confirmPassword || ''}
                    inputProps={{ 'aria-label': 'input pass confirm' }}
                    endAdornment={
                        <InputAdornment position='start'>
                            <HttpsIcon style={{ color: 'gray' }} />
                        </InputAdornment>
                    }
                />

            </div>
            {/* ----------------------------------------------------------
             */}
            <Button className={classes.button_sign_up} onClick={clickSignUp}>
                Đăng Ký
            </Button>
            {/* ----------------------------------------------------------
             */}
            <Typography style={{ textAlign: "center", paddingTop: '30px' }}>
                Bạn đã có tài khoản VietStay? <Link href="#" color="secondary">Đăng nhập</Link>
            </Typography>
            {/* ----------------------------------------------------------
             */}
            <Typography style={{ textAlign: "center", paddingTop: '30px', fontSize: '14px' }}>
                Tôi đồng ý với <Link href="#" color="textSecondary">Bảo mật</Link> và
            <Link href="#" color="textSecondary"> Điều khoản hoạt động</Link> của VietStay
            </Typography>
            {/* ----------------------------------------------------------
             */}
            <Button className={classes.button_add_mxh}>

                <Typography style={{ fontSize: '14px' }}>
                    Đăng nhập với FaceBook
            </Typography>
                <IconButton className={classes.icon_button_mxh}>
                    <FacebookIcon />
                </IconButton>
            </Button>

            {/* ----------------------------------------------------------
             */}
            <Button className={classes.button_add_mxh}>
                <Typography style={{ fontSize: '14px' }}>
                    Đăng nhập với Google
                </Typography>
                <IconButton className={classes.icon_button_mxh2}>
                    <i style={{ fontSize: '20px' }} className="fa fa-google" aria-hidden="true"></i>
                </IconButton>
            </Button>
        </div>
    )

}

