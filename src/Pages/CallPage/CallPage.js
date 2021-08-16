import React , { useEffect , useState }  from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { FindQuestionById } from '../../Questions/Functions/FindQuestionById';
import Calendar from '../../Questions/Calendar/Calendar';

const PaperWidth = "600px";


const useStyles = makeStyles(theme => ({
  root: {
    // minWidth: 275,
  },
  Paper: {
    maxWidth: PaperWidth,
    backgroundColor: theme.palette.green.main
  } , 
  
  Footer: {
    position: 'absolute' ,
    bottom: '0px' , 
    width: '125vh' , 

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

    } , [CurrentQuestion] )


  const classes = useStyles();
  return (

      <div>
        <Calendar />
        {/* {Quest} */}
        {/* {QuestionFilter(Questions[0])} */}
         {/* <MultiDropDown number='1' text='این یک تست است؟' />
          <RadioQuestion number='2' text='آیا در انتهاي كار (در زمان ترخيص) مسئول ترخيص موارد ثبت شده در برگه ي پذيرش را براي شما توضيح دادند كه چه كاري روي ماشين انجام دادند؟' /> */}
        {/* <DropDown number='3' text='نام شهر خود را وارد کنید؟' />   */}
        {/* <CustomizedSlider /> */}
        <div>
          <button onClick={() => dispatch({ type: 'BACK_QUESTION' })}>قبلی</button>
          <button onClick={() => dispatch({ type: 'NEXT_QUESTION' })}>بعدی</button>
        </div>
      </div>
  );
}