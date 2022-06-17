import React  ,{useState , useRef} from 'react';
import { useStore } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { useSelector , useDispatch } from 'react-redux';
import * as actionTypes from '../../Redux/Actions/actionTypes';
import { Grid } from '@material-ui/core';
import { ReturnQuestionTurn } from '../../functions/handleData';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { IconButton } from '@material-ui/core';
import CustomModal from '../../Partial/CustomModal/CustomModal';
import * as actionCreators from '../../Redux/Actions/CurrentQuestionAction';
import { blue, green, grey, lime, red, yellow } from '@material-ui/core/colors';
import Button from "@material-ui/core/Button"


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    overflow: "auto" ,
    width: "80%" , 
    height: "80%" ,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: "10px" , 
    backgroundColor: grey[50] , 
  },

  QuestionWraper: {  
    padding: "20px"
  } ,

  CurrentTurnQuestion: {
    backgroundColor: blue[800] ,
    color: "white" ,
    cursor: "pointer" , 
    borderRadius: "5px" , 
    margin: "5px" , 
    // border: "1px purple solid" , 
    "&:hover": {
      transform: "scale(1.004)"
    }
  } ,

  CurrentTurnQuestionIcon: {
    color: blue[800] , 
  } ,


  DeletedQuestion: {
    color: "black", 
    cursor: "no-drop" ,
    borderRadius: "5px" , 
    margin: "5px" , 
    border: "2px #d50000 solid" , 
    backgroundColor: red[50] ,
    opacity: "0.5" ,
  } ,

  DeletedQuestionIcon: {
    color: "#d50000" ,
    fontSize: "1.2rem"
  } ,

  NotAnsweredQuestion: {
    cursor: "no-drop" , 
    opacity: "0.5" ,
    borderRadius: "5px" , 
    margin: "5px" , 
    border: "2px grey solid" ,
  } , 

  NotAnsweredQuestionIcon: {
    color: "grey" ,
    fontSize: "1.2rem"
  } ,

  AnsweredQuestion: {
    color: "black", 
    cursor: "pointer" , 
    borderRadius: "5px" , 
    margin: "5px" , 
    border: "2px #2e7d32 solid" , 
    backgroundColor: green[50] ,
    "&:hover": {
      transform: "scale(1.004)"
    }
  } , 

  AnsweredQuestionIcon: {
    color: "#2e7d32" , 
    fontSize: "1.2rem"
  } ,

  CurrentQuestion: {
    color: "white", 
    // backgroundColor: "#ffea00" ,
    backgroundColor: yellow[900] ,
    cursor: "pointer" , 
    borderRadius: "5px" , 
    margin: "5px" , 
    "&:hover": {
      transform: "scale(1.004)"
    }
  } ,

  CurrentQuestionIcon: {
    color: "#ffea00" , 
  } ,

  ModalHeader: {
    marginBottom: "10px" , 
    display: "flex" , 
    justifyContent: "space-between" , 
    alignItems: "center" ,
    // border: "2px black solid" ,
    backgroundColor: grey[900] , 
    color : "white" , 
    borderRadius: "10px" , 
    marginLeft: "15px"  , 
    padding: "0px 10px" 
  } , 

  HintWraper: {
    display: "flex" , 
    justifyContent: "center" , 
    alignItems: "center" , 
  } , 

  CloseModalButton: {
    color: "white"
  }



}));

export default function EditeModal(props) {
  // برای نشان دادن یا ندادن مودال اخطار
  const [ModalStatus, setModalStatus] = useState(false)
  // حالت های مختلف اخطار که طبق آن دکمه تایید و رد کردن مودال کارهای مختلفی انجام میدهد
  const [ModalSituation, setModalSituation] = useState(null)

  const [ClickItemId, setClickItemId] = useState(null)
  // مسیج هایی که در حالت های مختلف مودال باید در مودال نشان داده شود
  const [ModalMessage, setModalMessage] = useState({
    ModalMessageDescription: null, 
    ModalMessageHeader: null
    
  })
  // سوال جاری که در ریداکس قرار دارد
  let {CurrentQuestion} = useSelector(state => state.currentqa);
  // ولید بودن جوابی که برای سوال جاری وارد شده است
  let {Validate} = useSelector(state => state.validate);
  // آیا جواب سوال جاری دست خورده یا نه 
  let {CurrentQuestionChange} = useSelector(state => state.currentqa);
  const dispatch = useDispatch();
  const classes = useStyles();
  const store = useStore()
  const [open, setOpen] = React.useState(false);


  const Data = useSelector(state => state.qa.Data)
  let paperRef = useRef(null);
  let CurrentQuestionRef = useRef(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  

const clickHandler = (e , id ) => {
  // ایا سوال جاری دارای جواب است ؟
  const Data = store.getState().qa.Data;
  // سوالی که نوبت پرسیدنش است را برمیگرداند
  // با سوال جاری فرق میکند
  // این سوالی است که اگر دکمه 
  // NEXT
  //را بزند وارد آن سوال میشود
  let TurnedQuesiton = ReturnQuestionTurn(Data)

  let clickedItem = null ;
  Data.forEach(item => {
    if (item.id === id) {
      clickedItem = item
      setClickItemId(item.id)
    }
  })

  // اگر روی سوال جاری کلیک شد فقط مودال بسته میشود
  if (CurrentQuestion.id === id) {
    // setOpen(false)
    console.log(paperRef.current.scrollTop)
    console.log(CurrentQuestionRef)
    paperRef.current.scrollTop = 400
  } else {

    // در اینجا 6 حالت مختلف برای دکمه ی 
  // BACK
  // در نظر گرفته شده که طبق هر کدام باید چه اتفاقی بیفتد
  // و در سه حالت آن که نیاز به باز شدم مودال است 
  // ModalSituation
  // را به حالت های مختلف ست میکند تا وفتی روی دکمه تایید مودال زده شده کارهای متفاوتی انجام شود
  
  //شرط اول 
  // روی سوالی هستیم که نوبتش است
  // یا میتوان گفت آیا سوال جاری با سوالی که نوبتش است یکی است
  if (CurrentQuestion.id === TurnedQuesiton.id) {
    // ایا جواب سوال تغییر کرده است
    if (CurrentQuestionChange === true) {
          // آیا پس از تغییر ، تغییرات وارد شده ولید است
          if (Validate.RequireValidate) {
                dispatch(actionCreators.submitAnswer(CurrentQuestion))
                dispatch({type: actionTypes.UPDATE_CURRENT_QUESTION , payload: clickedItem })
                dispatch({type: actionTypes.SET_CHANGE_CURRENT_QUESTION , payload: false})
                dispatch({type: actionTypes.SET_REQUIRE_VALIDATE , payload: true})
                setOpen(false);
          } else {
            setModalMessage({...ModalMessage , 
              ModalMessageHeader: "اطلاعات وارد شده معتبر نیست"  ,
              ModalMessageDescription: "در صورت تایید اطلاعات وارد شده ثبت نمیشود" 
            })
            setModalSituation("TURN_NOT_VALIDATE");
            setModalStatus(true)
          }


  } else {
    
      dispatch({type: actionTypes.UPDATE_CURRENT_QUESTION , payload: clickedItem })
      dispatch({type: actionTypes.SET_CHANGE_CURRENT_QUESTION , payload: false})
      dispatch({type: actionTypes.SET_REQUIRE_VALIDATE , payload: true})
      setOpen(false);
  }

} else {
    // ایا جواب سوال تغییر کرده است
    if (CurrentQuestionChange === true) {
       // ایا پس از تغییر ، تغییرات وارد شده ولید است
          if (Validate.RequireValidate === true) {
            setModalMessage({...ModalMessage , 
              ModalMessageHeader: "اطلاعات وارد شده معتبر نیست"  ,
              ModalMessageDescription: "در صورت تایید اطلاعات وارد شده ثبت نمیشود" 
            })
            setModalSituation("NOT_TURN_VALIDATE");
            setModalStatus(true)
          } else {
            setModalMessage({...ModalMessage , 
              ModalMessageHeader: "اطلاعات وارد شده معتبر نیست"  ,
              ModalMessageDescription: "در صورت تایید اطلاعات وارد شده ثبت نمیشود" 
            })
            setModalSituation("NOT_TURN_NOT_VALIDATE");
            setModalStatus(true)
          }

    } else {
      dispatch({type: actionTypes.UPDATE_CURRENT_QUESTION , payload: clickedItem })
      dispatch({type: actionTypes.SET_CHANGE_CURRENT_QUESTION , payload: false})
      dispatch({type: actionTypes.SET_REQUIRE_VALIDATE , payload: true})
      setOpen(false);
    }
}
  }
  
}


// این تابع وقتی اجرا میشود که دکمه ی تایید مودال زده شود
  // و با توجه به اینکه تو چه وضعیتی مودال فرا خوانده شده کار های متفاوتی میکند
  const modalSubmitHandler = () => {
    const Data = store.getState().qa.Data;
    let clickedItem = null ;
    Data.forEach(item => {
      if (item.id === ClickItemId) {
        clickedItem = item
        // setOpen(false)
      }
    })
    let backupCurrentQuestion;
    Data.forEach(item => {
      if (item.id === CurrentQuestion.id) {
        backupCurrentQuestion = item;
      }
    })
    console.log(ModalSituation)

    if (ModalSituation === "TURN_NOT_VALIDATE") {

      dispatch({type: actionTypes.UPDATE_CURRENT_QUESTION , payload: clickedItem })
      dispatch({type: actionTypes.SET_REQUIRE_VALIDATE , payload: true})
      dispatch({type: actionTypes.SET_CHANGE_CURRENT_QUESTION , payload: false})
      setModalStatus(false);
      setOpen(false);
    } else if (ModalSituation === "NOT_TURN_VALIDATE") {

      dispatch(actionCreators.submitAnswer(CurrentQuestion))
      dispatch({type: actionTypes.UPDATE_CURRENT_QUESTION , payload: clickedItem })
      dispatch({type: actionTypes.SET_CHANGE_CURRENT_QUESTION , payload: false})
      dispatch({type: actionTypes.SET_REQUIRE_VALIDATE , payload: true})
      setModalStatus(false);
      setOpen(false);
    } else if (ModalSituation === "NOT_TURN_NOT_VALIDATE") {
          console.log("why this is working")
          dispatch({type: actionTypes.UPDATE_CURRENT_QUESTION , payload: backupCurrentQuestion })
          dispatch({type: actionTypes.UPDATE_CURRENT_QUESTION , payload: clickedItem })
          dispatch({type: actionTypes.SET_CHANGE_CURRENT_QUESTION , payload: false})
          dispatch({type: actionTypes.SET_REQUIRE_VALIDATE , payload: true})
          setModalStatus(false) 
          setOpen(false);
    }
      // switch (ModalSituation) {
      //   case ("TURN_NOT_VALIDATE"): {
      //     console.log("here")
      //     dispatch({type: 'BACK_QUESTION' , Data: Data})
      //     dispatch({type: actionTypes.SET_REQUIRE_VALIDATE , payload: true})
      //     dispatch({type: actionTypes.SET_CHANGE_CURRENT_QUESTION , payload: false})
      //     setModalStatus(false);
      //   }
      //   case ("NOT_TURN_VALIDATE"): {
      //     dispatch(actionCreators.submitAnswer(CurrentQuestion))
      //     dispatch({type: 'BACK_QUESTION' , Data: Data})
      //     dispatch({type: actionTypes.SET_CHANGE_CURRENT_QUESTION , payload: false})
      //     dispatch({type: actionTypes.SET_REQUIRE_VALIDATE , payload: true})
      //     setModalStatus(false);
      //   }
      //   // case ("NOT_TURN_NOT_VALIDATE"): {
      //   //   console.log("why this is working")
      //   //   dispatch({type: actionTypes.UPDATE_CURRENT_QUESTION , payload: backupCurrentQuestion })
      //   //   dispatch({type: 'BACK_QUESTION' , Data: Data})
      //   //   dispatch({type: actionTypes.SET_CHANGE_CURRENT_QUESTION , payload: false})
      //   //   dispatch({type: actionTypes.SET_REQUIRE_VALIDATE , payload: true})
      //   //   setModalStatus(false) 
      //   // }
      //   default: {
      //     return null;
      //   }
      // }


  }

  const ModalCancel = () => {
    const Data = store.getState().qa.Data;
    let clickedItem = null ;
    Data.forEach(item => {
      if (item.id === ClickItemId) {
        clickedItem = item
        // setOpen(false)
      }
    })
    setModalStatus(false);
    setOpen(false);
    if (ModalSituation === "NOT_TURN_VALIDATE") {
      dispatch({type: actionTypes.UPDATE_CURRENT_QUESTION , payload: clickedItem })
      dispatch({type: actionTypes.SET_CHANGE_CURRENT_QUESTION , payload: false})
      dispatch({type: actionTypes.SET_REQUIRE_VALIDATE , payload: true})
    }
  }
  
  const ModalhandleClose = () => {
    setModalStatus(false);
  };



  let questionList = [];

 const editeModalHandler = (data) => {
   
   let CurrentTurnId = ReturnQuestionTurn(Data).id

  if (CurrentQuestion) {
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
           // سوال جاری که الان رویش هستید
       } else if (item.id === CurrentQuestion.id) {
             questionList.push(
               <Grid ref={CurrentQuestionRef} key={item.id} className={classes.CurrentQuestion} onClick={(e) => clickHandler(e , item.id)} spacing={2} container item direction="row">
 
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
 }

 editeModalHandler(Data)

  return (
    <div  >
      <Button variant="contained" style={{backgroundColor: "yellow"}} type="button" onClick={handleOpen}>
        ویرایش  جواب ها
      </Button>
      <CustomModal 
                  {...ModalMessage}
                  ModalhandleClose={ModalhandleClose} 
                  ModalStatus={ModalStatus} 
                  modalSubmitHandler={modalSubmitHandler}
                  ModalCancel={ModalCancel} />
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
            <div ref={paperRef} className={classes.paper}>
                  <div className={classes.ModalHeader}>
                      <div className={classes.HintWraper}>
                          <RadioButtonUncheckedIcon className={classes.AnsweredQuestionIcon} />
                          <span>سوال جواب داه شده</span>
                      </div>
                      <div className={classes.HintWraper}>
                          <FiberManualRecordIcon className={classes.CurrentQuestionIcon}/>
                          <span>سوال جاری</span>
                      </div>
                      <div className={classes.HintWraper}>
                          <RadioButtonUncheckedIcon className={classes.DeletedQuestionIcon} />
                          <span>سوال حذف شده</span>
                      </div>
                      <div className={classes.HintWraper}>
                          <RadioButtonUncheckedIcon className={classes.NotAnsweredQuestionIcon} />
                          <span>سوال جواب داده نشده</span>
                      </div>
                      <div className={classes.HintWraper}>
                          <FiberManualRecordIcon className={classes.CurrentTurnQuestionIcon} />
                          <span>سوال بعدی</span>
                      </div>
                      <IconButton className={classes.CloseModalButton} onClick={handleClose}>
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