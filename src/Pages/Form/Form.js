import React from "react";
import { makeStyles, Box, Typography, Grid } from "@material-ui/core";
import Header2 from "../../Components/Header2/Header2";
// import Header from '../../Components/Header/Header';
import Footer from "../../Components/Footer/Footer";
import SignUp from "../../Components/SignUp/SignUp";
import SignIn from "../../Components/SignIn/SignIn";


import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  form_title: {
    height: "170px",
    marginTop: "80px",
    background: "rgb(246,96,56) linear-gradient(90deg, rgba(246,96,56,1) 12%, rgba(247,138,57,1) 27%, rgba(246,128,56,1) 91%)",
    // background:
    //   "linear-gradient(90deg, rgba(246,96,56,1) 12%, rgba(247,138,57,1) 27%, rgba(246,128,56,1) 91%)",
  },
  form_title_text: {
    fontSize: "24px",
    color: "#ffffff",
    lineHeight: "36px",
    fontWeight: 900,
    paddingTop: "50px",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "20px",
      fontSize: "20px",
      lineHeight: "25px",
    },
  },
  form_title_text2: {
    fontSize: "18px",
    color: "#ffffff",
    lineHeight: "27px",
    fontWeight: 500,
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
    },
  },

  // --------------------------------------------------------------------
  form_utilities: {
    width: "95%",
    margin: "auto",
  },
  form_utilities_img: {
    width: "60px",
    height: "70px",
  },
  form_utilities_text_title: {
    color: "#222222",
    fontSize: "18px",
    lineHeight: "23px",
    fontWeight: 900,
  },
  form_utilities_text_explain: {
    color: "#555555",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 500,
  },
  form_component: {
    width: "100%",
    // height: '740px',
    // maxHeight: '1085px',
    paddingBottom: "60px",
    backgroundColor: "#FFFFFF",
    // marginTop: "55px",
    borderRadius: "10px",
    marginTop: "-100px",
    border: "1px solid #d6d1d1",
    [theme.breakpoints.down("sm")]: {
      marginTop: "-70px",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "-30px",
    },
  },

  from_util_left: {
    [theme.breakpoints.down("sm")]: {
      order: 2,
    },
  },
  from_util_right: {
    paddingTop: "-10px",
    [theme.breakpoints.down("sm")]: {
      order: 1,
    },
  },
}));

export default function Form(props) {
  // const paramsForm  = props.match.params
  // console.log("???? ~ file: Form.js ~ line 93 ~ Form ~ paramsForm", paramsForm)
  const history = useHistory();

  const classes = useStyles();
  const paramsForm=()=>{
        if(props.match.params.form === "signup")
          return <SignUp />
        else if (props.match.params.form === "signin")
          return <SignIn />
        else
        return history.push("/404");

  }
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div>
      <Header2 />

      <div className={classes.form_title}>
        <Box style={{ width: "95%", margin: "auto" }}>
          <Grid container>
            <Grid item md={8} sm={12} xs={12}>
              <Typography className={classes.form_title_text}>
                ????ng k?? th??nh vi??n Vietstay - T??ch ??i???m th?????ng v?? nh???n ??u ????i
              </Typography>
              <Typography className={classes.form_title_text2}>
                Nhanh ch??ng, ti???n l???i v?? an to??n. ????ng k?? li???n tay, rinh ngay
                quy???n l???i.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </div>
      <Box className={classes.form_utilities}>
        <Grid container>
          <Grid item md={8} sm={12} xs={12} className={classes.from_util_left}>
            <Grid container>
              <Grid item md={6} xs={12} sm={12} style={{ marginTop: "40px" }}>
                <img
                  alt=""
                  className={classes.form_utilities_img}
                  src="https://www.luxstay.com/account/coins@2x.png"
                ></img>
                <Typography className={classes.form_utilities_text_title}>
                  T??ch ??i???m nhanh ch??ng
                </Typography>
                <Typography className={classes.form_utilities_text_explain}>
                  T??ch ??i???m ?????i v???i m???i l?????t ?????t ch??? th??nh c??ng. Quy ?????i th??nh
                  VietStay Credit ????? du l???ch nhi???u h??n n???a.
                </Typography>
              </Grid>
              {/* =========================================================== */}

              <Grid item md={6} xs={12} sm={12} style={{ marginTop: "40px" }}>
                <img
                  alt=""
                  className={classes.form_utilities_img}
                  src="https://www.luxstay.com/account/top-sales@2x.png"
                ></img>
                <Typography className={classes.form_utilities_text_title}>
                  Ti???n ??ch th??ng minh{" "}
                </Typography>
                <Typography className={classes.form_utilities_text_explain}>
                  Check-in v?? ki???m tra h??a ????n thanh to??n k??? c??? khi kh??ng c?? k???t
                  n???i m???ng. Ho??n ti???n nhanh g???n. ?????i l???ch d??? d??ng.
                </Typography>
              </Grid>
              {/* =========================================================== */}

              {/* ======================= */}

              <Grid item md={6} xs={12} sm={12} style={{ marginTop: "40px" }}>
                <img
                  alt=""
                  className={classes.form_utilities_img}
                  src="https://www.luxstay.com/account/wallet@2x.png"
                ></img>
                <Typography className={classes.form_utilities_text_title}>
                  Thanh to??n ????n gi???n
                </Typography>
                <Typography className={classes.form_utilities_text_explain}>
                  Ph????ng th???c thanh to??n ti???n l???i, an to??n. T??ch h???p ch???c n??ng
                  l??u th??? ????? ?????t ph??ng l???n sau.
                </Typography>
              </Grid>
              {/* =========================================================== */}

              <Grid item md={6} xs={12} sm={12} style={{ marginTop: "40px" }}>
                <img
                  alt=""
                  className={classes.form_utilities_img}
                  src="https://www.luxstay.com/account/backpack@2x.png"
                ></img>
                <Typography className={classes.form_utilities_text_title}>
                  ??u ????i m???i ng??y
                </Typography>
                <Typography className={classes.form_utilities_text_explain}>
                  Nh???n th??ng b??o ??u ????i t??? VietStay khi c?? k??? ho???ch du l???ch ?????
                  l???a ch???n v?? ?????t ngay cho m??nh m???t ch??? ??? ph?? h???p, ti???n nghi v???i
                  gi?? t???t nh???t.
                </Typography>
              </Grid>
              {/* =========================================================== */}
            </Grid>
          </Grid>
          <Grid item md={4} sm={12} xs={12} className={classes.from_util_right}>
            <Box className={classes.form_component}>
              {
              paramsForm()

              }
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Footer />
    </div>
  );
}