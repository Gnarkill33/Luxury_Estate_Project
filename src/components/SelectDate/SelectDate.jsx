import React, { useState } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import "react-datepicker/dist/react-datepicker.css";
import "./SelectDate.style.css";

export const SelectDate = () => {
    const [startDate, setStartDate] = useState(null);
    return (
        <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            placeholderText="Select a date"
        />
    );
};

export default SelectDate;