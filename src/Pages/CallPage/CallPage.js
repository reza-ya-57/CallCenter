import React , { useEffect , useState }  from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { FindQuestionById } from '../../Questions/Functions/FindQuestionById';
// import NumberField from '../../Questions/SingleSelect/NumberField/NumberField';
import PhoneNumber from '../../Questions/SingleSelect/PhoneNumber/PhoneNumber';
// import EmailField from '../../Questions/SingleSelect/EmailField/EmailField';
// import RankingDAD from '../../Questions/MultiSelect/RankingDAD/RankingDAD';
import LandlinePhone from '../../Questions/SingleSelect/LandlinePhone/LandlinePhone';
import RankingDAD2 from '../../Questions/MultiSelect/RankingDAD/RankingDAD2';
import RankingDAD from '../../Questions/MultiSelect/RankingDAD/RankingDAD';
import RadioCustom from '../../Questions/SingleSelect/Radio/RadioCustom';
import SingleDropDown from '../../Questions/SingleSelect/DropDown/SingleDropDown';
import MultiDropDown from '../../Questions/MultiSelect/MultiDropDown/MultiDropDown';
import NationalCode from '../../Questions/SingleSelect/NationalCode/NationalCode';
import EmailField from '../../Questions/SingleSelect/EmailField/EmailField';
import Shamsi from '../../Questions/SingleSelect/Calendar/Shamsi';
import SimpleNumberInput from '../../Questions/SingleSelect/SimpleNumberInput/SimpleNumberInput';
import MultiLineInput from '../../Questions/SingleSelect/MultiLineInput/MultiLineInput';
import CascadingDropDown from '../../Questions/MultiSelect/CascadingDropDown/CascadingDropDown';




const useStyles = makeStyles(theme => ({
  root: {
    // minWidth: 275,
  },

  Footer: {
    // backgroundColor: 'red' ,
    // height: "100px" ,


  }
}));



export default function SimpleCard() {
  let dispatch = useDispatch();
  const [Quest, setQuest] = useState([]);
  let {Questions} = useSelector(state => state.qa);
  let {CurrentQuestion} = useSelector(state => state.currentqa);

    useEffect(() => {

      let UpdateQuest = FindQuestionById(Questions , CurrentQuestion)

      setQuest([UpdateQuest])

    } , [CurrentQuestion , Questions] )
    
    
    const classes = useStyles();
    return (
      
      <div>
        {/* <CascadingDropDown 
          number="4" 
          text="گزینه های مناسب را انتخاب کنید ؟" 
          parent="استان"
          child="شهر"
          ParentData={[
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
          { id: 16, title: 'لاهیجان' , parentid: 16 } ,
          { id: 17, title: 'چالوس' , parentid: 20 } ,
          { id: 18, title: 'اردبیل' , parentid: 20 } ,
          { id: 19, title: 'نوشهر' , parentid: 20 } ,
          { id: 20, title: 'زاهدان' , parentid: 20 } ,
      ]} */}
          {/* /> */}
        {/* <RankingDAD number="9" text='سیتبسیتب تمست بمسیتب ستب مستیب مستی ب' /> */}
        {/* <RankingDAD2 number={10} text="منبسیتبم سمینبت مسی سم تسمیبت س میبتسم؟" /> */}
        {/* <MultiLineInput number="22" text="توضیحات لازم را در کادر پایین تایپ کنید ؟" /> */}
        {/* <LandlinePhone number="20" text="شماره تلفن ثابت را وارد کنید ؟" /> */}
      {/* <NationalCode number="2" text="شماره ملی را وارد کنید؟" /> */}
      {/* <EmailField number="12" text="ایمیل را با فرمت صحیح وارد کنید؟" /> */}
      {/* <Shamsi number="13" text="تاریخ مد نظر را انتخاب کنید ؟" /> */}
      {/* <SimpleNumberInput number="14" text="شماره مورد نظر خود را وارد کنید ؟" min={5} max={12} decimal={true} /> */}
 

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
              { id: 20, title: 'زاهدان' } ,
          ]}
            /> */}
        {/* <RadioCustom choice={{
              Horizontal: true ,
              value: {
                  value2: 'خیر' , 
                  value1: 'بله' ,
                  value5: 'نمیدانم' ,
                  value4: 'سایر موارد'
              }
          
        }} number={3} text="گزینه مورد نظر را انتخاب کنید ؟" /> */}
        {/* {Quest} */}
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
        {/* <input type='time' /> */}
        {/* <PhoneNumber number='7' text="شماره تلفن همراه را وارد کنید ؟" /> */}
        {/* <EmailField number='8' text='ایمیل خود را با فرمت مناسب وارد کنید ؟' /> */}
        {/* <LandlinePhone number='10' text='شماره تلفن ثابت را وارد کنید ؟' /> */}
        {/* <RankingDAD />
         */}
        {/* <NumberField placeholder="کد ملی" number="6" text="این تست سوال شماره 6 میباشد ؟" /> */}
        {/* <div className={classes.Footer}>
          <button onClick={() => dispatch({ type: 'BACK_QUESTION' })}>قبلی</button>
          <button onClick={() => dispatch({ type: 'NEXT_QUESTION' })}>بعدی</button>
        </div> */}
      </div>
  );
}