import React , {useState} from 'react';
import { useSelector , useDispatch } from 'react-redux';
import clsx from 'clsx';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import QuestionTemplate from '../../../Components/UI/WrapperComponent/QuestionTemplate';
import NoIdeaCheckbox from '../../../Partial/NoIdeaCheckbox/NoIdeaCheckbox';
import * as actionTypes from '../../../Redux/Actions/actionTypes';

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
  // let {CurrentQuestion} = useSelector(state => state.currentqa);
  let CurrentQuestion = {...props} 
  
  let initialValue = null;
  CurrentQuestion.choices.values.forEach(item => {
    if(item.status === true) {
      initialValue = item.id
    }
  })

  const classes = useStyles();
  const [value, setValue] = React.useState(initialValue);
  const [Checked, setChecked] = useState(false);
  let dispatch = useDispatch();



  const handleChange = (event) => {
    setValue(parseInt(event.target.value));
    let updateCurrentQuestion = JSON.parse(JSON.stringify(CurrentQuestion));
    updateCurrentQuestion.choices.values.forEach(item => {
      if (item.id === parseInt(event.target.value)) {
        item.status = true
      } else {
        item.status = false
      }
    });
    dispatch({type: actionTypes.UPDATE_CURRENT_QUESTION , payload: updateCurrentQuestion })
    dispatch({type: actionTypes.CHECK_FOR_REQUIRE_VALIDATE , CurrentQuestion: updateCurrentQuestion })
  };


  const textFieldHandler = (e) => {
    if ( e.target.value.toString().length > 0) {
      setValue("");
      setChecked(true)


      let updateCurrentQuestion = JSON.parse(JSON.stringify(CurrentQuestion));
      updateCurrentQuestion.choices.description = e.target.value;
      updateCurrentQuestion.noidea.status = true;
      updateCurrentQuestion.choices.values.forEach(item => {
        item.status = false
        })
      dispatch({type: actionTypes.UPDATE_CURRENT_QUESTION , payload: updateCurrentQuestion })
      dispatch({type: actionTypes.CHECK_FOR_REQUIRE_VALIDATE , CurrentQuestion: updateCurrentQuestion })



    } else {
      setChecked(false)

      let updateCurrentQuestion = JSON.parse(JSON.stringify(CurrentQuestion));
      updateCurrentQuestion.choices.description = e.target.value;
      updateCurrentQuestion.noidea.status = false;
      updateCurrentQuestion.choices.values.forEach(item => {
        item.status = false
        })
      dispatch({type: actionTypes.UPDATE_CURRENT_QUESTION , payload: updateCurrentQuestion })
      dispatch({type: actionTypes.CHECK_FOR_REQUIRE_VALIDATE , CurrentQuestion: updateCurrentQuestion })

    }



  }

  
  let FormControlLabels = [];
  CurrentQuestion.choices.values.forEach(item => {
    FormControlLabels.push(
        <FormControlLabel
          label={item.caption}
          key={item.id}
          className={clsx({
            [classes.FormControlLabel]: true ,
            [classes.RadioCheckedColor]: value === item.caption
            
          })} 
          value={item.id} 
          control={<Radio
                  disabled={CurrentQuestion.noidea.status}
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
    let updateState = JSON.parse(JSON.stringify(CurrentQuestion));
    updateState.noidea.status = !Checked
    updateState.choices.values.forEach(item => {
          item.status = false
    })
    updateState.choices.description = "";
    dispatch({type: actionTypes.UPDATE_CURRENT_QUESTION , payload: updateState });
    dispatch({type: actionTypes.CHECK_FOR_REQUIRE_VALIDATE , CurrentQuestion: updateState })
}


  return (

      <QuestionTemplate number={CurrentQuestion.number} text={CurrentQuestion.caption}>
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
                  [classes.NoIdeaStatus]: !CurrentQuestion.noidea , 
                  [classes.NoIdeaCheckbox]: true
              })}
              checked={CurrentQuestion.noidea.status}
              onChange={checkboxChangeHandler}
              />

            <TextField 
                onChange={ textFieldHandler }
                value={CurrentQuestion.choices.description}
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
