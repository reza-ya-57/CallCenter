import React , {useState }  from 'react';
import { useSelector , useDispatch } from 'react-redux';
import "./MultiCheckbox.css";
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import clsx from 'clsx';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import QuestionTemplate from '../../../Components/UI/WrapperComponent/QuestionTemplate';
import { TextField } from '@material-ui/core';
import NoIdeaCheckbox from '../../../Partial/NoIdeaCheckbox/NoIdeaCheckbox';
import * as actionTypes from '../../../Redux/Actions/actionTypes';
import { FindQuestionById } from '../../Functions/FindQuestionById';



const Height = 600
const useStyles = makeStyles((theme) => ({
  columnRoot: {
      overflow: "auto" , 
      overflowX: "hidden" ,
      maxHeight: Height
  },

  CheckBoxColorSelected: {
    backgroundColor: theme.palette.grey.dark ,
  } ,

  FormControlLabel: {
      userSelect: "none" ,
      border: "1px black solid" ,
      borderRadius: "10px" ,
      padding: " 5px 10px" ,
      margin: "10px" ,
      "&:hover" : {
        transform: "scale(1.02)"
      }
  } ,

  CheckboxTextFieldWraper: {
    display: "flex" , 
    justifyContent: "flex-start" , 
    marginRight: "30px" , 
    alignItems: "flex-start"
  } ,

  TextField: {
    width: "100%" , 
    marginTop: "20px" , 
    position: "relative" , 
    bottom: "10px"
  } ,

  CheckedBoxNonOf: {
    display: "none"
  } ,

  NoIdeaCheckbox: {
    marginTop: "10px"
  } ,

  DisplayNone: {
    display: "none"
  } ,

  NoIdeaStatus: {
  display: "none"
}
}));



export default function MultiCheckboxUpdate(props) {
  const classes = useStyles();
  let dispatch = useDispatch();
  const [Checked, setChecked] = useState(false)

  let {CurrentQuestion} = useSelector(state => state.currentqa);

  
  
 

  const handleChange = (e, key) => {
    console.log("heredd")
    let updateState = JSON.parse(JSON.stringify(CurrentQuestion));
    console.log(updateState)
    updateState.choices.values.forEach(item => {
      if (item.id === key) {
        console.log("hhhh")
        item.status = !item.status
        dispatch({type: actionTypes.UPDATE_CURRENT_QUESTION , payload: updateState })
      } 
    });

  }

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

const formControlStyle = getFormControlStyle(CurrentQuestion.choices.column);


 let FormGroup = [];

 CurrentQuestion.choices.values.forEach(item => {
   FormGroup.push(
    <FormControlLabel
    key={item.id}
    className={clsx({
              [classes.FormControlLabel]: true , 
              [classes.CheckBoxColorSelected] : item.status , 
              [classes.DisplayNone]: !item.display
    })}
    control={<Checkbox disabled={Checked} key={item.id} checked={item.status} onChange={(e) => handleChange(e , item.id)} />}
    label={item.choice}
  />
   )
 })


 const checkboxChangeHandler = () => {
  setChecked(prev => !prev);
  let updateState = JSON.parse(JSON.stringify(CurrentQuestion));
  updateState.choices.values.forEach(item => {
      item.status = false
  })
  dispatch({type: actionTypes.UPDATE_CURRENT_QUESTION , payload: updateState });
}


  return (
    <QuestionTemplate number={props.number} text={props.text}>
        <div className={classes.columnRoot}>
          {/* {props.id} */}
          <FormControl  style={formControlStyle} component="fieldset" className={classes.formControl}>
          {FormGroup}
          </FormControl>
        </div>
        <div className={classes.CheckboxTextFieldWraper}>
          <NoIdeaCheckbox
              label="هیچکدام"
              className={clsx({
                        [classes.NoIdeaStatus]: !CurrentQuestion.choices.noidea , 
                        [classes.NoIdeaCheckbox]: true
              })}
              checked={Checked}
              onChange={checkboxChangeHandler}
              />
          <TextField 
              multiline={true}
              className={clsx({
                        [classes.TextField]: true , 
                        [classes.TextFieldVisibility]: true , 
                        [classes.TextFieldExist]: !CurrentQuestion.choices.others
              })}
              color="secondary" 
              variant="outlined" 
              label="سایر موارد"
              disabled={false}
              />
      </div>
    </QuestionTemplate>
  );
}
