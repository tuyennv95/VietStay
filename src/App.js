import React from 'react';
import Router from './Router/Router';
import { Provider } from 'react-redux';
import { store } from './Redux-setup/store';
import Payment from 'Components/Payment/Payment';
import axios from 'axios';
import moment from 'moment';
import { BASE_API } from './Constants/index';
import {isLogin} from 'utils/index';
import {useDispatch} from 'react-redux';
function App() {
  var today = new Date();
  const [data, setData] = React.useState();
  React.useEffect(() => {
    axios.get(`${BASE_API}/bills?statusPayment=2`)
      .then((response) => {
        setData(response.data);
        response?.data?.map((bill) => {
          var check = moment(today).isBetween(bill?.checkIn, bill?.checkOut, 'day', '()');
          axios.put(`${BASE_API}/house-for-rents/${bill.houseId}`, {
            status: check === true ? true : false,
          })
        })
      })
  }, [])
  React.useEffect(() => {
    axios.get(`${BASE_API}/bills?statusPayment=1`)
      .then((response) => {
        response?.data.map((bill) => {
          var check = moment(today).isSameOrAfter(bill?.checkIn);
          axios.put(`${BASE_API}/bills/${bill?.id}`, {
            statusPayment: check === true ? 0 : 1,
          })
        })
      })

  }, [])
  const dispatch = useDispatch();
  React.useEffect(()=>{
    if(isLogin() != true){
        // dispatch({
        //   type: "LOGOUTLOVE",
        // })

    }
  },[])
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  


  return (
      <Provider store={store}>
        <Router />
      </Provider>

  );
}


export default App;
