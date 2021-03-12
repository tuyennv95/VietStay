import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Toolbar, Grid, AppBar, Typography, Box, CardMedia } from '@material-ui/core';
import SimpleTabs from '../../Components/SimpleTabs/SimpleTabs';
import { useSelector } from 'react-redux';
import queryString from 'query-string';
import {Link} from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
    header: {
        height: '85px',
        // width:'95%',
        // margin:'0px auto',
        backgroundColor: '#FFFFFF',
        position: 'static',
    },
    header_right: {
        display: 'flex',
        justifyContent: 'space-around',

    },
    header_text_title: {
        fontSize: '12px',
        lineHeight: '18px',
        fontWeight: 700,
        color: '#999999',
    },
    header_text_name: {
        fontSize: '16px',
        lineHeight: '24px',
        fontWeight: 700,
        color: '#333333'
    },
    page_user_tab: {
        width: '100%',
        margin: 'auto',
        border: 'none',
        outline: 'none',
        // height:'100%',
    },
    media: {
        height: '3.3rem',
        width: '251px',
        cursor: "pointer",
    }
}));
export default function PageUser(props) {
    const classes = useStyles();
    // const [value, setValue] = React.useState(0);

    // const handleChange = (event, newValue) => {
    //     setValue(newValue);
    // };
    const user = useSelector((state) => state.login);
    const param = props.location.pathname;
    const valueParam = param.substring(4, param.length)
    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, [])
    return (
        <>
            {(user && (
                <div style={{ height: '100%',width:'100%',maxWidth:'1440px' }}>
                    <React.Fragment>
                        <AppBar className={classes.header}>
                            <Toolbar>
                                <Grid container spacing={0} >
                                    <Grid item md={8} sm={10} xs={10} className={classes.header__toolbar__left}>
                                        <Link to="/">
                                            <CardMedia
                                                className={classes.media}
                                                image="https://lh3.googleusercontent.com/pw/ACtC-3fOEOiDdSxg3GE9iAIWHuOkr4k-hjVrpzYQV9AZOf3n-nF9SaE9QHgBV4NlvdSi1HK-3O8J-X1WwFO0vTDJJPTPmeqCD5oIRUwclJqq5nT3WwkNtNDtxXgvuG4Nl8AhHtbobs3I36go7makj8GTegc=s200-no?authuser=0"
                                                title="Logo"
                                            />
                                        </Link>
                                    </Grid>
                                    <Grid item md={4} sm={2} xs={2} className={classes.header_right} >
                                        <Typography className={classes.header_text_title}>
                                            Hôm nay
                                        <Typography className={classes.header_text_name}>
                                                XX/XX/XXXX
                                        </Typography>
                                        </Typography>
                                        <Typography className={classes.header_text_title}>
                                            Tài khoản
                                        <Typography className={classes.header_text_name}>
                                                {user?.username}
                                            </Typography>
                                        </Typography>
                                    </Grid>
                                </Grid>

                            </Toolbar>

                        </AppBar>

                        <Box className={classes.page_user_tab}>
                            <SimpleTabs value={valueParam} user={user} />
                        </Box>
                    </React.Fragment>
                </div>
            ) || null)}
        </>
    );

}

