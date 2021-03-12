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
import Tooltip from '@material-ui/core/Tooltip';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
// import StarIcon from '@material-ui/icons/Star';
// import StarHalfIcon from '@material-ui/icons/StarHalf';
import Rating from '@material-ui/lab/Rating';
import Pagination from '@material-ui/lab/Pagination';
import { BASE_URL } from '../../Constants/index';
import { BASE_API } from '../../Constants/index';
import * as axios from 'axios';
import { Link } from 'react-router-dom';
import slug from 'slug';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { isLogin } from 'utils/index';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { checkRole } from 'utils/index';


const useStyles = makeStyles((theme) => ({
    details_room: {

        [theme.breakpoints.up('1180')]: {
            maxWidth: '19%',
            // maxHeight: ''

        },
        [theme.breakpoints.down('1180')]: {
            maxWidth: '24%',

        },
        [theme.breakpoints.down('960')]: {
            maxWidth: '50%',

        },
        marginTop: '25px',
        position: 'relative',

    },
    hotBook: {
        position: 'absolute',
        zIndex: 999,
        width: '30px',
        height: '25px',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(255, 140, 0,0.9)',
        '&::after': {
            content: '""',
            position: 'absolute',
            left: 0,
            bottom: '-6px',
            borderWidth: '0 15px 6px',
            borderStyle: 'solid',
            borderColor: 'transparent rgba(255, 140, 0,0.9) transparent rgba(255, 140, 0,0.9)',
        }

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
    link_to_house_item: {
        color: '#2b2626',
        '&:hover': {
            color: 'ff0000',
        }
    }


}));

export default function RoomItem({ item }) {
    const classes = useStyles();
    const [lengthBill, setLengthBill] = React.useState(0);
    const [tinh, setTinh] = React.useState();
    const [quan, setQuan] = React.useState();

    const history = useHistory();



    const slugUrl = slug(item.house_name, { lower: false, locale: 'vi', replacement: '-', });
    const idUser = useSelector((state) => state.login.id);
    const [type, setType] = React.useState();
    React.useEffect(() => {
        axios.get(`${BASE_API}/type-rooms/${item.id_typehouse}`)
            .then((response) => {
                // console.log(response.data)
                setType(response.data.name)
            })
    }, [])
    React.useEffect(() => {
        axios.get(`${BASE_API}/districts?district_id=${item.districts_id}`)
            .then((response) => {
                setQuan(response.data[0].district_name)

            })
    }, [])
    React.useEffect(() => {
        axios.get(`${BASE_API}/provinces?province_id=${item.provinces_id}`)
            .then((response) => {
                setTinh(response.data[0].province_name)

            })

    }, [])
    React.useEffect(() => {
        axios.get(`${BASE_API}/bills?houseId=${item?.id}`)
            .then((res) => {
                setLengthBill(res.data.length)
            })
    }, [])



    const [love, setLove] = React.useState(false);
    // const [listLove, setListLove] = React.useState(null);
    const listLove1 = useSelector((state) => state.love);
    // console.log(listLove1)
    React.useEffect(() => {
        for (let i = 0; i < listLove1.length; i++) {
            const element = listLove1[i];
            if (element === item.id) {
                setLove(true);
                // console.log(element, item.id)
            }

        }
    }, [listLove1])



    // React.useEffect(() => {

    // }, [love])
    const id = item?.id;
    // console.log(id)
    const dispatch = useDispatch();
    function onChangeLove() {
        // console.log(item?.id);
        setLove(false)
        dispatch({
            type: "UNLOVE",
            payload: id,
        })




    }
    function onChangeUnLove() {
        if (isLogin()) {
            console.log(id)
            dispatch({
                type: "LOVE",
                payload: id,
            })
        }
        else {
            history.push("/form/signin")
        }



    }
    console.log(checkRole())
    return (
        <React.Fragment >

            <Card className={classes.details_room} >
                {lengthBill >= 1
                    ?
                    <div className={classes.hotBook}>
                        <h3 style={{ color: 'rgba(255, 0, 0,0.5)', fontSize: '15px' }}>TOP</h3>
                    </div>
                    : null
                }
                {love && love ?
                    <FavoriteIcon onClick={onChangeLove} style={{ position: 'absolute', zIndex: '999', top: '8px', right: '10px', cursor: "pointer", color: 'red', fontSize: '26px' }} />
                    :
                    <FavoriteBorderIcon onClick={onChangeUnLove} style={{ position: 'absolute', zIndex: '999', top: '8px', right: '10px', cursor: "pointer", color: 'gray', fontSize: '26px' }} />

                }


                <CardActionArea >

                    <CardMedia
                        component="img"
                        alt={item.house_name}
                        height="140"
                        image={`${BASE_URL}${item.img_avatar_house.url}`}
                    // title={}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="overline" className={classes.species_room}>
                            {/* {item.house_type === "CanHoChungCu"
                                ? "Căn Hộ Chung Cư"
                                : (item.house_type === "BietThu"
                                    ? "Biệt Thự"
                                    : (item.house_type === "CanHoStudio"
                                        ? "Căn Hộ Studio"
                                        : (item.house_type === "NhaRieng"
                                            ? "Nhà Riêng"
                                            : (item.house_type === "HomeStay"
                                                ? "HomeStay"
                                                : (item.house_type === "Khac"
                                                    ? "Khách Sạn && Nhà Nghỉ" : null)))))
                            } */}
                            {type}
                        </Typography>

                        <div className={classes.name_room}>
                            <Tooltip title="Đặt phòng ngay không cần chủ nhà phê duyệt">
                                <FlashOnIcon className={classes.room_icon_fast} />
                            </Tooltip>
                            <Link to={`/room/${slugUrl}.${item._id}`} className={classes.link_to_house_item}>
                                {item.house_name}
                            </Link>
                        </div>

                        <Typography variant="body2">
                            {item.people_max} khách · {item.number_of_bedroom} phòng ngủ · {item.number_of_bathroom} phòng tắm
                                     </Typography>
                        <Typography className={classes.room_price}>
                            {new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(item.price)}/đêm
                        </Typography>

                        {/* {checkRole() === 1 */}
                            
                            <Breadcrumbs separator="›" aria-label="breadcrumb">

                                <Link to={`/districts/${item?.districts_id}`} >
                                    <Typography className={classes.room_location}>
                                        {quan}
                                    </Typography>
                                </Link>
                                <Link to={`/provinces/${item?.provinces_id}`} >
                                    <Typography className={classes.room_location}>
                                        {tinh}

                                    </Typography>
                                </Link>
                                <Link
                                    to="/show"
                                >
                                    <Typography className={classes.room_location}>
                                        Việt Nam
                                    </Typography>
                                </Link>
                            </Breadcrumbs>
                            
                            {/* null} */}
                        {/* <Rating name="half-rating" defaultValue={2.5} precision={0.5} /> */}
                        {/* <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly size="small" /> */}


                    </CardContent>
                </CardActionArea>
            </Card>







        </React.Fragment >


    )
}
