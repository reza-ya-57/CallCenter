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
  },

  CurrentTurnQuestion: {
    color: "purple" , 
    cursor: "pointer"
  } ,

  DeletedQuestion: {
    color: "red"
  } ,

  NotAnsweredQuestion: {

  } , 

  AnsweredQuestion: {
    color: "green"
  }

}));

export default function EditeModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);


  const Data = useSelector(state => state.qa.Data)
  console.log(Data)

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

const clickHandler = (e , id) => {
  console.log(id)
}



  let questionList = [];

 const editeModalHandler = (data) => {
   let CurrentTurnId = ReturnQuestionTurn(Data).id
   console.log(CurrentTurnId)

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
                <Grid key={item.id} className={classes.NotAnsweredQuestion} onClick={(e) => clickHandler(e , item.id)} spacing={2} container item direction="row">
    
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
                <Grid  key={item.id} className={classes.DeletedQuestion} onClick={(e) => clickHandler(e , item.id)} spacing={2} container item direction="row">
    
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
            <Grid 
              spacing={2}
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              >
                {questionList}
                {/* <Grid spacing={2} container item direction="row">
                    <Grid item>
                      Number
                    </Grid>
                    <Grid item>
                      Caption
                    </Grid>
                </Grid>
                <Grid spacing={2}  container item direction="row">
                    <Grid item>
                      Number
                    </Grid>
                    <Grid item>
                      Caption
                    </Grid>
                </Grid>
                <Grid spacing={2}  container item direction="row">
                    <Grid item>
                      Number
                    </Grid>
                    <Grid item>
                      Caption
                    </Grid>
                </Grid>
                <Grid spacing={2}  container item direction="row">
                    <Grid item>
                      Number
                    </Grid>
                    <Grid item>
                      Caption
                    </Grid>
                </Grid> */}
             
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
