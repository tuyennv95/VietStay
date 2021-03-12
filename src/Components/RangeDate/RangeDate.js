import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import React from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
const reactDates = require('react-dates/initialize');
import 'react-dates/lib/css/_datepicker.css';
import './styles.css';
import { START_DATE, END_DATE } from 'react-dates/src/constants';
import moment from 'moment';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import isInclusivelyAfterDay from 'react-dates/src/utils/isInclusivelyAfterDay';


export default function RangeDate(props) {
    const [startDate, setStartDate] = React.useState(null);
    const [endDate, setEndDate] = React.useState(null);
    const [bills, setBills] = React.useState([]);
    const [billsId, setBillsId] = React.useState();

    const [focusedInput, setFocusedInput] = React.useState(null);
    const [dropdownOpen, setDropdownOpen] = React.useState(false);
    const [kidsCount, setKidsCount] = React.useState(1);
    const [focusedInputLeftCol, setFocusedInputLeftCol] = React.useState(START_DATE);
    const [room, setRoom] = React.useState();

    //   redirectToTrips: false,
    //   focusedInputLeftCol: START_DATE,
    //   bookedDates: []

    //   }
    const dispatch = useDispatch();



    function onFocusChange() {
        setFocusedInputLeftCol(focusedInputLeftCol === START_DATE ? END_DATE : START_DATE);
    }
    function onDatesChange({ startDate, endDate }) {
        const daysViolatingMinNightsCanBeClicked = false;
        let minimumNights = 1;;
        let doesNotMeetMinNights = false;
        if (daysViolatingMinNightsCanBeClicked && startDate && endDate) {
            const dayDiff = endDate.diff(startDate.clone().startOf('day').hour(12), 'days');
            doesNotMeetMinNights = dayDiff < minimumNights && dayDiff >= 0;
        }
        setStartDate(startDate);
        setEndDate(doesNotMeetMinNights ? null : endDate);
        const checkIn = moment(startDate).format('DD-MM-YYYY');
        const checkOut = moment(endDate).format('DD-MM-YYYY');
        for (let i = 0; i < billsId.length - 1; i++) {
            // console.log(billsId[i]?.checkIn)
            // if (moment(billsId[i]?.checkIn).isBetween(checkIn, checkOut, 'day', '[]')){

            // console.log(billsId[i]?.checkIn, checkIn, checkOut)
        }
        dispatch({
            type: 'DATE_UPDATE',
            payload: {
                startDate: checkIn,
                endDate: checkOut,
            }
        });


    }




    // function dayBlocked() {

    // }
    const formatCash = n => {
        if (n < 1e3) return n;
        if (n >= 1e3) return +(n / 1e3).toFixed(1) + "K";
    };
    const id = props.roomId;
    React.useEffect(() => {
        axios.get(`http://localhost:1337/bills?houseId=${id}`)
            .then(response => {
                setBillsId(response.data);
            }).catch((error) => {
                console.log("lỗi");
            })
    }, [])
    // console.log(bills)

    React.useEffect(() => {
        axios.get(`http://localhost:1337/house-for-rents/${id}`)
            .then(response => {
                setRoom(response.data);
            }).catch((error) => {
                console.log("lỗi");
            })
    }, [id])
    React.useEffect(() => {
        axios.get("http://localhost:1337/bills?statusPayment_in=1&statusPayment_in=2")
        // axios.get("http://localhost:1337/bills")

            .then(response => {
                setBills(response.data);
            }).catch((error) => {
                console.log("lỗi");
            })
    }, [])
    // console.log(bills)
    const priceRoom = room?.price;
    function renderDayContents(day) {
        // return day.day();
        // if(1<= day.day() && day.day()<=5){
        return <div>
            <span style={{}}>{day.format('D')}</span><br />
            <span style={{ color: '#1aef48', fontSize: '9px' }}>{priceRoom ? formatCash(priceRoom) : null}</span>
        </div>;
        // }
        // else{
        //     return 'TG'
        // }
    };
    function dayBlocked(day) {
        for (let i = 0; i < bills.length; i++) {
            if (bills[i].houseId === id) {
                if (startDate
                    && startDate.isBefore(bills[i].checkIn, 'day')) {
                    if (day.isBetween(bills[i].checkIn, bills[i].checkOut, 'day', "[]")) {
                        return true;
                    }
                    else if (day.isAfter(bills[i].checkOut, 'day')) {
                        return true;
                    } else if (day.isSame(bills[i].checkOut, 'day')) {
                        return true;
                    };
                }
                // if (startDate && startDate.isSame(bills[i].checkIn, 'day')) {
                //     if(day.isAfter(startDate , 'day')){
                //         return true;
                //     }
                // }
                else {
                    if (day.isBetween(bills[i].checkIn, bills[i].checkOut, 'day', '[]')) {
                        return true;
                    }
                }

            }
        }
        return false;
    }



    const a = new Date();
    return (
        <div className="App">
            <DayPickerRangeController
                startDate={startDate}
                endDate={endDate}
                onDatesChange={onDatesChange}

                focusedInput={focusedInputLeftCol}
                onFocusChange={onFocusChange}
                numberOfMonths={2}
                // keepOpenOnDateSelect={true}
                // isOutsideRange={day => (moment().diff(day) > -1)}
                isOutsideRange={day => !isInclusivelyAfterDay(day, moment())}
                // showInput='true'

                hideKeyboardShortcutsPanel={true}
                renderDayContents={renderDayContents}
                isDayBlocked={day => dayBlocked(day)}
            />
        </div>
    );
}