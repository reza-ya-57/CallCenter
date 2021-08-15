import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import RadioQuestion from '../../Questions/SingleSelect/Radio/Radio';
import DropDown from '../../Questions/SingleSelect/DropDown/DropDown';
import CustomizedSlider from '../../Questions/SingleSelect/Slider/Slider';
import MultiDropDown from '../../Questions/MultiSelect/MultiDropDown/MultiDropDown';
import QuestionTemplate from '../../Components/UI/WrapperComponent/QuestionTemplate';

const PaperWidth = "600px";


const useStyles = makeStyles(theme => ({
  root: {
    // minWidth: 275,
  },
  Paper: {
    maxWidth: PaperWidth,
    backgroundColor: theme.palette.green.main
  } , 
  
  Footer: {
    position: 'absolute' ,
    bottom: '0px' , 
    width: '125vh' , 

  }
}));

export default function SimpleCard() {
  const classes = useStyles();

  return (
      <div>
          {/* <RadioQuestion number='2' /> */}
         <MultiDropDown number='1' />
        {/* <RadioQuestion number='2' />
        <DropDown number='3' />  */}
        {/* <CustomizedSlider /> */}
      </div>
  );
}