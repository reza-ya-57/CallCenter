import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useSelector , useDispatch } from 'react-redux';
import * as actionTypes from '../../Redux/Actions/actionTypes';
import CascadingDropDown from '../MultiSelect/CascadingDropDown/CascadingDropDown';
import { Grid } from '@material-ui/core';
import { ReturnQuestionTurn } from '../../functions/handleData';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { IconButton } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    overflow: "auto" ,
    width: "80%" , 
    height: "80%" ,
    // border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: "10px" , 
    // backgroundColor: theme.palette.background.default , 
    backgroundColor: "#f9f9f9" , 
  },

  QuestionWraper: {  
    padding: "20px"
  } ,

  CurrentTurnQuestion: {
    borderRadius: "5px" ,
    // color: "purple" , 
    backgroundColor: "purple" ,
    color: "white" ,
    cursor: "pointer" , 
    borderRadius: "5px" , 
    margin: "5px" , 
    border: "1px purple solid" , 
    "&:hover": {
      transform: "scale(1.004)"
    }
  } ,

  DeletedQuestion: {
    color: "red", 
    cursor: "no-drop" ,
    borderRadius: "5px" , 
    margin: "5px" , 
    border: "1px red solid" , 
    "&:hover": {
      // transform: "scale(1.01)"
    }
  } ,

  NotAnsweredQuestion: {
    cursor: "no-drop" , 
    opacity: "0.5" ,
    borderRadius: "5px" , 
    margin: "5px" , 
    border: "1px grey solid" , 
    "&:hover": {
      // transform: "scale(1.01)"
    }
  } , 

  AnsweredQuestion: {
    color: "green", 
    cursor: "pointer" , 
    borderRadius: "5px" , 
    margin: "5px" , 
    border: "1px green solid" , 
    "&:hover": {
      transform: "scale(1.004)"
    }
  } , 

  ModalHeader: {
    marginBottom: "10px" , 
    display: "flex" , 
    justifyContent: "space-between" , 
    alignItems: "center" ,

  } , 

  HintWraper: {
    display: "flex" , 
    justifyContent: "center" , 
    alignItems: "center" , 
  }

}));

export default function EditeModal() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);


  const Data = useSelector(state => state.qa.Data)

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  

const clickHandler = (e , id) => {
  Data.forEach(item => {
    if (item.id === id) {
      dispatch({type: actionTypes.UPDATE_CURRENT_QUESTION , payload: item })
      dispatch({type: actionTypes.SET_REQUIRE_VALIDATE , payload: true})
      setOpen(false)
    }
  })
}



  let questionList = [];

 const editeModalHandler = (data) => {
   let CurrentTurnId = ReturnQuestionTurn(Data).id

   data.forEach(item => {
     // سوالی که جواب داده نشده ولی نوبت پرسیدنش است
     if (item.id === CurrentTurnId) {
          questionList.push(
            <Grid key={item.id} className={classes.CurrentTurnQuestion} onClick={(e) => clickHandler(e , item.id)} spacing={2} container item direction="row">

                <Grid item>
                  {item.number}
                </Grid>

                <Grid item>
                  {item.caption}
                </Grid>

            </Grid>
          )
      } else {
            // سوالی که جواب داده شده
            if (item.answered === true && item.display === true) {
              questionList.push(
                <Grid key={item.id} className={classes.AnsweredQuestion} onClick={(e) => clickHandler(e , item.id)} spacing={2} container item direction="row">
    
                    <Grid item>
                      {item.number}
                    </Grid>
    
                    <Grid item>
                      {item.caption}
                    </Grid>
    
                </Grid>
              )
            } 
            // سوالی که هنوز جواب داده نشده
            else if (item.answered === false && item.display === true) {
              questionList.push(
                <Grid key={item.id} className={classes.NotAnsweredQuestion}  spacing={2} container item direction="row">
    
                    <Grid item>
                      {item.number}
                    </Grid>
    
                    <Grid item>
                      {item.caption}
                    </Grid>
    
                </Grid>
              )
            } 
            // سوالی که حذف شده 
            else if (item.answered === false && item.display === false) {
              questionList.push(
                <Grid  key={item.id} className={classes.DeletedQuestion}  spacing={2} container item direction="row">
    
                    <Grid item>
                      {item.number}
                    </Grid>
    
                    <Grid item>
                      {item.caption}
                    </Grid>
    
                </Grid>
              )
            } 
     }
   })
 }

 editeModalHandler(Data)

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        react-transition-group
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
            <div className={classes.paper}>
                <div className={classes.ModalHeader}>
                    <div className={classes.HintWraper}>
                        <RadioButtonUncheckedIcon style={{color: "green" , fontSize: "1.2rem"}} />
                        <span>سوال جواب داه شده</span>
                    </div>
                    <div className={classes.HintWraper}>
                        <FiberManualRecordIcon style={{color: "purple" }} />
                        <span>سوال جاری</span>
                    </div>
                    <div className={classes.HintWraper}>
                        <RadioButtonUncheckedIcon style={{color: "red" , fontSize: "1.2rem"}} />
                        <span>سوال حذف شده</span>
                    </div>
                    <div className={classes.HintWraper}>
                        <RadioButtonUncheckedIcon style={{color: "grey" , fontSize: "1.2rem"}} />
                        <span>سوال جواب داده نشده</span>
                    </div>
                    <IconButton style={{color: "black" , position: "relative" , right: '20px'}} onClick={handleClose}>
                      <HighlightOffIcon />
                    </IconButton>
              </div>
              <div className={classes.QuestionWraper}>
                  <Grid 
                    spacing={2}
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    >
                      {questionList}
                  
                  </Grid>
              </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
