import React , {useState}  from 'react';
import "./MultiCheckbox.css";
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import clsx from 'clsx';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import QuestionTemplate from '../../../Components/UI/WrapperComponent/QuestionTemplate';
import { TextField } from '@material-ui/core';
import NoIdeaCheckbox from '../../../Partial/NoIdeaCheckbox/NoIdeaCheckbox';


const Height = 600
const useStyles = makeStyles((theme) => ({
  columnRoot: {
      overflow: "auto" , 
      overflowX: "hidden" ,
      maxHeight: Height
  },

  CheckBoxColorSelected: {
    backgroundColor: theme.palette.warning.main
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

  NoIdeaStatus: {
  display: "none"
}
}));



export default function MultiCheckbox(props) {
  const classes = useStyles();
  const [Checked, setChecked] = useState(false) 
  const Data = props.choices.values;

  let initialState = [];

  for (let i = 0; i < Data.length; i++) {
    initialState.push({
      id: Data[i].id , 
      status: false , 
      choice: Data[i].choice
    })
  }
  
  const [Choices , setChoices] = useState(initialState);
  

  const handleChange = (e, key) => {
    let updateChoices = [];
    Choices.forEach(item => {
      if (item.id === key) {
        updateChoices.push({
          id: item.id , 
          status: !item.status ,
          choice: item.choice
        })
      } else {
        updateChoices.push({
          id: item.id , 
          status: item.status ,
          choice: item.choice
        })
      }
    });

    setChoices(updateChoices);
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

const formControlStyle = getFormControlStyle(props.choices.column);

 let FormGroup = [];

 Choices.forEach(item => {
   FormGroup.push(
    <FormControlLabel
    key={item.id}
    className={clsx({
              [classes.FormControlLabel]: true , 
              [classes.CheckBoxColorSelected] : item.status
    })}
    control={<Checkbox disabled={Checked} key={item.id} checked={item.status} onChange={(e) => handleChange(e , item.id)} />}
    label={item.choice}
  />
   )
 })


 const checkboxChangeHandler = () => {
  setChecked(prev => !prev);
  setChoices(initialState)
}


  return (
    <QuestionTemplate number={props.number} text={props.text}>
        <div className={classes.columnRoot}>
          <FormControl  style={formControlStyle} component="fieldset" className={classes.formControl}>
          {FormGroup}
          </FormControl>
        </div>
        <div className={classes.CheckboxTextFieldWraper}>
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
              multiline={true}
              className={clsx({
                        [classes.TextField]: true , 
                        [classes.TextFieldVisibility]: true , 
                        [classes.TextFieldExist]: !props.choices.others
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
