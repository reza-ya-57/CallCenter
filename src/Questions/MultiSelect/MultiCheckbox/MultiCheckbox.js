import React , {useEffect , useState}  from 'react';
import "./MultiCheckbox.css";
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import QuestionTemplate from '../../../Components/UI/WrapperComponent/QuestionTemplate';
import { TextField } from '@material-ui/core';
import  CheckBox  from '@material-ui/core/Checkbox';
import clsx from 'clsx';
import { height } from '@material-ui/system';

const Width = 200;
const Height = 600
const useStyles = makeStyles((theme) => ({
  columnRoot: {
      // display: "flex" ,
      // flexDirection: "row" ,
      // width: "100%" ,
      // flexWrap: "wrap" ,
      // margin: '0px' , 
      // justifyContent: "center"
      overflow: "auto" , 
      overflowX: "hidden" ,
      maxHeight: Height
  },

  rowRoot : {

  } ,

  formControl: {
  } ,

  formControl_column_1: {
    display: "grid" , 
    gridTemplateColumns: "auto" ,
  },
  formControl_column_2: {
    display: "grid" , 
    gridTemplateColumns: "auto auto" ,
  },
  formControl_column_3: {
    display: "grid" , 
    gridTemplateColumns: "auto auto auto" ,
  },

  DisplayNone: {
  } ,

  FormControlLabel: {
      backgroundColor: "white" , 
      color: "green" ,
      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" ,
      padding: " 5px 10px" ,
      borderBottom: "3px green solid" ,
      margin: "10px" ,
      "&:hover" : {
        transform: "scale(1.02)"
      }
      

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
  console.log(Choices)
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
        [classes.FormControlLabel]: true
    })}
    control={<Checkbox disabled={Checked} key={item.id} checked={item.status} onChange={(e) => handleChange(e , item.id)} />}
    label={item.choice}
  />
   )
 })


 const handleChecked = () => {
  setChecked(prev => !prev)
  let updateChoices = []
  setChoices(initialState)

}


  return (
    <QuestionTemplate number={props.number} text={props.text}>
        <div className={classes.columnRoot}>
          <FormControl  style={formControlStyle} component="fieldset" className={classes.formControl}>
          {FormGroup}
          </FormControl>
    </div>
    <div style={{display: "flex" , justifyContent: "flex-start" , alignItems: "center" , marginRight: "30px" , alignItems: "flex-start" }}>
    <FormControlLabel
          style={{backgroundColor: "grey" , padding: "5px 10px" , color: "white" , borderRadius: "10px" , height: "60px" , marginTop: "10px"}}
            control={<Checkbox checked={Checked} onChange={handleChecked} name="check" />}
            label="هیچکدام"
          />
    <TextField 
        style={{width: "500px" , marginTop: "20px" , position: "relative" , bottom: "10px"}}
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
        // !(value === "سایر موارد")
        />
    </div>
    </QuestionTemplate>
  );
}
