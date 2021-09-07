/* eslint-disable no-use-before-define */
import React , {useState , useEffect} from 'react';
import { useSelector , useDispatch } from 'react-redux';
import * as actionTypes from '../../../Redux/Actions/actionTypes';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import QuestionTemplate from '../../../Components/UI/WrapperComponent/QuestionTemplate';



const useStyles = makeStyles(theme => ({
  Root: {
    display: "flex" , 
    justifyContent: "center"
  }
}))


export default function SingleDropDown(props) {
  let dispatch = useDispatch();
  let {CurrentQuestion} = useSelector(state => state.currentqa);
  const [ValueOfAutoComplete, setValueOfAutoComplete] = useState(null)
  const classes = useStyles();
  
  useEffect(() => {
    let ValueOfAuto = null;
    CurrentQuestion.choices.values.forEach(item => {
      if (item.status) {
        ValueOfAuto = item
      }
    })
    setValueOfAutoComplete(ValueOfAuto)
    
  }, [])
  const InputHandler = (e , val) => {

    let updateCurrentQuestion = JSON.parse(JSON.stringify(CurrentQuestion));
    if (val) {
    updateCurrentQuestion.choices.values.forEach((item  , index) => {
        if (item.id === val.id) {
          item.status = true;
          setValueOfAutoComplete(item)
        } else {
          item.status = false;
        }
      })
    } else {
      updateCurrentQuestion.choices.values.forEach(item => {
        item.status = false
      })
    }
    
    dispatch({type: actionTypes.UPDATE_CURRENT_QUESTION , payload: updateCurrentQuestion })
    dispatch({type: actionTypes.CHECK_FOR_REQUIRE_VALIDATE , CurrentQuestion: updateCurrentQuestion })
  }




  return (

      <QuestionTemplate number={CurrentQuestion.number} text={CurrentQuestion.caption}>
          <div className={classes.Root}>
            <Autocomplete
              noOptionsText={'موردی یافت نشد'}
                onChange={(e , val) => InputHandler(e , val)}
                options={CurrentQuestion.choices.values}
                getOptionLabel={(option) => option.caption}
                value={ValueOfAutoComplete}
                style={{ width: 400 , padding: "20px" }}
                renderInput={(params) => <TextField
                                          {...params} 
                                          label={props.caption} 
                                          variant="outlined" />}
            />

          </div>
      </QuestionTemplate>
  );
}




