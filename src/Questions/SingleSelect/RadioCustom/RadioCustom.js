import React , {useState} from 'react';
import clsx from 'clsx';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import QuestionTemplate from '../../../Components/UI/WrapperComponent/QuestionTemplate';
import NoIdeaCheckbox from '../../../Partial/NoIdeaCheckbox/NoIdeaCheckbox';

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
      padding: "0px 10px" , 
      "&:hover": {
        transform: "scale(1.02)"
      }
    } ,

    OtherCheckboxWraper: {
      display: "flex" , 
      justifyContent: "flex-start" , 
      marginLeft: "30px" , 
      alignItems: "flex-start"
    } ,

  TextField: {
    width: "100%" , 
    marginTop: "20px" , 
    position: "relative" , 
    bottom: "10px"
  } ,

    RadioCheckedColor: {
      backgroundColor: theme.palette.grey.dark ,
      transform: "scale(1.02)"
    } , 
 

    NoIdeaCheckbox: {
      marginTop: "10px"
    } ,

    NoIdeaStatus: {
    display: "none"
}
}))

export default function RadioCustom(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  const [Checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };


  let FormControlLabels = [];
  props.choices.values.forEach(item => {
    FormControlLabels.push(
        <FormControlLabel
          label={item.choice}
          key={item.id}
          className={clsx({
            [classes.FormControlLabel]: true ,
            [classes.RadioCheckedColor]: value === item.choice
            
          })} 
          value={item.choice} 
          control={<Radio
                  disabled={Checked}
                  classes={{colorPrimary: classes.Radio ,
                            colorSecondary: classes.RadioColor ,
                            checked: classes.Radio}} 
                />}  />
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


  const checkboxChangeHandler = () => {
    setChecked(prev => !prev);
    setValue("");
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
          <div className={classes.OtherCheckboxWraper}>
            <NoIdeaCheckbox
              label="هیچکدام"
              className={clsx({
                  [classes.NoIdeaStatus]: !props.choices.noidea , 
                  [classes.NoIdeaCheckbox]: true
              })}
              checked={Checked}
              onChange={checkboxChangeHandler}
              />

            <TextField 
                onChange={ e => {
                  if ( e.target.value.toString().length > 0) {
                    setValue("");
                    setChecked(true)
                  } else {
                    setChecked(false)
                  }
                } }

                multiline={true}
                className={clsx({
                  [classes.TextField]: true , 
                })}
                color="secondary" 
                variant="outlined" 
                label="سایر موارد"
                />
          </div>
        </div>
      </QuestionTemplate>

   
  );
}
