/* eslint-disable no-use-before-define */
import React , {useState} from 'react';
import { useSelector , useDispatch } from 'react-redux';
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
    let {CurrentQuestion} = useSelector(state => state.currentqa);
    // let CurrentQuestion = {...props} 
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

      console.log(list)
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
                console.log(item.parentId , list.id)
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
                getOptionLabel={(option) => option.caption}
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
                getOptionLabel={(option) => option.caption}
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

// ParentData={[
//     { id: 1 , title: 'تهران' } ,
//     { id: 2 , title: 'شیراز' } ,
//     { id: 3 , title: 'اصفهان' } ,
//     { id: 4 , title: 'قزوین' } ,
//     { id: 5 , title: 'مشهد' } ,
//     { id: 6 , title: 'تبریز' } ,
//     { id: 7 , title: 'سمنان' } ,
//     { id: 8 , title: 'کرمان' } ,
//     { id: 9 , title: 'یزد' } ,
//     { id: 10 , title: 'بروجرد' } ,
//     { id: 11, title: 'بجنورد' } ,
//     { id: 12, title: 'زنجان' } ,
//     { id: 13, title: 'خوزستان' } ,
//     { id: 14, title: 'قصه حسین کرد شبستری قصه حسین کرد شبستری  قصه حسین کرد شبستری  قصه حسین کرد شبستری' } ,
//     { id: 15, title: 'ساری' } ,
//     { id: 16, title: 'لاهیجان' } ,
//     { id: 17, title: 'چالوس' } ,
//     { id: 18, title: 'اردبیل' } ,
//     { id: 19, title: 'نوشهر' } ,
//     { id: 20, title: 'زاهدان' } ,
// ]}

// ChildData={[
//   { id: 50 , title: 'تهران' , parentid: 13 } ,
//   { id: 2 , title: 'شیراز' , parentid: 13 } ,
//   { id: 3 , title: 'اصفهان' , parentid: 13 } ,
//   { id: 4 , title: 'قزوین' , parentid: 13 } ,
//   { id: 5 , title: 'مشهد' , parentid: 14 } ,
//   { id: 6 , title: 'تبریز' , parentid: 14 } ,
//   { id: 7 , title: 'سمنان' , parentid: 14 } ,
//   { id: 8 , title: 'کرمان' , parentid: 14 } ,
//   { id: 9 , title: 'یزد' , parentid: 15 } ,
//   { id: 10 , title: 'بروجرد' , parentid: 15 } ,
//   { id: 11, title: 'بجنورد' , parentid: 15 } ,
//   { id: 12, title: 'زنجان' , parentid: 15 } ,
//   { id: 13, title: 'خوزستان' , parentid: 16 } ,
//   { id: 14, title: 'گرکان' , parentid: 16 } ,
//   { id: 15, title: 'ساری' , parentid: 16 } ,
//   { id: 16, title: 'لاهیجان' , parentid: 1 } ,
//   { id: 17, title: 'چالوس' , parentid: 1 } ,
//   { id: 18, title: 'اردبیل' , parentid: 1 } ,
//   { id: 19, title: 'نوشهر' , parentid: 1 } ,
//   { id: 20, title: 'زاهدان' , parentid: 1 } ,
// ]}


