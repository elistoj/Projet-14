import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const DatePickerField = ({ label, selectedDate, onChange }) => (
    <>
        <label>{label}</label>
        <DatePicker
            selected={selectedDate}
            onChange={onChange}
            dateFormat="MM/dd/yyyy"
        />
    </>
);

export default DatePickerField;
