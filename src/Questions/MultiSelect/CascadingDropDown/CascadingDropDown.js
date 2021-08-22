/* eslint-disable no-use-before-define */
import React , {useState , useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import QuestionTemplate from '../../../Components/UI/WrapperComponent/QuestionTemplate';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    Root: {
        display: "flex"
    }
}))


export default function CascadingDropDown(props) {
    const classes = useStyles();
    let firstChildData = props.ChildData;
    const ParentData = props.ParentData;
    console.log(firstChildData)
    const [Parent, setParent] = useState({ title: ""  , id: null });
    const [Child, setChild] = useState({ title: "" , id: null , parentid: null });


    const [ChildData, setChildData] = useState(props.ChildData)
//   const ChildData = props.ChildData.filter(child => {
//         ParentData.forEach(parent => {
//            return parent.id === child.parentid
//         })
//         console.log(child)
//         return "hello"
//   });
//   console.log(ChildData)


  const parentHandler = (e , list) => {
    console.log(list)
    setParent({...list})
    let updateChildData = [];
    firstChildData.forEach(item => {

        if (item.parentid === list.id) {
           updateChildData.push(item)
        }
    })

    setChildData(updateChildData)
    setChild({id: null , title: "" , parentid: null})

  }

  const childHandler = (e , list) => {
      console.log(list)
        setChild({...list})
  }

  return (

      <QuestionTemplate number={props.number} text={props.text}>
          <div className={classes.Root}>
            <Autocomplete
            value={{...Parent}}
            noOptionsText={'موردی یافت نشد'}
                onChange={(e , list) => parentHandler(e , list)}
                id="combo-box-demo"
                options={props.ParentData}
                getOptionLabel={(option) => option.title}
                style={{ width: 400 , padding: "20px" }}
                renderInput={(params) => <TextField
                                            {...params} 
                                        label={props.parent} 
                                        variant="outlined" />}
            />
            <Autocomplete
            value={{...Child}}
            noOptionsText={'موردی یافت نشد'}
                onChange={(e , list) => childHandler(e , list)}
                id="combo-box-demo"
                options={ChildData}
                getOptionLabel={(option) => option.title}
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




