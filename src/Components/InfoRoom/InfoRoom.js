import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Switch from '@material-ui/core/Switch';
import Collapse from '@material-ui/core/Collapse';
import { Typography, Avatar, SvgIcon } from '@material-ui/core';
import ApartmentRoundedIcon from '@material-ui/icons/ApartmentRounded';
import { roomInfoIpi } from '../../Services/Api';
import axios from 'axios';
import { BASE_API } from '../../Constants/index';
const useStyles = makeStyles((theme) => ({
    show: {
        height: 700,
    },
    hide: {
        height: 180,
    },
    container: {
        display: 'flex',
    },
    paper: {
        margin: theme.spacing(1),
    },
}));

function PositionIcon(props) {
    return (
        <SvgIcon style={{ marginRight: 5 }}  {...props}>
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </SvgIcon>
    );
}

export default function SimpleCollapse(props) {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(false);
    const [room, setRoom] = React.useState([]);
    const id = props.roomId;
    const handleClick = () => {
        // console.log("da click");
    }
    const handleChange = () => {
        setChecked((prev) => !prev);
    }
    React.useEffect(() => {
        roomInfoIpi(id).then(response => {
            setRoom(response?.data);
        })
            .catch((erorr) => {
                console.log("Looix roi");
            })


    }, [])
    // console.log(id)
    // console.log(room?.people_max)
    const [idType, setIdType] = React.useState();
    const [idQuan, setIdQuan] = React.useState();
    const [idTinh, setIdTinh] = React.useState();
    React.useEffect(() => {
        axios.get(`${BASE_API}/house-for-rents/${id}`)
            .then((response) => {
                setIdType(response?.data?.id_typehouse)
                setIdQuan(response?.data?.districts_id)
                setIdTinh(response?.data?.provinces_id)
            })

    },[])
    const [type, setType] = React.useState();
    React.useEffect(() => {
        // if (idType) {
            axios.get(`${BASE_API}/type-rooms/${idType}`)
                .then((response) => {
                    // console.log(response.data)
                    setType(response?.data?.name)
                })
        // }

    }, [idType])
    const [quan,setQuan] = React.useState();
    React.useEffect(() => {
     axios.get(`${BASE_API}/districts?district_id=${idQuan}`)
     .then((response) => {
        //  console.log(response.data)
         setQuan(response?.data[0]?.district_name)

     })
    },[idQuan])
    const [tinh,setTinh] = React.useState();
    React.useEffect(() => {
     axios.get(`${BASE_API}/provinces?province_id=${idTinh}`)
     .then((response) => {
        //  console.log(response.data)
         setTinh(response?.data[0]?.province_name)

     })
    },[idTinh])

    return (
        <div>
            <div style={{ display: 'flex' }}>
                <Typography variant="h4" gutterBottom>
                    {room.house_name}
                </Typography>
                {/* <Avatar alt="Avatar" src="https://material-ui.com/static/images/avatar/3.jpg" className={classes.large} /> */}
            </div>
            <div>
                <div style={{ display: 'flex' }}>
                    <PositionIcon fontSize="large" />
                    <Typography variant="subtitle1" gutterBottom style={{ paddingTop: "10px" }}>
                        {room.address_ward}, {quan}, {tinh}, Việt Nam
                            </Typography>
                    {/* <Typography variant="subtitle1" onClick={handleClick} style={{ paddingLeft: 10 }} gutterBottom>
                        Xem bản đồ
                            </Typography> */}
                </div>
                <div style={{ display: 'flex', alignSelf: 'center' }}>
                    <ApartmentRoundedIcon fontSize="large" />
                    <Typography variant="subtitle1" gutterBottom style={{ paddingTop: "10px" }}>
                        {type} - 
                    </Typography>
                    <Typography variant="subtitle1" onClick={handleClick} style={{ paddingLeft: 10, paddingTop: '10px' }} gutterBottom>
                        {room?.acreage} m2
                            </Typography>
                </div>
            </div>
            <Typography variant="subtitle1" gutterBottom>
                Nguyên căn · {room.number_of_bathroom} Phòng tắm · {room.number_of_bedroom} phòng ngủ · {room.bed_number} giường · {room.people_number} khách · {room.people_max ? `(tối đa ${room.people_max} khách)` : `(tối đa ${room.people_number} khách)`}
            </Typography>
            <div className={`x${checked ? 'show' : 'hide'}`}>
                <div className={classes.container}>
                    <Collapse in={checked} collapsedHeight={135}>
                        <Typography variant="subtitle1" gutterBottom>
                            {room.description}
                        </Typography>
                    </Collapse>

                </div>
                <h3 onClick={handleChange} style={{ color: 'orange' }}>{
                    checked === false ? "Đọc thêm" : "Thu gọn"
                }</h3>
            </div >
        </div>
    );
}