import React , {useState} from 'react';
import clsx from 'clsx';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import QuestionTemplate from '../../../Components/UI/WrapperComponent/QuestionTemplate';
import  CheckBox  from '@material-ui/core/Checkbox';

const Height = 400
const useStyles = makeStyles(theme => ({
  RadioGroupRow: {
    display: "flex" , 
    flexWrap: "wrap" , 
    flexDirection: "row" , 
  } ,
  RadioGroup: {
    display: "grid" , 
    gridTemplateColumns: "auto auto"
  } ,

  FormControl: {
    overflow: "auto" ,
    maxHeight: Height
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
   } , 
   TextFieldExist: {
     display: "none"
   } , 
   RadioCheckedColor: {
     backgroundColor: theme.palette.warning.main
   } , 
   CheckedBoxNonOf: {
     display: "none"
   }
}))

export default function RadioCustom(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  const [Checked, setChecked] = useState(false)

  const handleChange = (event) => {
    console.log(event.target.value)
    setValue(event.target.value);
  };


  let FormControlLabels = [];
  props.choices.values.forEach(item => {
    console.log(item.choice)
    FormControlLabels.push(
      <FormControlLabel
      key={item.id}
      className={clsx({
        [classes.FormControlLabel]: true ,
        [classes.RadioCheckedColor]: value === item.choice
        
      })} 
      value={item.choice} 
      control={<Radio
              disabled={Checked}
              colorSecondary="primary"
              classes={{colorPrimary: classes.Radio ,
                        colorSecondary: classes.RadioColor ,
                        checked: classes.Radio}} 
              />} 
              label={item.choice} />
    )
  })


  const getFormControlStyle = (columnCount) => {

    switch (columnCount) {
      case 1: return {
        display: "grid" , 
        gridTemplateColumns: "auto"
      }
      case 2: return {
        display: "grid" , 
        gridTemplateColumns: "auto auto"
      }
      case 3: return {
        display: "grid" , 
        gridTemplateColumns: "auto auto auto"
        
      }
      case 4: return {
        display: "grid" , 
        gridTemplateColumns: "auto auto auto auto"
      }
      default: return {
        display: "grid" , 
        gridTemplateColumns: "auto"
      }
  }
}

const formControlStyle = getFormControlStyle(props.choices.column);

  const handleChecked = () => {
    setChecked(prev => !prev)
    setValue("")
  }

  return (

      <QuestionTemplate number={props.number} text={props.text}>
        <div style={{margin: "auto" }}>
          <FormControl className={classes.FormControl} >
                  <RadioGroup
                    style={formControlStyle}
                    className={clsx({
                              [classes.RadioGroupRow]: props.choices.Horizontal,
                              [classes.RadioGroup]: true
                              })} 
                              value={value} onChange={handleChange}>
                              {FormControlLabels}
                  </RadioGroup>                  
          </FormControl>
          <div style={{display: "flex" , justifyContent: "flex-start" , alignItems: "center" , marginRight: "30px" , alignItems: "flex-start" }}>
            <FormControlLabel
                  className={clsx({
                    [classes.CheckedBoxNonOf]: props.choices.nonof
                  })}
                  style={{backgroundColor: "grey" , padding: "5px 10px" , color: "white" , borderRadius: "10px" , height: "60px" , marginTop: "10px"}}
                    control={<CheckBox  checked={Checked} onChange={handleChecked} name="check" />}
                    label="هیچکدام"
                  />
            <TextField 
                style={{width: "500px" , marginTop: "20px" , position: "relative" , bottom: "10px"}}
                multiline={true}
                className={clsx({
                  [classes.TextField]: true , 
                  // [classes.TextFieldVisibility]: true , 
                  // [classes.TextFieldExist]: !props.choices.others
                })}
                color="secondary" 
                variant="outlined" 
                label="سایر موارد"
                disabled={false}
                // !(value === "سایر موارد")
                />
          </div>
        </div>
      </QuestionTemplate>

   
  );
}
