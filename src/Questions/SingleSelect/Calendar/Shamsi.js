import "./Shamsi.css";
import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import { makeStyles } from "@material-ui/core";
import QuestionTemplate from "../../../Components/UI/WrapperComponent/QuestionTemplate";

const useStyles = makeStyles(theme => ({
  Root: {
    display: "flex" , 
    justifyContent: "space-around"
  } ,

  Calendar: {
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"  ,
    padding: "0px" , 
    borderRadius: "10px" , 
    backgroundColor: "#eafeea" ,
  } , 
  selectedDay: {
    borderRadius: '0px'
  }
}))

const Shamsi = (props) => {
  const classes = useStyles();
  const [selectedDay, setSelectedDay] = useState(null);

  const InputHandler = (e) => {
    console.log(e)
    setSelectedDay({...e})
    console.log(selectedDay)
  }


  return (
    <QuestionTemplate type="Calendar" number={props.number} text={props.text}>
        <div className={classes.Root}>
          <Calendar
              value={selectedDay}
              onChange={(e) => InputHandler(e)}
              shouldHighlightWeekends
              locale="fa" 
              calendarClassName={classes.Calendar}
              calendarSelectedDayClassName={classes.selectedDay}
            />
            <div>
              <div>Day:</div>
              <div>Time</div>
              <div></div>
            </div>
        </div>
    </QuestionTemplate>
  );
};

export default Shamsi;