import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import HeaderLeftInput from '../HeaderLeftInput/HeaderLeftInput';
import HeaderRight from '../HeaderRight/HeaderRight';
import CssBaseline from '@material-ui/core/CssBaseline';

// import RangeDate from '../RangeDate/RangeDate';
// import ButtonBase from '@material-ui/core/ButtonBase';
// import Avatar from '@material-ui/core/Avatar';
// import SearchIcon from '@material-ui/icons/Search';
// import InputBase from '@material-ui/core/InputBase';
// import Button from '@material-ui/core/Button';
// import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
// import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
// import Box from '@material-ui/core/Box';
// import Divider from '@material-ui/core/Divider';
// import Link from '@material-ui/core/Link';
// import Typography from '@material-ui/core/Typography';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
// import CancelIcon from '@material-ui/icons/Cancel';
// import CheckIcon from '@material-ui/icons/Check';
// import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
// import Category from '../Category/Category';
// import MenuIcon from '@material-ui/icons/Menu';







const useStyles = makeStyles((theme) => ({

    header: {
        minHeight: '80px',
        maxHeight: '95px',
        backgroundColor: '#FFFFFF',
        position: 'fixed',
        // position: 'sticky',

    },
    header__toolbar__left: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: '80px'
    },
    header_right: {
        display: 'flex',
        justifyContent: "flex-end",
        alignItems: "center"
    },
}));

export default function Header() {
    const classes = useStyles();
    // const [selectedDate, handleDateChange] = React.useState<DateRange<Date>>([null, null]);




    return (
        <div>
            <React.Fragment>
                <CssBaseline />
                <AppBar className={classes.header}>
                    <Toolbar>
                        <Grid container spacing={0} >
                            <Grid item md={6} sm={10} xs={10} className={classes.header__toolbar__left}>
                                <HeaderLeftInput />
                            </Grid>
                            <Grid item md={6} sm={2} xs={2} className={classes.header_right} >
                                <HeaderRight />
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>


            </React.Fragment>
        </div>


    )
}