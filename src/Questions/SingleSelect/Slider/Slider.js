import React from 'react';
import "./Slider.css";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import QuestionTemplate from '../../../Components/UI/WrapperComponent/QuestionTemplate';
const Width = 600
const useStyles = makeStyles({
  root: {
    margin: "20px 50px"  , 

    
  },

  SliderRoot: {
    color: "#1E5631"
  } ,

  Rail: {
    height: "30px" ,
    borderRadius: "10px"
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
      // position: "relative" , 
      marginTop: "15px" ,
      // bottom: "10px"
      padding: "5px"
    // borderRadius: "10px" , 
    // backgroundColor: "#0bb883" , 
    // color: "black" , 
    // "&:hover": {
    //   color: "white" , 
    //   boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" ,
    //   backgroundColor: "#1CC468"
    // }
  } 
});

const marks = [
  {
    value: 2,
    label: 'خیلی بد',
  },
  {
    value: 25,
    label: 'بد',
  },
  {
    value: 50,
    label: 'متوسط',
  },
  {
    value: 75,
    label: 'خوب',
  },
  {
    value: 99,
    label: 'خیلی خوب',
  },
];

function valuetext(value) {
  return `${value}°C`;
}

function valueLabelFormat(value) {
  return marks.findIndex((mark) => mark.value === value) + 1;
}

export default function CustomSlider(props) {
  const classes = useStyles();

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
