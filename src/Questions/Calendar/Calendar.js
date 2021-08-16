import "./Calendar.css";
import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  Calendar: {

    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"  ,
    margin: "auto" , 
    padding: "0px" , 
    borderRadius: "10px" , 
    backgroundColor: "#eafeea"
  } , 
  selectedDay: {
    borderRadius: '0px'
  }
}))

const CustomCalendar = (props) => {
  const classes = useStyles();
  const [selectedDay, setSelectedDay] = useState(null);
  return (
    <Calendar
      value={selectedDay}
      onChange={setSelectedDay}
      shouldHighlightWeekends
      locale="fa" 
      calendarClassName={classes.Calendar}
      calendarSelectedDayClassName={classes.selectedDay}
    />
  );
};

export default CustomCalendar;