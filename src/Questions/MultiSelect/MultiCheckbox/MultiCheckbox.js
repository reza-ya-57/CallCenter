import React , {useEffect , useState}  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import QuestionTemplate from '../../../Components/UI/WrapperComponent/QuestionTemplate';
import clsx from 'clsx';

const Width = 200;

const useStyles = makeStyles((theme) => ({
  columnRoot: {
      display: "flex" ,
      flexDirection: "row" ,
      width: "100%" ,
      // height: "250px" ,
      flexWrap: "wrap" ,
      margin: '0px' , 
      justifyContent: "center"
    // display: 'flex',
    // flexWrap: 'wrap' 
  },

  rowRoot : {

  } ,
  formControl: {
    width: "auto" ,
    backgroundColor: "yellow"  ,
  },

  DisplayNone: {
      // display: "none"
  } ,

  FormControlLabel: {
    // boxShadow: " rgba(149, 157, 165, 0.2) 0px 8px 24px" ,
      // backgroundColor: 'purple' , 
      // color: "#FFE77AFF" ,
      backgroundColor: "white" , 
      color: "green" ,
      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" ,
      width: Width ,
      padding: "5px" ,
      // borderRadius: '0px 10px 10px 10px' ,
      borderBottom: "3px green solid" ,
      margin: "10px" ,
      "&:hover" : {
        transform: "scale(1.01)"
      }
      
      // borderLeft: '5px #f50057 solid'

  }
}));

let object = {}
object.check11 = false;
console.log(object)


export default function MultiCheckbox(props) {
  const classes = useStyles();
  
  const Data = props.choices;
  console.log(Data[0].choice)
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

 let FormGroup = [];

 Choices.forEach(item => {
   console.log(item.id)
   FormGroup.push(
    <FormControlLabel
    className={clsx({
        // [classes.DisplayNone]: !(Object.keys(Checks)[0] === Object.keys(state)[0]) ,
        [classes.FormControlLabel]: true
    })}
    control={<Checkbox key={item.id} checked={item.status} onChange={(e) => handleChange(e , item.id)} />}
    label={item.choice}
  />
   )
 })
 console.log(FormGroup)


  // const Checks = state
  // console.log(Object.keys(Checks)[0])
  // console.log(Object.keys(state)[0])
  // console.log(Object.keys(Checks)[0] === Object.keys(state)[0])
  // const handleChange = (event) => {
  //   setState({ ...state, [event.target.name]: event.target.checked });
  // };


  return (
    <QuestionTemplate number={props.number} text={props.text}>
        <div className={classes.columnRoot}>
          <FormControl component="fieldset" className={classes.formControl}>
          </FormControl>
          {FormGroup}
      {/*
        <FormGroup>
          <FormControlLabel
            className={clsx({
                [classes.DisplayNone]: !(Object.keys(Checks)[0] === Object.keys(state)[0]) ,
                [classes.FormControl]: true
            })}
            control={<Checkbox checked={state.check001} onChange={handleChange} name="check001" />}
            label="گزینه شماره 1"
          />
          <FormControlLabel
            className={clsx({
                [classes.DisplayNone]: !(Object.keys(Checks)[1] === Object.keys(state)[1]),
                [classes.FormControl]: true
            })}
            control={<Checkbox checked={state.check002} onChange={handleChange} name="check002" />}
            label={Checks[Object.keys(Checks)[1]]}
          />
          <FormControlLabel
            className={clsx({
                [classes.DisplayNone]: !(Object.keys(Checks)[2] === Object.keys(state)[2]),
                [classes.FormControl]: true
            })}
            control={<Checkbox checked={state.check003} onChange={handleChange} name="check003" />}
            label={Checks[Object.keys(Checks)[2]]}
          />
        </FormGroup>
       */}
{/* 
      <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup>
          <FormControlLabel
            className={clsx({
                [classes.DisplayNone]: !(Object.keys(Checks)[3] === Object.keys(state)[3]),
                [classes.FormControl]: true
            })}
            control={<Checkbox checked={state.check004} onChange={handleChange} name="check004" />}
            label={Checks[Object.keys(Checks)[3]]}
          />
          <FormControlLabel
            className={clsx({
                [classes.DisplayNone]: !(Object.keys(Checks)[4] === Object.keys(state)[4]),
                [classes.FormControl]: true
            })}
            control={<Checkbox checked={state.check005} onChange={handleChange} name="check005" />}
            label={Checks[Object.keys(Checks)[4]]}
          />
          <FormControlLabel
            className={clsx({
                [classes.DisplayNone]: !(Object.keys(Checks)[5] === Object.keys(state)[5]),
                [classes.FormControl]: true
            })}
            control={<Checkbox checked={state.check006} onChange={handleChange} name="check006" />}
            label={Checks[Object.keys(Checks)[5]]}
          />
        </FormGroup>
      </FormControl> */}

      {/* <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup>
          <FormControlLabel
            className={clsx({
                [classes.DisplayNone]: !(Object.keys(Checks)[6] === Object.keys(state)[6]),
                [classes.FormControl]: true
            })}
            control={<Checkbox checked={state.check007} onChange={handleChange} name="check007" />}
            label={Checks[Object.keys(Checks)[6]]}
          />
          <FormControlLabel
            className={clsx({
                [classes.DisplayNone]: !(Object.keys(Checks)[7] === Object.keys(state)[7]),
                [classes.FormControl]: true
            })}
            control={<Checkbox checked={state.check002} onChange={handleChange} name="check008" />}
            label={Checks[Object.keys(Checks)[7]]}
          />
          <FormControlLabel
            className={clsx({
                [classes.DisplayNone]: !(Object.keys(Checks)[8] === Object.keys(state)[8]),
                [classes.FormControl]: true
            })}
            control={<Checkbox checked={state.check003} onChange={handleChange} name="check009" />}
            label={Checks[Object.keys(Checks)[8]]}
          />
        </FormGroup>
      </FormControl> */}
      {/* <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup>
          <FormControlLabel
            className={clsx({
                [classes.DisplayNone]: !(Object.keys(Checks)[6] === Object.keys(state)[6]),
                [classes.FormControl]: true
            })}
            control={<Checkbox checked={state.check007} onChange={handleChange} name="check007" />}
            label={Checks[Object.keys(Checks)[6]]}
          />
          <FormControlLabel
            className={clsx({
                [classes.DisplayNone]: !(Object.keys(Checks)[7] === Object.keys(state)[7]),
                [classes.FormControl]: true
            })}
            control={<Checkbox checked={state.check002} onChange={handleChange} name="check008" />}
            label={Checks[Object.keys(Checks)[7]]}
          />
          <FormControlLabel
            className={clsx({
                [classes.DisplayNone]: !(Object.keys(Checks)[8] === Object.keys(state)[8]),
                [classes.FormControl]: true
            })}
            control={<Checkbox checked={state.check003} onChange={handleChange} name="check009" />}
            label={Checks[Object.keys(Checks)[8]]}
          />
        </FormGroup>
      </FormControl> */}

    </div>
    </QuestionTemplate>
  );
}
