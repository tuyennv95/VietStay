import React from 'react';
// import RangeDate from '../RangeDate/RangeDate';
// import ButtonBase from '@material-ui/core/ButtonBase';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
// import SearchIcon from '@material-ui/icons/Search';
// import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
// import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
// import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
// import CancelIcon from '@material-ui/icons/Cancel';
// import CheckIcon from '@material-ui/icons/Check';
// import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
// import Category from '../Category/Category';
import MenuIcon from '@material-ui/icons/Menu';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import { useSelector } from 'react-redux';
import { BASE_URL } from '../../Constants/index';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { isLogOut } from 'utils';
import {isLogin } from 'utils';




const useStyles = makeStyles((theme) => ({
    header__text: {
        color: '#5b5252',
        textDecoration: 'none',
    },

    header_link: {
        maxWidth: '380px',
        // minWidth:'280px',
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down('960')]: {
            display: 'none',
        }
    },
    header_right_repon: {
        display: 'none',
        [theme.breakpoints.down('960')]: {
            display: 'inline-block',
        }
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3)
    },
    header_link_select: {
        width: '90px',
        display: 'flex',
        backgroundColor: '#c7bfbf',
        justifyContent: 'space-between',
        padding: '1px 1px  1px 1px ',
        borderRadius: '20px',
        cursor: 'pointer',
        position: 'relative',
        '&:hover': {
            "& $select_language": {
                display: 'inline-block',
            }
        },

    },
    select_language: {
        position: 'absolute',
        width: '350px',
        height: '120px',
        // backgroundColor: 'red',
        top: '150%',
        right: 0,
        backgroundColor: '#FFFFFF',

        display: 'none',
        borderRadius: '5px',
        border: '1px solid #c6c9d1',
        '&:before': {
            content: '""',
            top: '-8px',
            right: '28px',
            transform: 'rotate(45deg)',
            height: '15px',
            width: '15px',

            borderTop: '1px solid #c6c9d1',
            borderLeft: '1px solid #c6c9d1',
            position: 'absolute',
            background: '#fff',
        },

        '&:after': {
            content: '""',
            width: '75px',
            height: '15px',
            position: 'absolute',
            top: '-13%',
            right: '6px',
        }



    },
    select_language_box: {
        height: '100%',
    },
    select_language_border: {
        borderRight: '1px solid #c6c9d1',

    },
    select_lang_currency: {
        display: 'flex',
        paddingTop: '10px',
        justifyContent: 'space-around',
        alignItems: 'center',
    },

    // -------------------------------
    sign: {
        display: 'flex',
        paddingRight: '20px',
        paddingLeft: '20px',
    },
    no_sign: {
        display: 'flex',
    },
    yes_sign: {
        maxWidth: '200px',
        height: '25px',
        '&:focus-within': {
            "& $select_yes_sign": {
                display: 'inline-block',
            }
        },
    },

    button_yes_sign: {
        width: '100%',
        height: '110%',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        padding: 0,
        margin: 0,
        position: 'relative',
        backgroundColor: '#EAE6E6',
        marginBottom: '5px'
    },
    avatar_yes_sign: {
        width: '25px',
        height: '25px',
        //   paddingRight:'10px',
        //   paddingLeft:'10px',
        marginRight: '5px',
    },
    name_user: {
        fontSize: '14px',
        lineHeight: '21px',
        fontWeight: 500,
        color: '#5b5252',

    },
    icon_down_yes_sign: {
        color: 'gray',
        marginLeft: '5px',
    },
    select_yes_sign: {
        position: 'absolute',
        width: '280px',
        height: '310px',
        top: '150%',
        backgroundColor: '#FFFFFF',
        right: 0,
        borderRadius: '5px',
        display: 'none',
        border: '1px solid #c6c9d1',
        '&:before': {
            content: '""',
            top: '-8px',
            right: '28px',
            transform: 'rotate(45deg)',
            height: '15px',
            width: '15px',

            borderTop: '1px solid #c6c9d1',
            borderLeft: '1px solid #c6c9d1',
            position: 'absolute',
            background: '#fff',
        },

        '&:after': {
            content: '""',
            width: '75px',
            height: '15px',
            position: 'absolute',
            top: '-13%',
            right: '6px',
        }
    },
    select_lits: {
        width: '90%',
        margin: 'auto',
        height: 'calc(98.5%/6)',
        position: 'relative',
        '&:after': {
            content: '""',
            position: 'absolute',
            width: '2px',
            height: 0,
            background: 'linear-gradient(270deg,#f68a39,#f65e39)',
            borderRadius: '1px',
            top: '50%',
            left: -14,
            transform: 'translateY(-50%)',
            transition: 'all .2s',
        },
        '&:hover': {
            '&:after': {
                height: '100%',
            },

            '& $items_text': {
                fontWeight: 700,

            }
        }
    },
    select_items: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: '15px',


    },
    items_icon: {
        fontSize: '20px',
        color: 'gray',
        width: '10%',
    },
    items_text: {
        fontSize: '16px',
        color: '#333333',
        width: '85%',
        align: 'right',
        lineHeight: '24px',

    }


}));

export default function HeaderRight() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const inforUser = useSelector((state) => state.login);
    // console.log("🚀 ~ file: HeaderRight.js ~ line 269 ~ HeaderRight ~ inforUser", inforUser.username)
    const strName = inforUser.username
    // console.log("🚀 ~ file: HeaderRight.js ~ line 266 ~ HeaderRight ~ strName",)
    function logOut() {
        // isLogOut();
        document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        document.cookie = `${inforUser.username}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;


        dispatch({
            type: "LOGOUT",
        });
        dispatch({
            type: "LOGOUTLOVE",
        })
    }

    // console.log(isLogin())


    return (
        <div>
            <React.Fragment>
                <CssBaseline />

                <div className={classes.header_link} >
                    <a href="#" >
                        <Typography className={classes.header__text}>
                            Host
</Typography>
                    </a>
                    <div className={classes.sign}>
                        {isLogin() && inforUser?.isLogin
                            ?
                            <div className={classes.yes_sign}>
                                <Button className={classes.button_yes_sign} >
                                    <Avatar className={classes.avatar_yes_sign} alt="xxxx" src={`${BASE_URL}${inforUser.avatar}`} />
                                    <Typography className={classes.name_user}>{strName.substr(0, 7)}</Typography>
                                    <ExpandMoreIcon className={classes.icon_down_yes_sign} />
                                    <Box className={classes.select_yes_sign}>
                                        <div className={classes.select_lits}>
                                            <Link to="/me-bookings" className={classes.select_items}>
                                                <CalendarTodayIcon className={classes.items_icon} />
                                                <Typography align='left' className={classes.items_text}>
                                                    Đặt chỗ của tôi
                                                </Typography>
                                            </Link>
                                        </div>
                                        <Divider style={{ width: '100%' }} />
                                        {/* ------------------------------------------------ */}
                                        <div className={classes.select_lits}>
                                            <Link to="/me-mes" className={classes.select_items}>
                                                <MailOutlineIcon className={classes.items_icon} />
                                                <Typography align='left' className={classes.items_text}>
                                                    Tin nhắn
                                                        </Typography>
                                            </Link>
                                        </div>
                                        <Divider style={{ width: '100%' }} />
                                        {/* ------------------------------------------------ */}
                                        <div className={classes.select_lits}>
                                            <Link to="me-setting" className={classes.select_items}>
                                                <SettingsIcon className={classes.items_icon} />
                                                <Typography align='left' className={classes.items_text}>
                                                    Cài đặt tài khoản                                                        </Typography>
                                            </Link>
                                        </div>
                                        <Divider style={{ width: '100%' }} />
                                        {/* ------------------------------------------------ */}
                                        <div className={classes.select_lits}>
                                            <Link to="me-wish-list" className={classes.select_items}>
                                                <FavoriteBorderIcon className={classes.items_icon} />
                                                <Typography align='left' className={classes.items_text}>
                                                    Yêu thích
                                                        </Typography>
                                            </Link>
                                        </div>
                                        <Divider style={{ width: '100%' }} />
                                        {/* ------------------------------------------------ */}
                                        {/* <div className={classes.select_lits}>
                                            <Link to="" className={classes.select_items}>
                                                <LocalMallIcon className={classes.items_icon} />
                                                <Typography align='left' className={classes.items_text}>
                                                    VietStay for Business
                                                                            </Typography>
                                            </Link>
                                        </div> */}
                                        <Divider style={{ width: '100%' }} />
                                        {/* ------------------------------------------------ */}
                                        <div className={classes.select_lits}>
                                            <Link to="" className={classes.select_items}>
                                                <PowerSettingsNewIcon className={classes.items_icon} />
                                                <Typography align='left' className={classes.items_text} onClick={logOut}>
                                                    Đăng xuất
                                             </Typography>
                                            </Link>
                                        </div>
                                        {/* ------------------------------------------------ */}


                                    </Box>
                                </Button>

                            </div>
                            :

                            <div className={classes.no_sign}>
                                <Link to="/form/signup" >

                                    <Typography className={classes.header__text} >
                                        Đăng ký
</Typography></Link>

                                <Link to="/form/signin" >
                                    <Typography className={classes.header__text} style={{ paddingLeft: '15px' }}>
                                        Đăng nhập
</Typography>
                                </Link>
                            </div>
                        }
                    </div>



                    <Box className={classes.header_link_select}>
                        <Avatar className={classes.small} alt="" src="https://cdn.pixabay.com/photo/2012/04/10/23/04/vietnam-26834_960_720.png" />
                        <Typography className={classes.header__text}>VND</Typography>
                        <ExpandMoreIcon />
                        <Box className={classes.select_language}>
                            <Grid container className={classes.select_language_box}>
                                <Grid item md={6} xs={12} className={classes.select_language_border}>
                                    <Box className={classes.select_lang_currency}>
                                        <Avatar className={classes.small} alt="VietNam" src="https://cdn.pixabay.com/photo/2012/04/10/23/04/vietnam-26834_960_720.png" />
                                        <Typography color="textPrimary" variant="overline">Tiếng Việt</Typography>
                                    </Box>
                                    <Box className={classes.select_lang_currency}>
                                        <Avatar className={classes.small} alt="VietNam" src="https://cdn.pixabay.com/photo/2017/02/06/15/09/america-flag-2043285_960_720.png" />
                                        <Typography color="textPrimary" variant="overline">Tiếng Anh</Typography>
                                    </Box>

                                </Grid>


                                <Grid item md={6} xs={12}>
                                    <Box className={classes.select_lang_currency}>
                                        <Typography color="textPrimary" variant="overline">VND</Typography>
                                        <Typography color="textPrimary" variant="overline">Việt Nam Đồng</Typography>

                                    </Box>
                                    <Box className={classes.select_lang_currency}>
                                        <Typography color="textPrimary" variant="overline">USA</Typography>
                                        <Typography color="textPrimary" variant="overline">Dollar USA</Typography>

                                    </Box>

                                </Grid>

                            </Grid>
                        </Box>


                    </Box>
                </div>
                <div className={classes.header_right_repon}>
                    <MenuIcon />
                </div>






            </React.Fragment>
        </div >


    )
}