import { calender, whiteCalender } from "constant/assets";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateInput = ({ val, setVal, placeholder = "Select date" }) => {
  //   const [startDate, setStartDate] = useState();
  //   const isWeekday = (date) => {
  //     const day = getDay(date);
  //     return day !== 0 && day !== 6;
  //   };
  //   console.log(val);
  return (
    //   date range = https://reactdatepicker.com/#example-date-range

    <div className="flex items-center">
      <div className="custom-date-input">
        <DatePicker
          selected={val}
          onChange={(date) => setVal(date)}
          className="custom-inpt-class rounded-sm border-2 border-black-tint-600"
          dateFormat="yyyy/MM/dd"
          //   showTimeSelect
          isClearable={true}
          calendarClassName="relative"
          placeholderText={placeholder}
          //   openToDate={new Date("1993/09/28")}
          //   showMonthDropdown
          //   shouldCloseOnSelect={false}
          //   minDate={new Date()}
          //   maxDate={addMonths(new Date(), 5)}
          //   showDisabledMonthNavigation
          //   excludeDates={[new Date(), subDays(new Date(), 1)]}
          //   excludeDateIntervals={[{start: subDays(new Date(), 5), end: addDays(new Date(), 5) }]}
          //   filterDate={isWeekday}
          // filter time = https://reactdatepicker.com/#example-filter-times
          // include dates = https://reactdatepicker.com/#example-include-dates
          // include date interval - https://reactdatepicker.com/#example-include-date-intervals
          // inject specific time - https://reactdatepicker.com/#example-inject-specific-times
          // select time - https://reactdatepicker.com/#example-select-time
        />
      </div>
      {!val && (
        <img
          src={calender}
          className="pointer-events-none relative h-5 -translate-x-6"
          alt=""
        />
      )}
    </div>
  );
};

export default DateInput;
