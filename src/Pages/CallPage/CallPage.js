import React   from 'react';
import { useStore } from 'react-redux';
import clsx from 'clsx';
import * as actionTypes from '../../Redux/Actions/actionTypes';
import { Button } from '@material-ui/core';
import { useState }  from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import * as actionCreators from '../../Redux/Actions/CurrentQuestionAction';
import QuestionFilter from '../../Questions/QuestionFilter/QuestionFilter';
import { IsCurrentQuestionHaveAnswerd } from '../../functions/handleData';
import EditeModal from '../../Questions/EditeModal/EditeModal';
import DetermineStatus from '../../Questions/DetermineStatus/DetermineStatus';
import { ButtonGroup } from 'react-bootstrap';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CascadingDropDown from '../../Questions/MultiSelect/CascadingDropDown/CascadingDropDown';




const useStyles = makeStyles(theme => ({
  root: {
    // minWidth: 275,
  },

  Footer: {
    // backgroundColor: 'red' ,
    // height: "100px" ,


  } , 
  

  DisplayNone: {
    display: "none"
  } , 

  HeaderMenu: {
    display: "flex" ,
    width: "100%" , 
    // justifyContent: "space-around" , 
    alignItems: "flex-start" ,
  } , 

  ButtonGroup: {
    display: "flex" , 
    // justifyContent: "space-around" ,
    position: "fixed" , 
    width: "100%" ,
    bottom: "0px"  ,
    height: "50px"
  } , 

  NextButton: {
    // flexGrow: 1 ,
    width: "50%" ,
    // backgroundColor: 'green' , 
    // color: "white" , 
    fontSize: "1.2rem" , 
    "&:hover": {
    fontSize: "1.2rem" , 
    // backgroundColor: "red"
    }
  } , 

  BackButton: {
    // flexGrow: 1 , 
    width: "50%" ,
    backgroundColor: "#1B291B" , 
    color: "white" , 
    fontSize: "1.2rem" ,
    "&:hover": {
      // background: "blue" ,
      backgroundColor: "#3D563D" ,
      fontSize: "1.2rem"
    }
  }
}));



export default function SimpleCard() {
  const classes = useStyles();
  const store = useStore()
  let dispatch = useDispatch();
  const [StartStatus, setStartStatus] = useState(false)
  let {CurrentQuestion} = useSelector(state => state.currentqa);
  let {Validate} = useSelector(state => state.validate);
  


  const nextHandler = () => {

    dispatch(actionCreators.submitAnswer(CurrentQuestion))
    dispatch({type: actionTypes.SET_REQUIRE_VALIDATE , payload: false})
    const updateData = store.getState().qa.Data;
    dispatch({ type: 'NEXT_QUESTION' , payload: updateData })

  }

  const backHandler = () => {
    var CurrentChange = IsCurrentQuestionHaveAnswerd(CurrentQuestion)
    if (CurrentChange) {
      dispatch(actionCreators.submitAnswer(CurrentQuestion))
    }
    const updateData = store.getState().qa.Data;
    dispatch({type: 'BACK_QUESTION' , Data: updateData})
    dispatch({type: actionTypes.SET_REQUIRE_VALIDATE , payload: true})
  }

  const startHandler = () => {
    const updateData = store.getState().qa.Data;
    dispatch({ type: 'NEXT_QUESTION' , payload: updateData })
    setStartStatus(true)
  }
    
    return (
      <div>
          <div className={classes.Footer}>
            <div className={classes.HeaderMenu}>
              <EditeModal />
              {/* <DetermineStatus /> */}
            </div>
            
            <Button className={clsx({
                        [classes.DisplayNone]: StartStatus
            })} disabled={false}  color="primary" variant="outlined"  onClick={ startHandler }>برو بریم</Button>
        </div>
        {QuestionFilter(CurrentQuestion)}
          <div variant="contained" className={classes.ButtonGroup}>
            <Button className={classes.BackButton}  variant="outlined" onClick={ backHandler }>
              <ArrowForwardIcon />
            </Button>
            <Button className={classes.NextButton} color="primary" variant="contained" onClick={ nextHandler } disabled={!Validate.RequireValidate}>
              <ArrowBackIcon />
            </Button>
          </div>
      </div>
  );
}