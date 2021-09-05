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
    const classes = useStyles();
    const [Child, setChild] = useState(null)
    const [Parnet, setParnet] = useState(null)
    // WE FIRST SAVE INITIAL CHILD_DATA THAT COMES FROM PROPS IN NEW VARIABLE 
    // WHEN PARENT INPUT CHANGE WE LOOP THROUGH THAT TO 
    //  GENRATE NEW FILTER CHILD ACORDING TO THE PARENT SELECTED
    // let initialChildData = props.ChildData;
    let initialChildData = CurrentQuestion.choices.childValues.slice();

    // const [, setParent] = useState({ id: null , title: '' });
    // const [, setChild] = useState({ title: "" , id: null , parentid: null });

    // OPTION FOR PARENT DATA ALWAYS EQUAL TO THE PROPS.PARENT
    // BUT FOR CHILD WE SHOULD FILTER IT ACORDING TO THE PARENT 
    // THIS STATE DEFINE TO DO THAT AND INITIALY SET TO THE PROPS.CHILDDATA
    const [ChildData, setChildData] = useState(props.ChildData)

   // TRIGGER WHEN PARENT INPUT CHANGE 
  const parentHandler = (e , list) => {
      console.log(list)
      setParnet({...list})
    // SETPARENT TO THE INPUT THAT USER SELECT IN DROP_DOWN
    // setParent({...list})
    // 
    let updateChildData = [];
    initialChildData.forEach(item => {
    if (list) {
        if (item.parentid === list.id) {
            updateChildData.push(item)
         }
    }
    
    })

    setChildData(updateChildData)
    setChild({id: null , title: "" , parentid: null})

  }

  const childHandler = (e , list) => {
        setChild({...list})
  }

  return (

      <QuestionTemplate number={props.number} text={props.text}>
          <div className={classes.Root}>
            <Autocomplete
                noOptionsText={'موردی یافت نشد'}
                onChange={(e , list) => parentHandler(e , list)}
                id="parent-combo-box"
                options={CurrentQuestion.choices.parentValues}
                getOptionLabel={(option) => option.caption}
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
                options={CurrentQuestion.choices.childValues}
                getOptionLabel={(option) => option.caption}
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


