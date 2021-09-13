// در این قسمت سوال ها به نوبت رندر میشوند 
// در اینجا از دو مودال هم استفاده شده 
// یکی مودال ویرایش سوال ها است
// دومین مودال برای اخطار دادن است که در حالت های مختلف کار های متفاوتی انجام میدهد

// در مورد توضیحات 
// dispatch
// ها و اینکه هر کداچه کاری انجام میدهند به آدرس زیر مراجهه کنید
// ./src/Redux/Actions/ationTypes.js





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
import CustomModal from '../../Partial/CustomModal/CustomModal';
import { ReturnQuestionTurn } from '../../functions/handleData';
import { Grid } from '@material-ui/core';




const useStyles = makeStyles(theme => ({
  root: {
    // minWidth: 275,
  },

  DisplayNone: {
    display: "none"
  } , 

  HeaderMenu: {
    display: "flex" ,
    width: "100%" , 
    alignItems: "flex-start" ,
  } , 

  Footer: {
    // display: "flex" ,
    // justifyContent: "center" , 
    // alignItems: "center" , 
    // border: "2px blue solid" ,
    // height: "100px" , 
    // // height: "100px"   , 
    // position: "absolute" , 
    // bottom: "0" , 
    // minWidth: "80%" ,
    // margin: "auto" ,
  } ,

  ButtonGroup: {
    // display: "flex" , 
    // width: "50%" ,
    // justifyContent: "space-around"

    // position: "fixed" , 
    // width: "100%" ,
    // bottom: "0px"  ,
    // height: "50px"
  } , 

  NextButton: {
    // width: "50%" ,
    // fontSize: "1.2rem" , 
    // "&:hover": {
    // fontSize: "1.2rem" , 
    // }
  } , 

  BackButton: {
    // width: "50%" ,
    // backgroundColor: "#1B291B" , 
    // color: "white" , 
    // fontSize: "1.2rem" ,
    // "&:hover": {
    //   backgroundColor: "#3D563D" ,
    //   fontSize: "1.2rem"
    // }
  }
}));



export default function SimpleCard() {
  const classes = useStyles();
  const store = useStore()
  let dispatch = useDispatch();
  // برای شروع شدن پرسیدن سوال ها و هیدن شدن دکمه برو بریم
  const [StartStatus, setStartStatus] = useState(false)
  // برای نشان دادن یا ندادن مودال اخطار
  const [ModalStatus, setModalStatus] = useState(false)
  // حالت های مختلف اخطار که طبق آن دکمه تایید و رد کردن مودال کارهای مختلفی انجام میدهد
  const [ModalSituation, setModalSituation] = useState(null)
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

  

  const nextHandler = () => {
    // ایا سوال جاری دارای جواب است ؟
    const Data = store.getState().qa.Data;
    // سوالی که نوبت پرسیدنش است را برمیگرداند
    // با سوال جاری فرق میکند
    // این سوالی است که اگر دکمه 
    // NEXT
    //را بزند وارد آن سوال میشود
    let TurnedQuesiton = ReturnQuestionTurn(Data)
    if (CurrentQuestion.id !== TurnedQuesiton.id) {
      if (CurrentQuestionChange === true) {
          if (Validate.RequireValidate === true)  {
              setModalMessage({...ModalMessage , 
                ModalMessageHeader: "اطلاعات وارد شده معتبر نیست"  ,
                ModalMessageDescription: "در صورت تایید اطلاعات وارد شده ثبت نمیشود" 
              })
              setModalSituation("GO_NEXT_EDITE_VALID");
              setModalStatus(true)
          }
      } else {
        
        dispatch({type: actionTypes.SET_CHANGE_CURRENT_QUESTION , payload: false})
        dispatch({type: actionTypes.SET_REQUIRE_VALIDATE , payload: false})
        const Data = store.getState().qa.Data;
        dispatch({ type: 'NEXT_QUESTION' , payload: Data })
      }
    } else {
      // اگر سوال جاری تغییر کرده باشد باید ثبت شود
      if (CurrentQuestionChange) {
        dispatch(actionCreators.submitAnswer(CurrentQuestion))
        dispatch({type: actionTypes.SET_CHANGE_CURRENT_QUESTION , payload: false})
        dispatch({type: actionTypes.SET_REQUIRE_VALIDATE , payload: false})
        const Data = store.getState().qa.Data;
        dispatch({ type: 'NEXT_QUESTION' , payload: Data })
      }
    }

    // گرفتن دیتای تغییر پیدا شده در دیسپج های قبلی
    // const Data = store.getState().qa.Data;

  }


  const backHandler = (e , id) => {
    // ایا سوال جاری دارای جواب است ؟
    const Data = store.getState().qa.Data;
    // سوالی که نوبت پرسیدنش است را برمیگرداند
    // با سوال جاری فرق میکند
    // این سوالی است که اگر دکمه 
    // NEXT
    //را بزند وارد آن سوال میشود
    let TurnedQuesiton = ReturnQuestionTurn(Data)


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
                      dispatch({type: 'BACK_QUESTION' , Data: Data})
                      dispatch({type: actionTypes.SET_CHANGE_CURRENT_QUESTION , payload: false})
                      dispatch({type: actionTypes.SET_REQUIRE_VALIDATE , payload: true})
                } else {
                  setModalMessage({...ModalMessage , 
                    ModalMessageHeader: "اطلاعات وارد شده معتبر نیست"  ,
                    ModalMessageDescription: "در صورت تایید اطلاعات وارد شده ثبت نمیشود" 
                  })
                  setModalSituation("TURN_NOT_VALIDATE");
                  setModalStatus(true)
                }


        } else {
          
            dispatch({type: 'BACK_QUESTION' , Data: Data})
            dispatch({type: actionTypes.SET_CHANGE_CURRENT_QUESTION , payload: false})
            dispatch({type: actionTypes.SET_REQUIRE_VALIDATE , payload: true})
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
            dispatch({type: 'BACK_QUESTION' , Data: Data})
            dispatch({type: actionTypes.SET_CHANGE_CURRENT_QUESTION , payload: false})
            dispatch({type: actionTypes.SET_REQUIRE_VALIDATE , payload: true})
          }
    }



  }


  // این تابع وقتی اجرا میشود که دکمه ی تایید مودال زده شود
  // و با توجه به اینکه تو چه وضعیتی مودال فرا خوانده شده کار های متفاوتی میکند
  const modalSubmitHandler = () => {
    const Data = store.getState().qa.Data;
    let backupCurrentQuestion;
    Data.forEach(item => {
      if (item.id === CurrentQuestion.id) {
        backupCurrentQuestion = item;
      }
    })

    if (ModalSituation === "TURN_NOT_VALIDATE") {

      dispatch({type: 'BACK_QUESTION' , Data: Data})
      dispatch({type: actionTypes.SET_REQUIRE_VALIDATE , payload: true})
      dispatch({type: actionTypes.SET_CHANGE_CURRENT_QUESTION , payload: false})
      setModalStatus(false);
    } else if (ModalSituation === "NOT_TURN_VALIDATE") {

      dispatch(actionCreators.submitAnswer(CurrentQuestion))
      dispatch({type: 'BACK_QUESTION' , Data: Data})
      dispatch({type: actionTypes.SET_CHANGE_CURRENT_QUESTION , payload: false})
      dispatch({type: actionTypes.SET_REQUIRE_VALIDATE , payload: true})
      setModalStatus(false);
    } else if (ModalSituation === "NOT_TURN_NOT_VALIDATE") {
          dispatch({type: actionTypes.UPDATE_CURRENT_QUESTION , payload: backupCurrentQuestion })
          dispatch({type: 'BACK_QUESTION' , Data: Data})
          dispatch({type: actionTypes.SET_CHANGE_CURRENT_QUESTION , payload: false})
          dispatch({type: actionTypes.SET_REQUIRE_VALIDATE , payload: true})
          setModalStatus(false) 
    } else if (ModalSituation === "GO_NEXT_EDITE_VALID") {
      dispatch(actionCreators.submitAnswer(CurrentQuestion))
      dispatch({type: actionTypes.SET_CHANGE_CURRENT_QUESTION , payload: false})
      dispatch({type: actionTypes.SET_REQUIRE_VALIDATE , payload: false})
      const Data = store.getState().qa.Data;
      dispatch({ type: 'NEXT_QUESTION' , payload: Data })
      setModalStatus(false);
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
    setModalStatus(false);
    if (ModalSituation === "NOT_TURN_VALIDATE") {
      dispatch({type: 'BACK_QUESTION' , Data: Data})
      dispatch({type: actionTypes.SET_CHANGE_CURRENT_QUESTION , payload: false})
      dispatch({type: actionTypes.SET_REQUIRE_VALIDATE , payload: true})
    }
  }
  
  const ModalhandleClose = () => {
    setModalStatus(false);
  };

  const startHandler = () => {
    const Data = store.getState().qa.Data;
    dispatch({ type: 'NEXT_QUESTION' , payload: Data })
    setStartStatus(true)
  }
    


    return (
      <div style={{width: '80%' , margin: "auto" }}>
                  <div className={classes.HeaderMenu}>
                      <div variant="contained" className={classes.ButtonGroup}>

                          <EditeModal backHandler={backHandler} />

                      </div>

                    
                    <Button className={clsx({
                                [classes.DisplayNone]: StartStatus
                    })} disabled={false}  color="primary" variant="outlined"  onClick={ startHandler }>برو بریم</Button>
                </div>
               
                  <div>
                  {QuestionFilter(CurrentQuestion)}
                  </div>
                  <div className={classes.Footer}>                  
                        <Button className={classes.BackButton}  variant="outlined" onClick={ backHandler }>
                              <ArrowForwardIcon />
                        </Button>
                        <Button className={classes.NextButton} color="primary" variant="contained" onClick={ nextHandler } disabled={!Validate.RequireValidate}>
                              <ArrowBackIcon />
                        </Button>
                    </div>
              <CustomModal 
                  {...ModalMessage}
                  ModalhandleClose={ModalhandleClose} 
                  ModalStatus={ModalStatus} 
                  modalSubmitHandler={modalSubmitHandler}
                  ModalCancel={ModalCancel} />
      </div>
  );
}