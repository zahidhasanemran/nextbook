// import ReactTimeslotCalendar from "@amilajack/react-timeslot-calendar";
import moment from "moment";
import dynamic from "next/dynamic";

const ReactTimeslotCalendar = dynamic(() => import("react-timeslot-calendar"), {
  ssr: false,
});

const ScheduleCalender = () => {
  // Timeslots disabled by default. a startDate and format should be provided. The resulting date must match with one of the timeslots.
  //   let disabledTimeslots = {[
  //     {
  //         startDate: 'April 30th 2022, 12:00:00 AM',
  //         format: 'MMMM Do YYYY, h:mm:ss A',
  //     },
  //     {
  //         startDate: 'May 1st 2022, 3:00:00 PM',
  //         format: 'MMMM Do YYYY, h:mm:ss A',
  //     },
  //     {
  //         startDate: 'May 5th 2022, 6:00:00 PM',
  //         format: 'MMMM Do YYYY, h:mm:ss A',
  //     },
  // ]}
  // An array of available timeslots in the format:
  let timeslot = [
    ["1", "2"], // 1:00 AM - 2:00 AM
    ["2", "3"], // 2:00 AM - 3:00 AM
    ["4", "6"], // 4:00 AM - 6:00 AM
    "5", // 5:00 AM
    ["4", "6", "7", "8"], // 4:00 AM - 6:00 AM - 7:00AM - 8:00AM
  ];

  //How the timeslots will be interpreted by the calendar.
  let timeslotProp = {
    format: "h", // Each element in the timeslot array is an Hour
    showFormat: "h:mm A", // They will be displayed as Hour:Minutes AM/PM
  };

  // The maximum number of timeslots a user can select. ==> maxTimeslots

  let ignoreWeekends = {
    saturdays: false,
    sundays: false,
    mondays: false,
    tuesdays: false,
  };

  let startDateInputProps = {
    class: "some-random-class-start",
    name: "my-start-date-input-name",
  };
  let endDateInputProps = {
    class: "some-random-class-end",
    name: "my-start-date-input-name",
  };

  let onSelectTimeslot = (allTimeslots, lastSelectedTimeslot) => {
    /**
   * All timeslot objects include `startDate` and `endDate`.
 
   * It is important to note that if timelots provided contain a single
   * value (e.g: timeslots = [['8'], ['9', '10']) then only `startDate` is filled up with
   * the desired information.
   */
    console.log(lastSelectedTimeslot.startDate); // MomentJS object.
  };

  return (
    <div>
      <ReactTimeslotCalendar
        initialDate={moment([2022, 2, 17]).format()}
        timeslots={timeslot}
        // renderDays={}
      />
    </div>
  );
};

export default ScheduleCalender;
