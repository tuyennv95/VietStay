import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
const useStyles = makeStyles((theme) => ({
    IntroAbout: {
        width: '95%',
        margin: '0 auto',
        height: '570px',
        marginTop: '80px',
    },
    IntroAbout_text: {
        // backgroundColor: 'red',
    },
    // IntroAbout_img: {
    // },
    intro_about_text_1: {
        fontSize: '50px',
        lineHeight: '24px',
        fontWeight: 700,
        color: '#222222',
    },
    intro_about_text_2: {
        fontSize: '30px',
        lineHeight: '38px',
        fontWeight: 'bold',
        color: '#222222',
        marginTop: '35px',
    },
    intro_about_text_3: {
        fontSize: '16px',
        lineHeight: '24px',
        fontWeight: 500,
        color: '#222222',
        marginTop: '30px',
        width: '95%',

    },

    IntroAbout_img: {
        backgroundColor: 'blue',

        '& $img': {
            width: '570px',
            height: '100%',
            objectFit: 'cover',
        }
    },
    intro_app_setup: {
        width: '140px',
        height: '40px',

    }

}));
export default function IntroAbout() {
    const classes = useStyles();


    return (
        <Box className={classes.IntroAbout}>
            <Grid container spacing={1}>
                <Grid item md={6} xs={12} sm={12} className={classes.IntroAbout_text}>
                    <Typography className={classes.intro_about_text_1}>
                        VietStay
                    </Typography>
                    <Typography className={classes.intro_about_text_2}>
                        TÌM KIẾM CHỖ Ở GIÁ TỐT NHẤT
                    </Typography>
                    <Typography className={classes.intro_about_text_3}>
                        VietStay hiện là nền tảng đặt phòng trực tuyến #1 Việt Nam. Đồng hành cùng chúng tôi, bạn có những chuyến đi mang đầy trải nghiệm. Với Luxstay, việc đặt chỗ ở, biệt thự nghỉ dưỡng, khách sạn, nhà riêng, chung cư... trở nên nhanh chóng, thuận tiện và dễ dàng.
                    </Typography>


                    <Grid container spacing={1} style={{ marginTop: '25px', width: '80%', margin: 'auto' }}>
                        <Grid item md={8} xs={12} sm={12}>
                            <Link>
                                <img alt="" className={classes.intro_app_setup} src="https://www.luxstay.com/icons/apple-store.svg"></img>
                            </Link>
                        </Grid>
                        <Grid item md={4} xs={12} sm={12}>
                            <Link>
                                <img alt="" className={classes.intro_app_setup} src="https://www.luxstay.com/icons/google-play.svg"></img>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={6} xs={12} sm={12} className={classes.IntroAbout_img}>
                    <img alt="" className={classes.intro_about_img_} src="https://www.luxstay.com/home/home-02.png"></img>
                </Grid>
            </Grid>

        </Box>
    )
}