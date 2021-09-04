import React   from 'react';
import { useStore } from 'react-redux';
import clsx from 'clsx';
import * as actionTypes from '../../Redux/Actions/actionTypes';
import { Button } from '@material-ui/core';
import { useEffect , useState , useRef }  from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import * as actionCreators from '../../Redux/Actions/CurrentQuestionAction'
import { FindQuestionById } from '../../Questions/Functions/FindQuestionById';
// import EmailField from '../../Questions/SingleSelect/EmailField/EmailField';
// import RankingDAD from '../../Questions/MultiSelect/RankingDAD/RankingDAD';
import RankingDAD2 from '../../Questions/MultiSelect/RankingDAD/RankingDAD2';
import PhoneNumber from '../../Questions/SingleSelect/PhoneNumber/PhoneNumber';
import LandlinePhone from '../../Questions/SingleSelect/LandlinePhone/LandlinePhone';
import RankingDAD from '../../Questions/MultiSelect/RankingDAD/RankingDAD';
import RadioCustom from '../../Questions/SingleSelect/RadioCustom/RadioCustom';
import SingleDropDown from '../../Questions/SingleSelect/SingleDropDown/SingleDropDown';
import MultiDropDown from '../../Questions/MultiSelect/MultiDropDown/MultiDropDown';
import NationalCode from '../../Questions/SingleSelect/NationalCode/NationalCode';
import EmailField from '../../Questions/SingleSelect/EmailField/EmailField';
import Shamsi from '../../Questions/SingleSelect/Shamsi/Shamsi';
import SimpleNumberInput from '../../Questions/SingleSelect/SimpleNumberInput/SimpleNumberInput';
import MultiLineInput from '../../Questions/SingleSelect/MultiLineInput/MultiLineInput';
import CascadingDropDown from '../../Questions/MultiSelect/CascadingDropDown/CascadingDropDown';
import TimePicker from '../../Questions/SingleSelect/TimePicker/TimePicker';
import CustomSlider from '../../Questions/SingleSelect/Slider/Slider';
import MultiCheckbox from '../../Questions/MultiSelect/MultiCheckbox/MultiCheckbox';
import QuestionFilter from '../../Questions/QuestionFilter/QuestionFilter';
import { IsCurrentQuestionHaveAnswerd } from '../../functions/handleData';





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
            <Button  color="secondary" variant="outlined" onClick={ backHandler }>قبلی</Button>
            <Button disabled={!Validate.RequireValidate}  color="primary" variant="outlined"  onClick={ nextHandler }>بعدی</Button>
            <Button className={clsx({
                        [classes.DisplayNone]: StartStatus
            })} disabled={false}  color="primary" variant="outlined"  onClick={ startHandler }>برو بریم</Button>
        </div>
        {QuestionFilter(CurrentQuestion)}


            {/* <MultiCheckboxUpdate 
              number="15" 
              text="کدام گزینه ها بیشتر شما را آزار داده است؟"
              choices={{
                noidea: true ,
                other: true ,
                column: 4 ,
                values:[
                  {id: 1 , choice: "ایساکو"} ,
                  {id: 2 , choice: "سایپا بسسیبنمسیتبنم دک"} ,
                  {id: 3 , choice: "هپ کو "} ,
                  {id: 4 , choice: " تو (ISPCO)"} ,
                  {id: 5 , choice: "آی  (GISP)"} ,
                  {id: 6 , choice: "RPCO"} ,
                  {id: 7 , choice: "کروز"} ,
                  {id: 8 , choice: "عظام"} ,
                  {id: 9 , choice: "دیناپارت"} ,
                  {id: 10 , choice: "لنت پارس"} ,
                  {id: 11 , choice: "راه فدک"} ,
                  {id: 12 , choice: "مدرن"} ,
                  {id: 13 , choice: "کوشش (رادیوتور)"} ,
                  {id: 14 , choice: "جهان پارت"} ,
                  {id: 15 , choice: "الدورا"} ,
                  {id: 16 , choice: "مهرکام پارس"} ,
                  {id: 17 , choice: "سپاهان"} ,
                  {id: 18 , choice: "هیچکدام"} ,
          ]
              }}
        /> */}
            {/* <MultiCheckbox 
              number="15" 
              text="کدام گزینه ها بیشتر شما را آزار داده است؟"
              choices={{
                noidea: true ,
                other: true ,
                column: 4 ,
                values:[
                  {id: 1 , choice: "ایساکو"} ,
                  {id: 2 , choice: "سایپا بسسیبنمسیتبنم دک"} ,
                  {id: 3 , choice: "هپ کو "} ,
                  {id: 4 , choice: " تو (ISPCO)"} ,
                  {id: 5 , choice: "آی  (GISP)"} ,
                  {id: 6 , choice: "RPCO"} ,
                  {id: 7 , choice: "کروز"} ,
                  {id: 8 , choice: "عظام"} ,
                  {id: 9 , choice: "دیناپارت"} ,
                  {id: 10 , choice: "لنت پارس"} ,
                  {id: 11 , choice: "راه فدک"} ,
                  {id: 12 , choice: "مدرن"} ,
                  {id: 13 , choice: "کوشش (رادیوتور)"} ,
                  {id: 14 , choice: "جهان پارت"} ,
                  {id: 15 , choice: "الدورا"} ,
                  {id: 16 , choice: "مهرکام پارس"} ,
                  {id: 17 , choice: "سپاهان"} ,
                  {id: 18 , choice: "هیچکدام"} ,
          ]
              }}
        /> */}
                {/* <RadioCustom 
                number="15" 
                text="کدام گزینه ها بیشتر شما را آزار داده است؟"
                choices={{
                  noidea: true ,
                  other: true ,
                  column: 4 ,
                  values:[
                    {id: 1 , choice: "ایساکو"} ,
                    {id: 2 , choice: "سایپا  دک"} ,
                    {id: 3 , choice: "هپ کو "} ,
                    {id: 4 , choice: " تو (ISPCO)"} ,
                    {id: 5 , choice: "آی  (GISP)"} ,
                    {id: 6 , choice: "RPCO"} ,
                    {id: 7 , choice: "کروز"} ,
                    {id: 8 , choice: "عظام"} ,
                    {id: 9 , choice: "دیناپارت"} ,
                    {id: 10 , choice: "لنت پارس"} ,
                    {id: 11 , choice: "راه فدک"} ,
                    {id: 12 , choice: "مدرن"} ,
                    {id: 13 , choice: "کوشش (رادیوتور)"} ,
                    {id: 14 , choice: "جهان پارت"} ,
                    {id: 15 , choice: "الدورا"} ,
                    {id: 16 , choice: "مهرکام پارس"} ,
                    {id: 17 , choice: "سپاهان"} ,
                    {id: 18 , choice: "هیچکدام"} ,
            ]
                }}
          /> */}

        {/* <TimePicker number="12" text="زمان مد نظر خود را انتخاب کنید " />
          <CustomSlider 
          marks={ [
            {
              id: 1 ,
              label: 'خیلی بد',
              
              icon: null
            },
            {
              id: 2 ,
              label: 'بد',
              icon: null
            },
            {
              id: 3 ,
              label: 'متوسط',
              icon: null
            },
            {
              id: 4 ,
              label: 'خوب',
              icon: null
            },
            {
              id: 5 ,
              label: 'خیلی خوب',
              icon: null
            },
            {
              id: 5 ,
              label: 'خیلی خوب',
              icon: null
            },
            {
              id: 5 ,
              label: 'خیلی خوب',
              icon: null
            },
        
          ]}
            number="14" 
            text="میزان اشنایی شما با برند ایکاپ چقدر است؟" /> */}
     
        {/* <CascadingDropDown 
          number="4" 
          text="گزینه های مناسب را انتخاب کنید ؟" 
          parent="استان"
          child="شهر"
          ParentData={[
            { id: 1 , title: 'تهران' } ,
            { id: 2 , title: 'شیراز' } ,
            { id: 3 , title: 'اصفهان' } ,
            { id: 4 , title: 'قزوین' } ,
            { id: 5 , title: 'مشهد' } ,
            { id: 6 , title: 'تبریز' } ,
            { id: 7 , title: 'سمنان' } ,
            { id: 8 , title: 'کرمان' } ,
            { id: 9 , title: 'یزد' } ,
            { id: 10 , title: 'بروجرد' } ,
            { id: 11, title: 'بجنورد' } ,
            { id: 12, title: 'زنجان' } ,
            { id: 13, title: 'خوزستان' } ,
            { id: 14, title: 'قصه حسین کرد شبستری قصه حسین کرد شبستری  قصه حسین کرد شبستری  قصه حسین کرد شبستری' } ,
            { id: 15, title: 'ساری' } ,
            { id: 16, title: 'لاهیجان' } ,
            { id: 17, title: 'چالوس' } ,
            { id: 18, title: 'اردبیل' } ,
            { id: 19, title: 'نوشهر' } ,
            { id: 20, title: 'زاهدان' } ,
        ]}

        ChildData={[
          { id: 50 , title: 'تهران' , parentid: 13 } ,
          { id: 2 , title: 'شیراز' , parentid: 13 } ,
          { id: 3 , title: 'اصفهان' , parentid: 13 } ,
          { id: 4 , title: 'قزوین' , parentid: 13 } ,
          { id: 5 , title: 'مشهد' , parentid: 14 } ,
          { id: 6 , title: 'تبریز' , parentid: 14 } ,
          { id: 7 , title: 'سمنان' , parentid: 14 } ,
          { id: 8 , title: 'کرمان' , parentid: 14 } ,
          { id: 9 , title: 'یزد' , parentid: 15 } ,
          { id: 10 , title: 'بروجرد' , parentid: 15 } ,
          { id: 11, title: 'بجنورد' , parentid: 15 } ,
          { id: 12, title: 'زنجان' , parentid: 15 } ,
          { id: 13, title: 'خوزستان' , parentid: 16 } ,
          { id: 14, title: 'گرکان' , parentid: 16 } ,
          { id: 15, title: 'ساری' , parentid: 16 } ,
          { id: 16, title: 'لاهیجان' , parentid: 1 } ,
          { id: 17, title: 'چالوس' , parentid: 1 } ,
          { id: 18, title: 'اردبیل' , parentid: 1 } ,
          { id: 19, title: 'نوشهر' , parentid: 1 } ,
          { id: 20, title: 'زاهدان' , parentid: 1 } ,
      ]}
           />  */}
    
        {/* <MultiLineInput number="22" text="توضیحات لازم را در کادر پایین تایپ کنید ؟" />
        <LandlinePhone noidea={true} number="20" text="شماره تلفن ثابت را وارد کنید ؟" />
      <NationalCode noidea={true} number="2" text="شماره ملی را وارد کنید؟" />
      <EmailField noidea={true} number="12" text="ایمیل را با فرمت صحیح وارد کنید؟" />
      <Shamsi number="13" text="تاریخ مد نظر را انتخاب کنید ؟" />
      <SimpleNumberInput noidea={true} number="14" text="شماره مورد نظر خود را وارد کنید ؟" min={5} max={12} decimal={true} /> */}
           
       {/* <MultiDropDown 
            number="11" 
            text="سلام نیتب م یمت بیمست مستبی می؟" 
            caption="شهر"
            DataTable={[
              { id: 50 , title: 'تهران' } ,
              { id: 2 , title: 'شیراز' } ,
              { id: 3 , title: 'اصفهان' } ,
              { id: 4 , title: 'قزوین' } ,
              { id: 5 , title: 'مشهد' } ,
              { id: 6 , title: 'تبریز' } ,
              { id: 7 , title: 'سمنان' } ,
              { id: 8 , title: 'کرمان' } ,
              { id: 9 , title: 'یزد' } ,
              { id: 10 , title: 'بروجرد' } ,
              { id: 11, title: 'بجنورد' } ,
              { id: 12, title: 'زنجان' } ,
              { id: 13, title: 'خوزستان' } ,
              { id: 14, title: 'گرکان' } ,
              { id: 15, title: 'ساری' } ,
              { id: 16, title: 'لاهیجان' } ,
              { id: 17, title: 'چالوس' } ,
              { id: 18, title: 'اردبیل' } ,
              { id: 19, title: 'نوشهر' } ,
              { id: 20, title: 'زابت مسنت مست مستب مستب مسیبت سمیتب سمنیبت سمنیبت سم لان' } ,
          ]}
            /> */}
    {/* <RankingDAاD number="9" text='سیتبسیتب تمست بمسیتب ستب مستیب مستی ب' /> */}
        {/* <RankingDAD2 number={10} text="منبسیتبم سمینبت مسی سم تسمیبت س میبتسم؟" choices={[
          {id:1 , choice: "گزینه شماره 1" } ,
          {id:2 , choice: "گزینه شماره 2" } ,
          {id:3 , choice: "گزینه شماره 3" } ,
          {id:4 , choice: "گزینه شماره 4" } ,
          {id:5 , choice: "گزینه شماره 5" } ,
          {id:6 , choice: "گزینه شماره 5" } ,
        ]} /> */}
     
        {/* <SingleDropDown
            number="10" 
            caption="شهر"
            text="گزینه مورد نظر را از منوی پایین انتخاب کنید ؟"
            DataTable={[
              { id: 1 , title: 'تهران' } ,
              { id: 2 , title: 'شیراز' } ,
              { id: 3 , title: 'اصفهان' } ,
              { id: 4 , title: 'قزوین' } ,
              { id: 5 , title: 'مشهد' } ,
              { id: 6 , title: 'تبریز' } ,
              { id: 7 , title: 'سمنان' } ,
              { id: 8 , title: 'کرمان' } ,
              { id: 9 , title: 'یزد' } ,
              { id: 10 , title: 'بروجرد' } ,
              { id: 11, title: 'بجنورد' } ,
              { id: 12, title: 'زنجان' } ,
              { id: 13, title: 'خوزستان' } ,
              { id: 14, title: 'گرکان' } ,
              { id: 15, title: 'ساری' } ,
              { id: 16, title: 'لاهیجان' } ,
              { id: 17, title: 'چالوس' } ,
              { id: 18, title: 'اردبیل' } ,
              { id: 19, title: 'نوشهر' } ,
              { id: 20, title: 'زاهدان' } ,
          ]} /> */}

        {/* <PhoneNumber noidea={true} number='7' text="شماره تلفن همراه را وارد کنید ؟" />
        <LandlinePhone number='10' text='شماره تلفن ثابت را وارد کنید ؟' /> */}

    
      </div>
  );
}