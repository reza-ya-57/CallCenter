import "date-fns";
import React , {useState , useEffect} from "react";
import { useSelector , useDispatch } from 'react-redux';
import * as actionTypes from '../../../Redux/Actions/actionTypes';
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from "@material-ui/pickers";

import QuestionTemplate from "../../../Components/UI/WrapperComponent/QuestionTemplate";



export default function TimePicker(props) {
  let dispatch = useDispatch();
  let {CurrentQuestion} = useSelector(state => state.currentqa);

  if (CurrentQuestion.choices.description !== "") {
    var initialDate = new Date()
    console.log(initialDate)
    let TimeArray = CurrentQuestion.choices.description.split(":");
    initialDate.setHours(parseInt(TimeArray[0]));
    initialDate.setMinutes(parseInt(TimeArray[1]))
  }


  const [selectedDate, setSelectedDate] = React.useState(initialDate);
    // new Date("2014-08-18T21:11:54")

  const handleDateChange = (date) => {
    let updateCurrentQuestion = JSON.parse(JSON.stringify(CurrentQuestion));
    let min = date.getMinutes();
    let hour = date.getHours();
    let timeString = `${hour}` + ":" + `${min}`;
     updateCurrentQuestion.choices.description = timeString;
    setSelectedDate(date);
    dispatch({type: actionTypes.UPDATE_CURRENT_QUESTION , payload: updateCurrentQuestion })
    console.log('hehefjoe')
    dispatch({type: actionTypes.CHECK_FOR_REQUIRE_VALIDATE , CurrentQuestion: updateCurrentQuestion })
  };

  return (
  <QuestionTemplate number={props.number} text={props.text}>
    <div style={{width: "400px  " , margin: "auto"}}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container>
          <KeyboardTimePicker
          ampm={false}
          inputVariant="outlined"
          color="primary"
          // className={classes.TimePicker}
            margin="normal"
            id="time-picker"
            label="زمان"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change time"
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
    </div>
  </QuestionTemplate>
  );
}
