import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import QuestionTemplate from '../../../Components/UI/WrapperComponent/QuestionTemplate';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
  root: {
      display: "flex" ,
      position: 'relative' ,
      bottom: '10px' ,
      padding: '10px 0px' , 
      margin: '0px'
    // display: 'flex',
    // flexWrap: 'wrap' 
  },
  formControl: {
    margin: theme.spacing(3),
  },

  DisplayNone: {
      display: "none"
  } ,

  FormControl: {
    // boxShadow: " rgba(149, 157, 165, 0.2) 0px 8px 24px" ,
      backgroundColor: '#EBFFE5' , 
      padding: '0px 10px' ,
      borderRadius: '0px 10px 10px 10px' ,
      margin: '5px 0px' , 
      borderLeft: '5px #f50057 solid'

  }
}));

export default function MultiCheckbox(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    check001: false,
    check002: false,
    check003: false,
    check004: false,
    check005: false,
    check006: false,
    check007: false,
    check008: false,
    check009: false,
  });

  const Checks = props.checks
  console.log(Object.keys(Checks)[0])
  console.log(Object.keys(state)[0])
  console.log(Object.keys(Checks)[0] === Object.keys(state)[0])
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };


  return (
    <QuestionTemplate number='5' text='از خدمات کدام شرکت ها راضی بودید ؟'>
        <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup>
          <FormControlLabel
            className={clsx({
                [classes.DisplayNone]: !(Object.keys(Checks)[0] === Object.keys(state)[0]) ,
                [classes.FormControl]: true
            })}
            control={<Checkbox checked={state.check001} onChange={handleChange} name="check001" />}
            label={Checks[Object.keys(Checks)[0]]}
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
      </FormControl>

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
      </FormControl>

      <FormControl component="fieldset" className={classes.formControl}>
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
      </FormControl>

    </div>
    </QuestionTemplate>
  );
}
