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



export default function MultiCheckbox(props) {
  const classes = useStyles();
  let dispatch = useDispatch();
  const [Checked, setChecked] = useState(false)
  
    // let {CurrentQuestion} = useSelector(state => state.currentqa);
    let CurrentQuestion = {...props} 
  // let {Validate} = useSelector(state => state.validate);
  


  
 

  const handleChange = (e, key) => {
    let updateCurrentQuestion = JSON.parse(JSON.stringify(CurrentQuestion));
    updateCurrentQuestion.choices.values.forEach(item => {
      if (item.id === key) {
        item.status = !item.status
        dispatch({type: actionTypes.UPDATE_CURRENT_QUESTION , payload: updateCurrentQuestion })
      } 
    });

    dispatch({type: actionTypes.CHECK_FOR_REQUIRE_VALIDATE , CurrentQuestion: updateCurrentQuestion })

  }


  const textFieldHandler = (e) => {
    let updateCurrentQuestion = JSON.parse(JSON.stringify(CurrentQuestion));
    updateCurrentQuestion.choices.description = e.target.value;
    dispatch({type: actionTypes.UPDATE_CURRENT_QUESTION , payload: updateCurrentQuestion })
    dispatch({type: actionTypes.CHECK_FOR_REQUIRE_VALIDATE , CurrentQuestion: updateCurrentQuestion })

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
      control={<Checkbox 
                className={clsx({
                  [classes.DisplayNone]: !item.display
                })}
                disabled={Checked} 
                key={item.id} 
                checked={item.status} 
                onChange={(e) => handleChange(e , item.id)} />}
                label={item.caption}
    />
     )
 })


 const checkboxChangeHandler = () => {
  setChecked(prev => !prev);
  let updateState = JSON.parse(JSON.stringify(CurrentQuestion));
  updateState.noidea.status = !Checked
  updateState.choices.values.forEach(item => {
        item.status = false
  })
  dispatch({type: actionTypes.UPDATE_CURRENT_QUESTION , payload: updateState });
  dispatch({type: actionTypes.CHECK_FOR_REQUIRE_VALIDATE , CurrentQuestion: updateState })
}


  return (
    <QuestionTemplate number={CurrentQuestion.number} text={CurrentQuestion.caption}>
        <div className={classes.columnRoot}>
          <FormControl  style={formControlStyle} component="fieldset" className={classes.formControl}>
          {FormGroup}
          </FormControl>
        </div>
        <div className={classes.CheckboxTextFieldWraper}>
          <NoIdeaCheckbox
              label="هیچکدام"
              className={clsx({
                        [classes.NoIdeaStatus]: !CurrentQuestion.noidea , 
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
              onChange={textFieldHandler}
              value={CurrentQuestion.choices.description}
              color="secondary" 
              variant="outlined" 
              placeholder="سایر موارد"
              disabled={false}
              />
      </div>
    </QuestionTemplate>
  );
}
