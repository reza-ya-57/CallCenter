import "./Shamsi.css";
import React, { useState } from "react";
import { useStore } from 'react-redux';
import { useSelector , useDispatch } from 'react-redux';
import * as actionTypes from '../../../Redux/Actions/actionTypes';
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import { makeStyles } from "@material-ui/core";
import QuestionTemplate from "../../../Components/UI/WrapperComponent/QuestionTemplate";
import { TextField } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

let year = []
for (let i = 1; i < 100; i++) {
  year.unshift({title: (i + 1303).toString()})
}
year.push({title: ''})
let day = []

for (let i = 0; i < 32; i++) {
  day.unshift({title: i.toString()})
}

day.push({title: ""})

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
    borderRadius: '0px' , 
    background: "red" , 
    color: "red"
  } , 

  InputWraper: {
    display: "flex" , 
    flexDirection: "column" ,
    // margin: "50px" ,
    // backgroundColor: "#3C4043" , 
    borderRadius: "10px" , 
    color: "white" , 
    justifyContent: "space-around" , 
    width: "40%" , 
    padding: "40px" , 
    // height: "100%" , 
    height: "380px" , 
    // marginTop: "15px"
  } , 

  Label: {
    display: "block"
  } , 

  InputLabelWraper: {
    display: "flex" , 
    justifyContent: "space-around" , 
    alignItems: "center"
  } , 

  TextField: {
    backgroundColor: "white"
  } , 

  Autocomplete: {
    textAlign: "center" , 
    marginLeft: "35px"
  }
}))

const Shamsi = (props) => {
  let dispatch = useDispatch();
  const store = useStore();
  // let {CurrentQuestion} = useSelector(state => state.currentqa);
  let CurrentQuestion = {...props} 
  const classes = useStyles();

  // CurrentQuestion.choices.description.forEach(item => {
  //   if (item !== "") {
  //     var Date = item.split("/");
  //     console.log(Date)
  //   }
  // })
  var Date = CurrentQuestion.choices.description !== "" ? CurrentQuestion.choices.description.split("/") : null
  let initialYear = null;
  let initialMonth = null;
  let initialDay = null;
  let initialDate = null
 if (CurrentQuestion) {
   if (CurrentQuestion.choices.description !== "") {
     initialDate = {day: parseInt(Date[2]) , month: parseInt(Date[1]) , year: parseInt(Date[0])}
    console.log(initialDate)
    console.log(Date)
  
     initialYear = Date[0]
     initialMonth = Date[1]
     initialDay = Date[2]
   }
 }

  const [selectedDay, setSelectedDay] = useState(initialDate);

  const [Year, setYear] = useState(initialYear);
  const [Month, setMonth] = useState(initialMonth);
  const [Day, setDay] = useState(initialDay);

  const InputHandler = (e ) => {
    setSelectedDay({...e});
    console.log(e)
    setYear(e.year.toString());
    month.forEach(item => {
      if (item.id === e.month) {
        setMonth(item.title)
      }
    })
    setDay(e.day.toString());
    let updateCurrentQuestion = JSON.parse(JSON.stringify(CurrentQuestion));
    updateCurrentQuestion.choices.description = `${e.year}` + "/" + `${e.month}` + "/" + `${e.day}`;
    
    dispatch({type: actionTypes.UPDATE_CURRENT_QUESTION , payload: updateCurrentQuestion })
    dispatch({type: actionTypes.CHECK_FOR_REQUIRE_VALIDATE , CurrentQuestion: updateCurrentQuestion })
    // dispatch({type: actionTypes.SET_REQUIRE_VALIDATE , payload: true })
  }

  const yearHandler = (e , list) => {

    if (list) {
      let localMonth;
      month.forEach(item => {
        if (item.title === Month) {
          localMonth = item.id
        }
      });
      setSelectedDay({day: parseInt(Day) , month: localMonth ,year: parseInt(list.title)})
      console.log(Year)
      setYear(list.title)
    }

  }


  const monthHandler = (e , list) => {
    if(list) {
      setMonth(list.title)
      setSelectedDay({day: parseInt(Day) , month: parseInt(list.id) ,year: parseInt(Year)})
    }
  }


  const dayHandler = (e , list) => {
    if (list) {
      let localMonth;
      month.forEach(item => {
        if (item.title === Month) {
          localMonth = item.id
        }
      });
      setDay(list.title)
      setSelectedDay({day: parseInt(list.title) , month: localMonth ,year: parseInt(Year)})
    }
  }
  console.log(CurrentQuestion)

  return (
    <QuestionTemplate type="Calendar" number={CurrentQuestion.number} text={CurrentQuestion.caption}>
        <div className={classes.Root}>
          <Calendar
              value={selectedDay}
              onChange={(e ) => InputHandler(e )}
              shouldHighlightWeekends
              locale="fa" 
              calendarClassName={classes.Calendar}
              // calendarSelectedDayClassName={classes.selectedDay}
              calendarSelectedDayClassName={classes.selectedDay}
            />
            <div className={classes.InputWraper}>
              <div className={classes.InputLabelWraper}>
                <Autocomplete
                  classes={{
                    input: classes.Autocomplete
                  }}
                  onChange={(e , list) => yearHandler(e , list)}
                  value={{title: Year}}
                  options={year}
                  getOptionLabel={(option) => {
                    return option.title
                  }}
                  style={{ width: 300 }}
                  renderInput={(params) => <TextField  value={Year} className={classes.TextField} {...params} label="?????? ????????" variant="outlined" />}
                />
              </div>
              <div className={classes.InputLabelWraper}>
                <Autocomplete
                  classes={{
                    input: classes.Autocomplete
                  }}
                  onChange={(e , list) => monthHandler(e , list)}
                  value={{id:5  ,title: Month}}
                  options={month}
                  getOptionLabel={(option) => option.title}
                  style={{ width: 300 }}
                  renderInput={(params) => <TextField className={classes.TextField} {...params} label="??????" variant="outlined" />}
                />
              </div>
              <div className={classes.InputLabelWraper}>
                <Autocomplete
                  classes={{
                    input: classes.Autocomplete
                  }}
                  onChange={(e , list) => dayHandler(e , list)}
                  value={{title: Day}}
                  options={day}
                  getOptionLabel={(option) => option.title}
                  style={{ width: 300 }}
                  renderInput={(params) => <TextField className={classes.TextField} {...params} label="??????" variant="outlined" />}
                />
              </div>
              
            </div>
        </div>
    </QuestionTemplate>
  );
};

export default Shamsi;



const month = [

  { id: 1 , title: "??????????????" } ,
  { id: 2 , title: "????????????????" } ,
  { id: 3 , title: "??????????" } ,
  { id: 4 , title: "??????" } ,
  { id: 5 , title: "??????????" } ,
  { id: 6 , title: "????????????" } ,
  { id: 7 , title: "??????" } ,
  { id: 8 , title: "????????" } ,
  { id: 9 , title: "??????" } ,
  { id: 10 , title: "????" } ,
  { id: 11 , title: "????????" } ,
  { id: 12 , title: "??????????" } ,
  { id: 0 , title: "" } ,
];