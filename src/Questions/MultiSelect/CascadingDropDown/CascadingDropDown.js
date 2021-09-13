/* eslint-disable no-use-before-define */
import React , {useState} from 'react';
import { useDispatch } from 'react-redux';
import * as actionTypes from '../../../Redux/Actions/actionTypes';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import QuestionTemplate from '../../../Components/UI/WrapperComponent/QuestionTemplate';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    Root: {
        display: "flex", 
        justifyContent: "center"
    }
}))


export default function CascadingDropDown(props) {
    let dispatch = useDispatch();
    // let {CurrentQuestion} = useSelector(state => state.currentqa);
    let CurrentQuestion = {...props} 
    let initialParent;
    let initialChild;

    CurrentQuestion.choices.parentValues.forEach(item => {
        if (item.status) {
            initialParent = item
        }
    })
    CurrentQuestion.choices.childValues.forEach(item => {
        if (item.status) {
            initialChild = item
        }
    })


    const classes = useStyles();
    const [Child, setChild] = useState(initialChild)
    const [Parnet, setParnet] = useState(initialParent)
    // WE FIRST SAVE INITIAL CHILD_DATA THAT COMES FROM PROPS IN NEW VARIABLE 
    // WHEN PARENT INPUT CHANGE WE LOOP THROUGH THAT TO 
    //  GENRATE NEW FILTER CHILD ACORDING TO THE PARENT SELECTED

    let initialChildData = CurrentQuestion.choices.childValues.slice();


    // OPTION FOR PARENT DATA ALWAYS EQUAL TO THE PROPS.PARENT
    // BUT FOR CHILD WE SHOULD FILTER IT ACORDING TO THE PARENT 
    // THIS STATE DEFINE TO DO THAT AND INITIALY SET TO THE PROPS.CHILDDATA

    const [ChildData, setChildData] = useState(CurrentQuestion.choices.childValues)
    let validate = false

   // TRIGGER WHEN PARENT INPUT CHANGE 
  const parentHandler = (e , list) => {
      
    let updateCurrentQuestion = JSON.parse(JSON.stringify(CurrentQuestion));

      setParnet({...list})
    // SETPARENT TO THE INPUT THAT USER SELECT IN DROP_DOWN
    // setParent({...list})

    updateCurrentQuestion.choices.parentValues.forEach(item => {
        if (list) {
            if (list.id === item.id) {
                item.status = true
                validate = true;
            } else {
                item.status = false
            }
        } else {
            item.status = false
            validate = false
        }
    })
    let updateChildData = [];
    initialChildData.forEach(item => {
        if (list) {
            if (item.parentId === list.id) {
                updateChildData.push(item)
            }
        }
    
    })

    setChildData(updateChildData)

    dispatch({type: actionTypes.UPDATE_CURRENT_QUESTION , payload: updateCurrentQuestion })

    dispatch({type: actionTypes.CHECK_FOR_REQUIRE_VALIDATE , CurrentQuestion: updateCurrentQuestion })
    dispatch({type: actionTypes.SET_REQUIRE_VALIDATE , payload: validate })
  }

  const childHandler = (e , list) => {  
    let updateCurrentQuestion = JSON.parse(JSON.stringify(CurrentQuestion));
    updateCurrentQuestion.choices.childValues.forEach(item => {
        if (list) {
            if (list.id === item.id) {
                item.status = true
            } else {
                item.status = false
            }
        } else {
            item.status = false
        }
    })
        setChild({...list})
        dispatch({type: actionTypes.UPDATE_CURRENT_QUESTION , payload: updateCurrentQuestion })
  }

  return (

      <QuestionTemplate number={CurrentQuestion.number} text={CurrentQuestion.caption}>
          <div className={classes.Root}>
            <Autocomplete
                noOptionsText={'موردی یافت نشد'}
                onChange={(e , list) => parentHandler(e , list)}
                id="parent-combo-box"
                options={CurrentQuestion.choices.parentValues}
                getOptionLabel={(option) => {
                    if (!option.caption) {
                        return ""
                    }
                    return option.caption
                }}
                value={Parnet}
                // options={props.ParentData}
                // getOptionLabel={(option) => {
                //     if(!option.title) {
                //         return ""
                //     }
                //     return option.title
                // }}
                style={{ width: 400 , padding: "20px" }}
                renderInput={(params) => <TextField
                                                {...params} 
                                            label={props.parent} 
                                            variant="outlined" />}
            />
            <Autocomplete
                noOptionsText={'موردی یافت نشد'}
                onChange={(e , list) => childHandler(e , list)}
                id="child-combo-box"
                options={ChildData}
                getOptionLabel={(option) => {
                    if (!option.caption) {
                        return ""
                    }
                    return option.caption
                }}
                value={Child}
                // options={ChildData} 
                // getOptionLabel={(option) => {
                //     if(!option.title) {
                //         return ""
                //     }
                //     return option.title
                // }}
                style={{ width: 400 , padding: "20px" }}
                renderInput={(params) => <TextField
                                                {...params} 
                                            label={props.child} 
                                            variant="outlined" />}
                />
          </div>
      </QuestionTemplate>
  );
}



