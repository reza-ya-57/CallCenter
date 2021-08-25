import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import { makeStyles } from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";

import QuestionTemplate from "../../../Components/UI/WrapperComponent/QuestionTemplate";

const useStyles = makeStyles(theme => ({
  TimePicker: {
    width: "400px"
  }
}))

export default function TimePicker(props) {
  // The first commit of Material-UI
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
  <QuestionTemplate number={props.number} text={props.text}>
    <div style={{width: "400px  " , margin: "auto"}}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container>
          <KeyboardTimePicker
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
