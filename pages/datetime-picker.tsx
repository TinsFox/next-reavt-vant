import React from "react";
import { DatetimePicker } from "react-vant";
const DatetimePickerPage = () => {
    return <div>
        <DatetimePicker
            type="date"
            minDate={new Date(2020, 0, 1)}
            maxDate={new Date(2025, 10, 1)}
            value={new Date()}
            onConfirm={(value)=>{console.log(value);
            }}
        />
    </div>
}

export default DatetimePickerPage