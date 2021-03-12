import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import ShowRoomMyBooking from './ShowRoomMyBooking';
import { Grid, TextField, Box } from '@material-ui/core';
import './styles.css';
import axios from 'axios';
import {BASE_API} from '../../Constants/index';
import {useSelector} from 'react-redux';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
  my_booking_select: {
    margin: 'auto',
    border: 'none',
    outline: 'none',
    marginLeft: '15px',
    marginTop: '25px',
    padding: '0!important',
  },
  my_booking_select_status: {
    width: '200px',
    height: '100px',
    borderRadius: '15px',
    border: '1px solid #e2dede',
    backgroundColor: '#FFFFFF'
  },


  my_booking_select_month: {
    width: '400px',
    height: '100px',
    borderRadius: '15px',
    border: '1px solid #e2dede',
    backgroundColor: '#FFFFFF'
  },
  my_booking_select_date_month:{
    marginTop:'20px',
    display:'flex',
    justifyContent:'center',
  },
  my_booking_select_date_month_startDate:{
    border:'none',
    paddingLeft:'35px',
    '&:focus':{
      outline:'none',
    }
  },
  my_booking_select_date_month_endDate:{
    border:'none',
    paddingLeft:'35px',

    '&:focus':{
      outline:'none',
    }
  },
 
 
}));
export default function MyBooking() {
  const classes = useStyles();
  // const [state, setState] = React.useState({

  // });
  const top = [
    { id: '4', title: 'Tất cả đặt chỗ', },
    { id: '2', title: 'Đã thanh toán', },
    { id: '1', title: 'Chưa thanh toán', },
    { id: '3', title: 'Chờ Hủy', },
    { id: '0', title: 'Hủy', },
  
  ];

  // const handleChange = (event) => {

  //   const name = event.target.name;
  //   setState({
  //     ...state,
  //     [name]: event.target.value,
  //   });
  //   console.log(event.target.value)
  // };
  // ----------------------------------
  // const thang = new Date().getMonth();
  const [startDate, setStartDate] = useState(new Date('01-01-2021'));
  const [endDate, setEndDate] = useState(new Date());
  const [bills, setBills] = React.useState();
  const [id, setId] = React.useState(4);

  const userId = useSelector((state) => state.login.id)
  // console.log(userId)
  React.useEffect(()=>{
    axios.get(`${BASE_API}/bills?userId=${userId}&${id ==4 ? '' : `statusPayment=${id}`}`)
    .then((rep)=>{
      setBills(rep.data);
      const data = rep?.data.filter((item) => moment(item.createdAt).isBetween(startDate, endDate, 'month', '[]') === true)
      setBills(data)
    })
    .catch((err)=>{
      console.log("loi")
    })
  }, [id,startDate,endDate])
  
  
  // console.log(startDate, endDate)

  return (
    <>
    { (bills && (
    <div style={{ backgroundColor: '#F8F8F8', width:'100%', maxWidth:'1200px',minHeight:'100vh', height:'100%' }}>
      <Grid container>
        <Grid item md={3} xs={12} sm={12}>
          <Box className={classes.my_booking_select_status}>
            <FormControl variant="standard" className={classes.my_booking_select}>
              <Autocomplete
               getOptionSelected={(option, value) => option.id === value.id}
              //  defaultValue={0}
                // value={val}
                disableClearable={true}
                id="combo-box-demo"
                options={top}
                getOptionLabel={(option) => option.title}
                style={{ width: 170 }}
                renderInput={(params) => <TextField  {...params} />}
                // value={value}
                onChange={(event, newValue) => {
                  if (newValue) {
                    setId(newValue.id);
                  }
                }}
              />
            </FormControl>
          </Box>
        </Grid>
        <Grid item md={9} xs={12} sm={12}>
          <Box className={classes.my_booking_select_month}>
            <div className={classes.my_booking_select_date_month}>
              <div className="startDate">
                <Typography style={{color:'gray', paddingLeft:'20px'}}>Từ</Typography>
                
              <DatePicker
                className={classes.my_booking_select_date_month_startDate}
                selected={startDate}
                onChange={date => setStartDate(date)}
                selectsStart
                startDate={
                    startDate
                }
                endDate={endDate}
                dateFormat="MM/yyyy"
                showMonthYearPicker
              />
              </div>
            
              <div className="endDate">
              <Typography style={{color:'gray', paddingLeft:'20px'}}>đến</Typography>

              
              <DatePicker
                className={classes.my_booking_select_date_month_endDate}

                selected={endDate}
                onChange={date => setEndDate(date)}
                selectsEnd
                startDate={
                  startDate
               }
                endDate={endDate}
                dateFormat="MM/yyyy"
                showMonthYearPicker
              />
              </div>

              
              
            </div>
          </Box>
        </Grid>
      </Grid>
      <Divider light style={{marginTop:'50px', marginBottom: '50px'}}/>
      { 
        bills.map((bill) =>

          <ShowRoomMyBooking key={bill._id} item={bill}/>

        )
      }
      
      
    </div>
    ) || null )}
    </>
  )
}


