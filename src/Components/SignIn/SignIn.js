import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  InputBase,
  InputAdornment,
  Button,
  Link,
  IconButton,
} from "@material-ui/core";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
// import './styles.css';
// import Autocomplete from '@material-ui/lab/Autocomplete';
import FacebookIcon from "@material-ui/icons/Facebook";
import HttpsIcon from "@material-ui/icons/Https";
// ----------------
import { loginApi } from "../../Services/Api";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { LOGIN_SUCCESS } from "../../Constants/action-type";
import { BASE_API } from '../../Constants/index';
const useStyles = makeStyles((theme) => ({
  sign_in: {
    width: "85%",
    paddingTop: "30px",
    margin: "auto",
  },
  input_group: {
    width: "100%",
  },
  sign_in_name_form: {
    fontSize: "24px",
    fontWeight: 900,

    lineHeight: "30px",
    color: "#000000",
  },
  name_input: {
    fontSize: "16px",
    fontWeight: 700,
    lineHeight: "24px",
    color: "#222222",
    paddingTop: "20px",
    paddingBottom: "10px",
  },
  input: {
    border: "1px solid #d6d1d1",
    borderRadius: "30px",
    paddingLeft: "20px",
    paddingRight: "10px",
    width: "100%",
    height: "48px",
    marginTop: "30px",
  },
  // ------------------------------------------------------------
  input_phone_code_nation: {
    width: "120px",
    height: "48px",
    // borderRadius:'25px!important',
    // border:'1px solid rimport { Button } from '@material-ui/core/Button';
  },


  input2: {
    border: "1px solid #d6d1d1",
    borderRadius: "30px",
    paddingLeft: "20px",
    paddingRight: "10px",
    width: "calc(100% - 145px)",
    height: "48px",
  },

  button_sign_in: {
    width: "100%",
    backgroundImage: "linear-gradient(90deg,#f65e38 0,#f68a39 51%,#f65e38)",
    backgroundSize: "200% auto",
    marginTop: "25px",
    height: "48px",
    borderRadius: "30px",
    "&:hover": {
      backgroundPositionX: "100%",
      backgroundPositionY: "center",
    },
  },
  button_add_mxh: {
    width: "100%",
    height: "48px",
    borderRadius: "30px",
    border: "1px solid gray",
    fontSize: "14px",
    marginTop: "20px",
    pointerEvents: "relative",
  },
  icon_button_mxh: {
    position: "absolute",
    right: 0,
  },
  icon_button_mxh2: {
    position: "absolute",
    right: 3,
  },
}));
// function countryToFlag(isoCode) {
//     return typeof String.fromCodePoint !== 'undefined'
//         ? isoCode
//             .toUpperCase()
//             .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
//         : isoCode;
// }
export default function SignIn() {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const [loginSuccess, setLoginSuccess] = React.useState(null)
  const [inputLogin, setInputLogin] = React.useState({
    identifier: "",
    password: "",
  });
  function onChangeInputLogin(e) {
    const { name, value } = e.target;
    setInputLogin({
      ...inputLogin,
      [name]: value,
    });
  }
  function clickLogin() {
    loginApi({
      identifier: inputLogin.identifier,
      password: inputLogin.password,
    })
      .then((response) => {
        console.log(response.data );
        
        let str = response.config.data;
        let strToArr = str.split('"');
        let pass = strToArr[7];

        // document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/form/signin;";
        document.cookie = `${response.data.user.username}=${response.data.jwt}, expires=${new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)}`;
        if(response.data){
        dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            id: response.data.user._id,
            jwt: response.data.jwt,
            username: response.data.user.username,
            email: response.data.user.email,
            password: pass,
            role: response.data.user.role.type,
            avatar: '/uploads/0_B25_D554_4386_4_AB_7_AA_8_A_6_B576_D569_F97_a1cc015e3e_7a35db9570.jpg',
            isLogin: true,
          },

        });
      }
      history.push("/")

      }).catch((error) => {
        console.log("Ôi thôi lỗi rồi: ", error);

      });



  }
 

  return (
    <div className={classes.sign_in}>
      <Typography className={classes.sign_in_name_form}>Đăng nhập</Typography>
      {/* -------------------------------------------------------- */}
      <div className={classes.input_group}>
        <Typography className={classes.name_input}>
          Đăng nhập VietStay để trải nghiệm
        </Typography>
        <InputBase
          className={classes.input}
          onChange={onChangeInputLogin}
          name="identifier"
          value={inputLogin.identifier}
          inputProps={{ "aria-label": "input email" }}
          endAdornment={
            <InputAdornment position="start">
              <MailOutlineIcon style={{ color: "gray" }} />
            </InputAdornment>
          }
        />
        <InputBase
          onChange={onChangeInputLogin}
          type="password"
          name="password"
          value={inputLogin.password}
          className={classes.input}
          inputProps={{ "aria-label": "input pass" }}
          endAdornment={
            <InputAdornment position="start">
              <HttpsIcon style={{ color: "gray" }} />
            </InputAdornment>
          }
        />
      </div>

      {/* ----------------------------------------------------------
       */}
      <Button className={classes.button_sign_in} onClick={clickLogin}>
        Đăng nhập
      </Button>
      {/* ----------------------------------------------------------
       */}
      <Typography style={{ textAlign: "center", paddingTop: "30px" }}>
        Quên mật khẩu?{" "}
        <Link href="#" color="secondary">
          Nhấn vào đây
        </Link>
      </Typography>
      {/* ----------------------------------------------------------
       */}
      <Typography style={{ textAlign: "center", paddingTop: "30px" }}>
        Bạn chưa có tài khoản VietStay?{" "}
        <Link href="/form/signup" color="secondary">
          Đăng ký
        </Link>
      </Typography>
      {/* ----------------------------------------------------------
       */}
      <Typography style={{ textAlign: "center", paddingTop: "30px" }}>
        Hoặc
      </Typography>
      {/* ----------------------------------------------------------
       */}
      <Button className={classes.button_add_mxh}>
        <Typography style={{ fontSize: "14px" }}>
          Đăng nhập với FaceBook
        </Typography>
        <IconButton className={classes.icon_button_mxh}>
          <FacebookIcon />
        </IconButton>
      </Button>
      {/* ----------------------------------------------------------
       */}
      <Button className={classes.button_add_mxh}>
        <Typography style={{ fontSize: "14px" }}>
          Đăng nhập với Google
        </Typography>
        <IconButton className={classes.icon_button_mxh2}>
          <i
            style={{ fontSize: "20px" }}
            className="fa fa-google"
            aria-hidden="true"
          ></i>
        </IconButton>
      </Button>
    </div>
  );
}

