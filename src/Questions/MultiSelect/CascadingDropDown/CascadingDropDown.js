/* eslint-disable no-use-before-define */
import React , {useState} from 'react';
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
    const classes = useStyles();
    // WE FIRST SAVE INITIAL CHILD_DATA THAT COMES FROM PROPS IN NEW VARIABLE 
    // WHEN PARENT INPUT CHANGE WE LOOP THROUGH THAT TO 
    //  GENRATE NEW FILTER CHILD ACORDING TO THE PARENT SELECTED
    let initialChildData = props.ChildData;

    const [, setParent] = useState({ id: null , title: '' });
    const [, setChild] = useState({ title: "" , id: null , parentid: null });

    // OPTION FOR PARENT DATA ALWAYS EQUAL TO THE PROPS.PARENT
    // BUT FOR CHILD WE SHOULD FILTER IT ACORDING TO THE PARENT 
    // THIS STATE DEFINE TO DO THAT AND INITIALY SET TO THE PROPS.CHILDDATA
    const [ChildData, setChildData] = useState(props.ChildData)

   // TRIGGER WHEN PARENT INPUT CHANGE 
  const parentHandler = (e , list) => {
    // SETPARENT TO THE INPUT THAT USER SELECT IN DROP_DOWN
    setParent({...list})
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
                options={props.ParentData}
                getOptionLabel={(option) => {
                    if(!option.title) {
                        return ""
                    }
                    return option.title
                }}
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
                options={ChildData} getOptionLabel={(option) => {
                    if(!option.title) {
                        return ""
                    }
                    return option.title
                }}
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




