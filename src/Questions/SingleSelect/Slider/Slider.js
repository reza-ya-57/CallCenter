import React from 'react';
import "./Slider.css";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import QuestionTemplate from '../../../Components/UI/WrapperComponent/QuestionTemplate';

import SentimentVeryDissatisfiedOutlinedIcon from '@material-ui/icons/SentimentVeryDissatisfiedOutlined';
import SentimentDissatisfiedOutlinedIcon from '@material-ui/icons/SentimentDissatisfiedOutlined';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import InsertEmoticonOutlinedIcon from '@material-ui/icons/InsertEmoticonOutlined';
import SentimentVerySatisfiedOutlinedIcon from '@material-ui/icons/SentimentVerySatisfiedOutlined';

const Width = 600

const Icons = [
  <SentimentVeryDissatisfiedOutlinedIcon /> , 
  <MoodBadIcon /> , 
  <SentimentDissatisfiedOutlinedIcon /> ,
  <SentimentDissatisfiedIcon /> , 
  <SentimentSatisfiedIcon /> ,
  <InsertEmoticonOutlinedIcon /> ,
  <SentimentVerySatisfiedOutlinedIcon />
]



const useStyles = makeStyles({
  root: {
    margin: "20px 50px"  , 

    
  },

  SliderRoot: {
    color: "#1E5631"
  } ,

  Rail: {
    height: "30px" ,
    borderRadius: "10px" ,  
  } , 
  
  Track: {
    background: "rgb(52,171,0)" , 
    background: "linear-gradient(90deg, rgba(52,171,0,1) 13%, rgba(252,6,6,1) 100%)" ,
    height: "30px" , 
  } , 

  Thumb: {
    borderRadius: "unset" ,
    borderRadius: "5px" ,
    width: "10px" , 
    height: "30px" ,
    position: "relative" , 
    top: "5px" , 
    color: "black" , 
  } ,

  MarkLabel: {
      marginTop: "15px" ,
      padding: "5px"
  } 
});



function valuetext(value) {
  return `${value}°C`;
}



export default function CustomSlider(props) {
  const classes = useStyles();

  let initialmarks = [];

  const step =  parseInt(98 / (props.marks.length -1 ))
  // const step = 20;
  // const maxofslider = 20 * props.marks.length

  props.marks.forEach((item  , index) => {

    initialmarks.push ({
      value: index + 1 === props.marks.length ? 100 : 2 + (index * step) , 
      label: item.label ,  
      icon: item.icon ? item.icon : Icons[parseInt(((7/props.marks.length)*(index + 1)) - 1 )]
    })
  })  

  let marks = initialmarks

  // const marks = [
  //   {
  //     value: 2,
  //     label: 'خیلی بد',
  //     icon: <SentimentVeryDissatisfiedIcon />
  //   },
  //   {
  //     value: 25,
  //     label: 'بد',
  //     icon: <SentimentDissatisfiedIcon />
  //   },
  //   {
  //     value: 50,
  //     label: 'متوسط',
  //     icon: <SentimentSatisfiedIcon />
  //   },
  //   {
  //     value: 75,
  //     label: 'خوب',
  //     icon: <InsertEmoticonIcon />
  //   },
  //   {
  //     value: 99,
  //     label: 'خیلی خوب',
  //     icon: <InsertEmoticonIcon />
  //   },
  // ];


  function valueLabelFormat(value) {

    var test = marks.filter((mark) => mark.value === value);
    return test[0].icon
  }
  return (
    <QuestionTemplate number={props.number} text={props.text}>
          <div className={classes.root}>
            <Typography id="discrete-slider-restrict" gutterBottom>
              میزان رضایت
            </Typography>
            <Slider
            defaultValue={2}
              classes={{
                root: classes.SliderRoot ,
                rail: classes.Rail, 
                track: classes.Track ,
                markLabel: classes.MarkLabel , 
                thumb: classes.Thumb
              }}
              valueLabelFormat={valueLabelFormat}
              getAriaValueText={valuetext}
              aria-labelledby="discrete-slider-restrict"
              step={null}
              valueLabelDisplay="auto"
              marks={marks}
            />
        </div>
    </QuestionTemplate>
  );
}
