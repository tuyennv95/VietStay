import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
// import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const useStyles = makeStyles((theme) => ({
    cate_home: {
        width: '95%',
        margin: '0 auto',
        marginTop: '50px',
    },
    cate_home_title: {
    },
    title_welcome: {
        fontSize: '28px',
        fontWeight: 900,
        lineHeight: '35px',
        color: '#222222',
    },
    title_welcome2: {
        fontSize: '16px',
        fontWeight: 500,
        lineHeight: '24px',
        color: '#222222',
        marginTop: '15px',
    },
    title_login: {
        fontSize: '16px',
        fontWeight: 500,
        lineHeight: '24px',
        color: '#222222',
        marginTop: '10px',
    },
    // ----------------------------Het cate_home_title----------------------
    cate_home_card: {
        marginTop: '30px',

    },
    home_card_category: {
        width: '200px',
        height: '180px',
        '&:hover': {
            '& $home_card_title': {
                color: '#f65e39',
            }
        }
    },
    home_card_title: {
        color: 'gray',
        fontSize: '16px',
        lineHeight: '20px',
        fontWeight: 900,
        paddingLeft: '10px',
    },
    home_card_category_media: {
        width: '100%',
        height: '60%',

    },

}));
export default function CategoryHome() {
    const classes = useStyles();
    const isLogin = useSelector((state) => state.login);

    return (
        <React.Fragment >
            <div className={classes.cate_home}>
                <Box className={classes.cate_home_title}>
                    <Typography className={classes.title_welcome}>
                        Chào mừng đến với VietStay!
                </Typography>
                    <Typography className={classes.title_welcome2}>
                        Đặt chỗ ở, homestay, trải nghiệm và nhiều hơn nữa trên Vietstay.
                </Typography>
                    {isLogin?.isLogin
                        ?
                        null
                        :
                        <Typography className={classes.title_login}>
                            <Link to="/form/signin" style={{ marginRight: 5, color: 'black' }}>
                                Đăng nhâp,
            </Link>

                            <Link to="/form/signup" style={{ marginRight: 5, color: 'black' }}>
                                Đăng ký
            </Link >
                    để trải nghiệm !
           </Typography>
                    }
                </Box>
                <Box className={classes.cate_home_card}>
                    <Link to="/show" style={{ textDecoration: 'none' }}>

                        <Card className={classes.home_card_category}>
                            <CardActionArea>
                                <CardMedia
                                    height="120px"
                                    component="img"
                                    className={classes.home_card_category_media}
                                    image="https://cdn.luxstay.com/home/suggestion/location_6_1572858402.png"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography className={classes.home_card_title}>
                                        HomeStay
          </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Căn hộ dịch vụ & Biệt thự
          </Typography>
                                </CardContent>
                            </CardActionArea>

                        </Card>
                    </Link>
                </Box>
            </div>
        </React.Fragment>



    )
}

