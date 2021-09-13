/* eslint-disable no-use-before-define */
import React , {useState , useEffect} from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useDispatch } from 'react-redux';
import * as actionTypes from '../../../Redux/Actions/actionTypes';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import QuestionTemplate from '../../../Components/UI/WrapperComponent/QuestionTemplate';

const useStyles = makeStyles(theme => ({
  Root: {
    display: "flex" , 
    justifyContent: "center" ,
  } ,

  Autocomplete: {
    width: "70%" , 
    padding: "20px"
  }
}))

export default function MultiDropDown(props) {
  let dispatch = useDispatch();
  let CurrentQuestion = {...props} 
  const [ValueOfAutoComplete, setValueOfAutoComplete] = useState([])
  const classes = useStyles();

  useEffect(() => {
    let ValueOfAuto = [];
    CurrentQuestion.choices.values.forEach(item => {
      if (item.status) {
        ValueOfAuto.push(item)
      }
    })
    setValueOfAutoComplete([...ValueOfAuto])
    
  }, [CurrentQuestion.choices.values])
  
  const InputHandler = (e , list , reason , detail) => {
    setValueOfAutoComplete([...list])
    let updateCurrentQuestion = JSON.parse(JSON.stringify(CurrentQuestion));
    updateCurrentQuestion.choices.values.forEach(item => {
      if (list[0]) {
        list.forEach(element => {
          if (element.id === item.id) {
            item.status = true;

          } else if (element.id === item.id) {
            item.status = false
          }
        })
      } else {
        item.status = false
      }
    })
    dispatch({type: actionTypes.UPDATE_CURRENT_QUESTION , payload: updateCurrentQuestion })
    dispatch({type: actionTypes.CHECK_FOR_REQUIRE_VALIDATE , CurrentQuestion: updateCurrentQuestion })
  }

  return (
    <QuestionTemplate number={CurrentQuestion.number} text={CurrentQuestion.caption}>
        <div className={classes.Root}>
          <Autocomplete
              className={classes.Autocomplete}
              value={ValueOfAutoComplete}
              onChange={(e , list, reason , detail) => InputHandler(e , list, reason , detail)}
              multiple
              id="tags-outlined"
              options={CurrentQuestion.choices.values}
              getOptionLabel={(option) => option.caption}
              filterSelectedOptions
              renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              label={props.caption}
            />
          )}
        />
        </div>
    </QuestionTemplate>
  );
}



