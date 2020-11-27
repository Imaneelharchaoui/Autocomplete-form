import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import "../assets/search.css";

export default function MyDatePicker() {
    return (

        <DayPickerInput class="DayPickerInput"
            dayPickerProps={{
                month: new Date(),
                showWeekNumbers: true,
                todayButton: 'Today',
            }}


        />
    );
}
