import React from 'react';
import clsx from 'clsx';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import QuestionTemplate from '../../../Components/UI/WrapperComponent/QuestionTemplate';


const useStyles = makeStyles(theme => ({
  RadioGroupRow: {
    display: "flex" , 
    flexWrap: "wrap" , 
    flexDirection: "row" , 
  } ,
  FormControlLabel: {
      border: "1px grey solid"  ,
      borderRadius: "10px" ,
      margin: "10px 10px" , 
      padding: "0px 10px"
    }
   ,
   TextFieldVisibility: {
    marginTop: "20px" , 
    width: "100%"  
   }
}))

export default function RadioCustom(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  

  const handleChange = (event) => {
    setValue(event.target.value);
  };


  let FormControlLabels = [];

  for (let item in props.choice.value) {
      FormControlLabels.push(
        <FormControlLabel
        className={clsx({
          [classes.FormControlLabel]: true ,
          
        })} 
        value={props.choice.value[item]} 
        control={<Radio 
          colorSecondary="primary"
                classes={{colorPrimary: classes.Radio ,
                          colorSecondary: classes.RadioColor ,
                          checked: classes.Radio}} 
                />} 
                    label={props.choice.value[item]} />
      )
  }


  return (

      <QuestionTemplate number={props.number} text={props.text}>
        <div style={{margin: "auto" }}>
          <FormControl className={classes.FormControl} >
              {/* <FormLabel className={classes.Text} component="div">{Data.text}</FormLabel> */}
                  <RadioGroup  className={clsx({
                                              [classes.RadioGroupRow]: props.choice.Horizontal,
                                              })} 
                              value={value} onChange={handleChange}>
                              {FormControlLabels}
                  </RadioGroup>
                              <TextField 
                                  multiline={true}
                                  className={clsx({
                                    [classes.TextField]: true , 
                                    [classes.TextFieldVisibility]: true
                                  })}
                                  color="secondary" 
                                  variant="outlined" 
                                  label="سایر موارد"
                                  disabled={!(value === "سایر موارد")}/>
          </FormControl>
        </div>
      </QuestionTemplate>

   
  );
}
