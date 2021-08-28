import "./Shamsi.css";
import React, { useState } from "react";
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
  }
}))

const Shamsi = (props) => {
  
  const classes = useStyles();
  const [selectedDay, setSelectedDay] = useState(null);
  const [Year, setYear] = useState('1400');
  const [Month, setMonth] = useState("مرداد");
  const [Day, setDay] = useState("");

  const InputHandler = (e ) => {
    setSelectedDay({...e});
    setYear(e.year.toString());
    month.forEach(item => {
      if (item.id === e.month) {
        setMonth(item.title)
      }
    })
    setDay(e.day.toString());
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


  return (
    <QuestionTemplate type="Calendar" number={props.number} text={props.text}>
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
                  onChange={(e , list) => yearHandler(e , list)}
                  value={{title: Year}}
                  options={year}
                  getOptionLabel={(option) => {
                    return option.title
                  }}
                  style={{ width: 300 }}
                  renderInput={(params) => <TextField  value={Year} className={classes.TextField} {...params} label="سال شمسی" variant="outlined" />}
                />
              </div>
              <div className={classes.InputLabelWraper}>
                <Autocomplete
                  onChange={(e , list) => monthHandler(e , list)}
                  value={{id:5  ,title: Month}}
                  options={month}
                  getOptionLabel={(option) => option.title}
                  style={{ width: 300 }}
                  renderInput={(params) => <TextField className={classes.TextField} {...params} label="ماه" variant="outlined" />}
                />
              </div>
              <div className={classes.InputLabelWraper}>
                <Autocomplete
                  onChange={(e , list) => dayHandler(e , list)}
                  value={{title: Day}}
                  options={day}
                  getOptionLabel={(option) => option.title}
                  style={{ width: 300 }}
                  renderInput={(params) => <TextField className={classes.TextField} {...params} label="روز" variant="outlined" />}
                />
              </div>
              
            </div>
        </div>
    </QuestionTemplate>
  );
};

export default Shamsi;



const month = [

  { id: 1 , title: "فروردین" } ,
  { id: 2 , title: "اردیبهشت" } ,
  { id: 3 , title: "خرداد" } ,
  { id: 4 , title: "تیر" } ,
  { id: 5 , title: "مرداد" } ,
  { id: 6 , title: "شهریور" } ,
  { id: 7 , title: "مهر" } ,
  { id: 8 , title: "آبان" } ,
  { id: 9 , title: "آذر" } ,
  { id: 10 , title: "دی" } ,
  { id: 11 , title: "بهمن" } ,
  { id: 12 , title: "اسفند" } ,
  { id: 0 , title: "" } ,
];