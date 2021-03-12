import React from 'react';
// import 'date-fns';
// import DateFnsUtils from '@date-io/date-fns';

import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Box, Button, Typography, InputBase, RadioGroup, FormControlLabel, Radio } from '@material-ui/core';
// import {
//     KeyboardDatePicker,
//     MuiPickersUtilsProvider
// } from '@material-ui/pickers';
import './styles.css';
import { roomInfoIpi } from '../../Services/Api';
import axios from 'axios';
import {BASE_URL} from '../../Constants/index';
import {BASE_API} from '../../Constants/index';
const useStyles = makeStyles((theme) => ({
    input: {
        display: 'none',
    },
    edit_infor: {
        width: '100%',
    },
    edit_infor_edit_avatar: {
        display: 'flex',
    },
    edit_infor_avatar: {
        width: '80px',
        height: '80px',
    },
    edit_infor_item: {
        marginTop: '30px',
    },
    edit_infor_input_text: {
        fontSize: '16px',
        fontWeight: 700,
        lineHeight: '24px',
        color: '#666666',
    },
    edit_infor_input: {

        width: '100%',
        height: '40px',
        marginTop: '10px',
        borderRadius: '5px',
        backgroundColor: '#E7E7E7',
        boxShadow: 'inset 0 1px 2px 0 rgba(0,0,0,.15)!important',
        paddingLeft: '20px',
        transition: '0.3s',
        '&:focus-within': {
            backgroundColor: '#FFFFFF'
        }
    },
    edit_infor_input2: {

        width: '100%',
        height: '40px',
        marginTop: '10px',
        borderRadius: '5px',
        backgroundColor: '#E7E7E7',
        boxShadow: 'inset 0 1px 2px 0 rgba(0,0,0,.15)!important',
        paddingLeft: '20px',

        transition: '0.3s',
        paddingBottom: '10px',
    },
    edit_infor_gender: {
        display: 'flex',
        width: '100%',
        height: '40px',
        marginTop: '10px',
    }
}));
export default function EditInfor(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState('female');

    // const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));


    // const handleDateChange = (date) => {
    //     setSelectedDate(date);
    // };
    const user = props?.user;
    const [userData, setUserData] = React.useState();
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const token = user?.jwt;
    React.useEffect(() => {
        axios.get(`http://localhost:1337/users/me`,{
            headers: {
            Authorization: `Bearer ${token}`,
        },
        })
            .then(response => {
                setUserData(response?.data)

            }).catch((error) => {
                console.log('loix')
            })
    }, []);
    const [selectFile, setSelectFile] = React.useState(null)
    function upload(e){
        setSelectFile(e.target.files[0])
    }
function setCapNhat(){
    const data = new FormData();
    data.append('files', selectFile)
    axios.post(`${BASE_API}/upload`, data)
    .then((response)=>{
    })
}

    return (
        <>
        {(userData && (
        <div className={classes.edit_infor}>
            <Box className={classes.edit_infor_edit_avatar} style={{ padding: 0 }}>
                <Avatar src={`${userData.avatar ? `${BASE_URL}${userData.avatar.url}` : ''}`} className={classes.edit_infor_avatar}></Avatar>
                <div>
                    <input
                        accept="image/*"
                        className={classes.input}
                        id="contained-button-file"
                        multiple
                        type="file"
                        name="file"
                        onChange={upload}
                    />

                    <label htmlFor="contained-button-file">
                        <Button variant="contained" color="primary" component="span" style={{ marginTop: '20px', marginLeft: '20px' }}>
                            Đổi ảnh đại diện
                        </Button>
                    </label>
                </div>
            </Box>
            <Box className={classes.edit_infor_item}>
                <Typography className={classes.edit_infor_input_text}>
                    Tên
                </Typography>
                <InputBase
                    className={classes.edit_infor_input}
                    defaultValue="Nguyễn"
                    inputProps={{ 'aria-label': 'name' }}
                    type='text'

                />
            </Box>

            {/* -------------------------------- */}


            <Box className={classes.edit_infor_item}>
                <Typography className={classes.edit_infor_input_text}>
                    Họ và tên đệm
                </Typography>
                <InputBase
                    className={classes.edit_infor_input}
                    defaultValue="T"
                    inputProps={{ 'aria-label': 'middle-name' }}
                    type='text'

                />
            </Box>

            {/* -------------------------------- */}

            <Box className={classes.edit_infor_item}>
                <Typography className={classes.edit_infor_input_text}>
                    Email
                </Typography>
                <InputBase
                    className={classes.edit_infor_input}
                    defaultValue="tuyennv.1995@gmail.com"
                    inputProps={{ 'aria-label': 'email' }}
                    type='email'

                />
            </Box>

            {/* -------------------------------- */}

            <Box className={classes.edit_infor_item}>
                <Typography className={classes.edit_infor_input_text}>
                    Số điện thoại


                </Typography>
                <InputBase
                    className={classes.edit_infor_input}
                    defaultValue="0989554045"
                    inputProps={{ 'aria-label': 'phone' }}
                    type='number'

                />
            </Box>

            {/* -------------------------------- */}

            <Box className={classes.edit_infor_item}>
                <Typography className={classes.edit_infor_input_text}>
                    Địa chỉ
                </Typography>
                <InputBase
                    className={classes.edit_infor_input}
                    defaultValue=""
                    inputProps={{ 'aria-label': 'address' }}
                    type='text'
                />
            </Box>

            {/* -------------------------------- */}

            {/* <Box className={classes.edit_infor_item}>
                <Typography className={classes.edit_infor_input_text}>
                    Ngày sinh
                </Typography>
                <div className={classes.edit_infor_input2} >
                   
                </div>
            </Box> */}

            {/* -------------------------------- */}

            <Box className={classes.edit_infor_item}>
                <Typography className={classes.edit_infor_input_text}>
                    Giới tính
                </Typography>
                <div className={classes.edit_infor_gender} >
                    <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange} >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </div>
            </Box>

            {/* -------------------------------- */}
            <Box className={classes.edit_infor_item} onClick={setCapNhat}>
                <Button variant="contained" color="secondary">Cập nhật</Button>
            </Box>

            {/* -------------------------------- */}


        </div>
    ) || null )}
    </>
    )
}
