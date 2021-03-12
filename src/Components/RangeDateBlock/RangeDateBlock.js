import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';


import React from 'react';
import isInclusivelyAfterDay from 'react-dates/src/utils/isInclusivelyAfterDay';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
const reactDates = require('react-dates/initialize');
import 'react-dates/lib/css/_datepicker.css';
import './style.css';
import { START_DATE, END_DATE } from 'react-dates/src/constants';
import moment from 'moment';


function RangeDate(props) {
    const [startDate, setStartDate] = React.useState(null);
    const [endDate, setEndDate] = React.useState(null);
    const [focusedInput, setFocusedInput] = React.useState(null);
    const [dropdownOpen, setDropdownOpen] = React.useState(false);
    const [kidsCount, setKidsCount] = React.useState(1);
    const [focusedInputLeftCol, setFocusedInputLeftCol] = React.useState(START_DATE);

    //   redirectToTrips: false,
    //   focusedInputLeftCol: START_DATE,
    //   bookedDates: []

    //   }


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
        props.sendData({startDate, endDate});
    }
  
    // console.log(startDate, endDate);
    const a = new Date();
    return (
        <div className="App">
            <DayPickerRangeController
                startDate={startDate}
                endDate={endDate}
                //   onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
                onDatesChange={onDatesChange}

                focusedInput={focusedInputLeftCol}
                onFocusChange={onFocusChange}
                numberOfMonths={2}
                // keepOpenOnDateSelect={true}
                isOutsideRange={day => !isInclusivelyAfterDay(day, moment())}                // showInput={true}

                hideKeyboardShortcutsPanel={true}

                // DayBlocked={dayBlocked}
            />
        </div>
    );
}



export default RangeDate;
