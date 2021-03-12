import React from 'react';
import RangeDate from '../RangeDate/RangeDate';
// import ButtonBase from '@material-ui/core/ButtonBase';
import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import Box from '@material-ui/core/Box';
// import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
// import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
// import CancelIcon from '@material-ui/icons/Cancel';
// import CheckIcon from '@material-ui/icons/Check';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
// import Category from '../Category/Category';
// import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import RangeDateBlock from '../RangeDateBlock/RangeDateBlock';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import {useHistory} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({

    header_left: {
        width: '700px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    header_logo: {
        width: '10%',
    },
    header_input: {
        display: 'flex',
        justifyContent: 'space-between',
        minHeight: '50%',
        maxHeight: '50%',
        backgroundColor: '#F5F5F5',
        width: '90%',
        borderRadius: '8px',
        minWidth: '490px',
    },
    boxSearch: {
        width: '50%',
        minWidth: '40%',
        display: 'flex',
        alignItems: 'center',
        '&:focus-within': {
            border: '2px solid #605959',
            borderRadius: '8px',
        }
    },
    divider: {
        height: 32,
        marginTop: 5,
    },
    button_date: {
        width: '15%',
        position: 'relative',

        '&:focus-within': {
            border: '2px solid #605959',
            borderRadius: '8px',
            "& $header_select_date": {
                display: 'inline-block',
            }
        },

    },
    header_select_date: {
        position: 'absolute',
        width: '700px',
        height: '350px',
        backgroundColor: '#FFFFFF',

        top: '140%',
        display: 'none',
        borderRadius: '5px',
        // border: '1px solid #c6c9d1',
        '&:before': {
            content: '""',
            top: '-8px',
            right: '52%',
            transform: 'rotate(45deg)',
            height: '15px',
            width: '15px',

            borderTop: '1px solid #c6c9d1',
            borderLeft: '1px solid #c6c9d1',
            position: 'absolute',
            background: '#fff',
        },




    },

    button_slot: {
        width: '25%',
        position: 'relative',
        '&:focus-within': {
            border: '2px solid #605959',
            borderRadius: '8px',
            "& $select_slot": {
                display: 'inline-block',
            }
        },


    },
    select_slot: {
        position: 'absolute',
        width: '320px',
        height: '230px',
        backgroundColor: '#FFFFFF',
        top: '140%',
        left: 0,

        display: 'none',
        borderRadius: '5px',
        border: '1px solid #c6c9d1',
        '&:before': {
            content: '""',
            top: '-8px',
            left: '10%',
            transform: 'rotate(45deg)',
            height: '15px',
            width: '15px',

            borderTop: '1px solid #c6c9d1',
            borderLeft: '1px solid #c6c9d1',
            position: 'absolute',
            background: '#fff',
        },
    },
    select_slot_object: {
        width: '90%',
        height: '25%',
        paddingTop: '25px',

        display: 'flex',
        margin: 'auto',
        justifyContent: 'space-between'

    },
    slot_object_amount: {
        width: '40%',
        display: 'flex',
        justifyContent: 'space-between',
        // paddingBottom: '5px',

    },
    // ---------------------------------

    button_search: {
        width: '10%',

    },
    button_searchIcon: {
        // padding        : '15px 5px 5px 5px',
        width: '50px',
        height: '30px',
        backgroundColor: '#DADADA',
        borderRadius: '3px',
    },
    //////////////////////////////////////////////////////////////Het header_left

    // ----------------------code button cancel check
    button_cancel_check: {
        width: '100%',
        display: 'flex',
        textAlign: 'right',
        justifyContent: 'flex-end',
        marginBottom: '5px',

    },
    button_cancel: {
        marginRight: '15px',
        paddingTop: '2px',

    },
    button_check: {
        padding: '3px 10px 0px 10px',
        backgroundColor: '#f77307',
        borderRadius: '30px',


    }

}));

export default function HeaderLeftInput() {
    const classes = useStyles();
    // const [selectedDate, handleDateChange] = React.useState<DateRange<Date>>([null, null]);
    const dispatch = useDispatch();
    const history = useHistory();
    const [adults, setAdults] = React.useState(1);
    const [children, setChildren] = React.useState(0);
    const [infant, setInfant] = React.useState(0);
    const [hidden, setHidden] = React.useState(false);
    const removeAdults = () => {
        if (adults > 0) {
            setAdults(adults - 1);
        }
    };
    const addAdults = () => {
        setAdults(adults + 1)
    };
    const removeChildren = () => {
        if (children > 0) {
            setChildren(children - 1);
        }
    };
    const addChildren = () => {
        setChildren(children + 1)
    };
    const removeInfant = () => {
        if (infant > 0) {
            setInfant(infant - 1);
        }
    };
    const addInfant = () => {
        setInfant(infant + 1)
    };
    function clickHidden() {
        setHidden(!hidden);
    }
    function clickHidden2() {
        setHidden(false);
    }
    function huyPeople() {
        setChildren(0);
        setInfant(0);
        setAdults(0);
    }
    // ---------------------------
    const [searchKey, setSearchKey] = React.useState({
        search: '',
        startDate: null,
        endDate: null,
        adults: 1,
        children: 0,
        infant: 0,
    });
    function onChangeSearchKey(e) {
        const { name, value } = e.target;
        setSearchKey({ ...searchKey, [name]: value });
    }

    function getData(data) {
        const checkIn = moment(data.startDate).format('DD-MM-YYYY');
        const checkOut = moment(data.endDate).format('DD-MM-YYYY');
        setSearchKey({
            ...searchKey,
            startDate: checkIn,
            endDate: checkOut,

        })
    }
    function setPeople() {
        setSearchKey({
            ...searchKey,
            adults,
            children,
            infant,

        })
    }
    const setSearch = (e) => {
        e.preventDefault();
        
        dispatch({
            type: "SEARCH_SUCCESS",
            payload: ({
                search: searchKey.search,
                startDate: searchKey.startDate,
                endDate: searchKey.endDate,
                adults: searchKey.adults,
                children: searchKey.children,
                infant: searchKey.infant,
            })
        });
        dispatch({
            type:"HUY_SEARCH_ADV",
        });
        clickHidden2();
        // history.push(`/search?\`${searchKey.search ? 'key'}\``);
        history.push(`/search?${searchKey.search ? `key=${searchKey.search}` : ''}${searchKey.startDate ? `&checkIn=${searchKey.startDate}` : ''}${searchKey.endDate ? `&checkOut=${searchKey.endDate}` : ''}${searchKey.adults > 1 ? `&adults=${searchKey.adults}` : ''}${searchKey.children ? `&children=${searchKey.children}` : ''}${searchKey.infant ? `&infant=${searchKey.infant}` : ''}`)
        
    }
    // const m = moment(searchKey.startDate);
    // console.log("🚀 ~ file: HeaderLeftInput.js ~ line 249 ~ HeaderLeftInput ~ searchKey", m.format('DD-MM-YYYY'));

    return (

        <div className={classes.header_left}>
            <div className={classes.header_logo}>
                <Link to="/">
                    <Avatar alt="" src="image/logo_hotel.png" style={{ cursor: "pointer" }} />
                </Link>
            </div>
            <div className={classes.header_input}>
                <Box className={classes.boxSearch} >
                    <SearchIcon color='disabled' />
                    <InputBase
                        name="search"
                        value={searchKey.search}
                        className={classes.input}
                        placeholder="Search"
                        inputProps={{ 'aria-label': 'search' }}
                        onChange={onChangeSearchKey}
                    />
                </Box>
                <Divider className={classes.divider} orientation="vertical" />

                <Button
                    className={classes.button_date}
                    startIcon={<CalendarTodayIcon />}
                    onClick={clickHidden}
                >
                    Ngày
                                    {/* <Box className={classes.header_select_date}> */}
                    <div style={{ position: 'absolute', top: '150%', visibility: `${hidden === false ? 'hidden' : 'visible'}` }}>
                        <RangeDateBlock sendData={getData} />
                    </div>
                    {/* </Box> */}

                </Button>
                <Divider className={classes.divider} orientation="vertical" />
                <Button
                    className={classes.button_slot}
                    startIcon={<PeopleAltIcon />}
                    onClick={clickHidden2}

                >
                    Số khách
                                        <Box className={classes.select_slot}>
                        <Box className={classes.select_slot_object}>
                            <Typography>Người lớn</Typography>
                            <Box className={classes.slot_object_amount}>
                                <RemoveCircleOutlineIcon fontSize="large" color="action" onClick={removeAdults} />
                                <Typography variant="h5">
                                    {adults}
                                </Typography>
                                <AddCircleOutlineIcon fontSize="large" color="action" onClick={addAdults} />

                            </Box>
                        </Box>
                        <Box className={classes.select_slot_object}>
                            <Typography >
                                Trẻ em <br />

                            </Typography>
                            <Box className={classes.slot_object_amount}>
                                <RemoveCircleOutlineIcon fontSize="large" color="action" onClick={removeChildren} />
                                <Typography variant="h5">
                                    {children}
                                </Typography>
                                <AddCircleOutlineIcon fontSize="large" color="action" onClick={addChildren} />

                            </Box>
                        </Box>
                        <Box className={classes.select_slot_object}>
                            <Typography >
                                Trẻ sơ sinh <br />

                            </Typography>
                            <Box className={classes.slot_object_amount}>
                                <RemoveCircleOutlineIcon fontSize="large" color="action" onClick={removeInfant} />
                                <Typography variant="h5">
                                    {infant}
                                </Typography>
                                <AddCircleOutlineIcon fontSize="large" color="action" onClick={addInfant} />

                            </Box>
                        </Box>
                        <Box className={classes.select_slot_object}>
                            <div className={classes.button_cancel_check}>
                                <Typography color="textSecondary" className={classes.button_cancel} onClick={huyPeople}>
                                    Hủy
                                        </Typography>
                                <Typography color="textSecondary" className={classes.button_check} onClick={setPeople}>
                                    Áp dụng
                                            </Typography>
                            </div>

                        </Box>
                    </Box>
                </Button>

                <Divider className={classes.divider} orientation="vertical" />

                <Button className={classes.button_search} onClick={setSearch}>
                    <SearchIcon
                        className={classes.button_searchIcon}
                    // color="white"
                    />
                </Button>


            </div>
        </div >



    )
}
