import React from 'react';
import './styles.css';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import Box from '@material-ui/core/Box';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Tooltip from '@material-ui/core/Tooltip';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
// import StarIcon from '@material-ui/icons/Star';
// import StarHalfIcon from '@material-ui/icons/StarHalf';
import Rating from '@material-ui/lab/Rating';
import Pagination from '@material-ui/lab/Pagination';
import RoomItem from './RoomItem';
import Load from '../Load/Load';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { BASE_API } from 'Constants/index';
import thunk from 'redux-thunk';
import { isLogin } from 'utils/index';






const useStyles = makeStyles((theme) => ({


    mainShowRoom: {
        marginTop: '25px',
        width: '95%',
        margin: 'auto',
    },
    formControl: {
        margin: theme.spacing(1),
        borderRadius: '5px',
        border: '1px solid rgba(209, 127, 127, 0.571)!important',

    },
    selectEmpty: {
        marginTop: theme.spacing(0),
    },
    show_room: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',


    },
    details_room: {

        [theme.breakpoints.up('1180')]: {
            maxWidth: '19%',

        },
        [theme.breakpoints.down('1180')]: {
            maxWidth: '24%',

        },
        [theme.breakpoints.down('960')]: {
            maxWidth: '50%',

        },
        marginTop: '15px',


    },
    species_room: {
        color: '#888888',
        fontWeight: '700',
    },
    room_link_detail: {
        display: 'flex',
    },
    name_room: {
        color: '#222',
        fontSize: '16px',
        lineHeight: '24px',
        fontWeight: '900',
        maxHeight: '52px',
        display: 'block -webkit-box',
        '-webkit-line-clamp': 2,
        '-webkit-box-orient': 'vertical',

        // display: '-webkit-box',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        '&:hover': {
            color: '#f65e39',
            textDecoration: 'none',

        }
    },
    room_icon_fast: {
        fontSize: '20px',
        padding: '1px',
        backgroundColor: '#f65e39',
        borderRadius: '50%',
        display: 'inline-block',
        color: '#ffffff',
        marginRight: '5px',
    },
    room_price: {
        color: '#222222',
        fontSize: '14px',
        lineHeight: '21px',
        fontWeight: '900',
        paddingTop: '5px',
    },
    room_location: {
        color: '#222222',
        fontSize: '14px',
        lineHeight: '21px',
        fontWeight: '500',
    },
    room_vote_start: {
        color: '#FFB025',
        fontSize: '14px',
        lineHeight: '21px',
    },
    pagination_room: {
        marginTop: '70px',
        width: '27%',
        margin: ' 0px auto',
    },

}));

export default function ListProducts({ data = [] }) {
    const classes = useStyles();
    const [rooms, setRooms] = React.useState();
    const [open, setOpen] = React.useState(null);


    React.useEffect(() => {
        setOpen(true);

        setTimeout(() => {
            setOpen(false);
        }, 2000)
    }, []);

    // React.useEffect(()=>{
    //     const list1 = search.checkedChungCu == true ? data.filter((room)=> room.house_type === 'CanHoChungCu') : {data};
    //     const list2 = search.checkedBietThu == true ? list1.filter((room) => room.house_type === 'BietThu') : list1;

    //     setRooms(list1)
    // },[search])
    // console.log(rooms);
    // const list  = data.filter((room)=> room.house_type === 'BietThu');

    // console.log(list)
    const idUser = useSelector((state) => state.login.id);
    const [listLove, setListLove] = React.useState(null);
    const dispatch = useDispatch();
    // React.useEffect(() => {
    //     async function fechData() {
    //         const arrLove = await axios.get(`${BASE_API}/users/${idUser}`)
    //         // console.log(arrLove);
    //         // setListLove(arrLove.data.roomLove);
    //         await dispatch({
    //             type:"CREATE",
    //             payload: arrLove?.data?.roomLove,
    //         })
    //         // console.log(arrLove?.data?.roomLove)

    //         // for (let i = 0; i < arrLove?.data?.roomLove?.length; i++) {
    //         //     const element = await arrLove?.data?.roomLove[i];
    //         //     if (element === item.id) {
    //         //         setLove(true);
    //         //         // console.log(element, item.id)
    //         //         console.log(love)
    //         //     }
    //         // }

    //     }
    //     fechData();
    // },[])
    const listRoomRedux = useSelector((state) => state.love);

    React.useEffect(() => {
        async function getData() {
            const list = await axios.get(`${BASE_API}/users/${idUser}`)
            dispatch({
                type: "CREATE",
                payload: list?.data?.roomLove,
            })
          
        }
            getData();

        // }
    }, [idUser])
    React.useEffect(() => {
        axios.put(`${BASE_API}/users/${idUser}`, {
            roomLove: [...listRoomRedux]
        })


    })
    // console.log(listRoomRedux)
    return (
        <React.Fragment >
            <div className={classes.mainShowRoom}>
                {/* <Grid container spacing={3}>
                    <Grid item md={6} xs={12} sm={8}>
                        <Typography variant="h5">
                            {data.length} homestay nổi bật tại VietStay!
                </Typography>
                    </Grid>
                    <Grid item md={6} xs={12} sm={4} align="right">
                        <FormControl className={classes.formControl}>
                            <Box>

                                <NativeSelect
                                    value={state.sort}
                                    onChange={handleChange}
                                    name="sort"
                                    className={classes.selectEmpty}
                                    inputProps={{ 'aria-label': 'sort' }}
                                >

                                    <option value="">Sắp xếp</option>

                                    <option value={20}>Giá tăng dần</option>
                                    <option value={30}>Giá giảm dần</option>
                                </NativeSelect>
                            </Box>
                        </FormControl>
                    </Grid>
                </Grid> */}
                {/* ------------------------------------------------------------------------------------ */}
                <Box className={classes.show_room}>

                    {
                        open === true ? <Load /> :
                            data?.map((room) =>

                                <RoomItem key={room._id} item={room} />


                            )
                    }




                </Box>
                {/* <Box className={classes.pagination_room}>
                    <Pagination count={10} color="secondary" />

                </Box> */}

            </div>
        </React.Fragment >


    )
}