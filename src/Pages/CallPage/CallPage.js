import React , { useEffect , useState }  from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import RadioQuestion from '../../Questions/SingleSelect/Radio/Radio';
import DropDown from '../../Questions/SingleSelect/DropDown/DropDown';
import CustomizedSlider from '../../Questions/SingleSelect/Slider/Slider';
import MultiDropDown from '../../Questions/MultiSelect/MultiDropDown/MultiDropDown';
import QuestionTemplate from '../../Components/UI/WrapperComponent/QuestionTemplate';
import { QuestionReducer } from '../../Redux/Reducers/QuestionReducer';
import QuestionFilter from '../../Questions/QuestionFilter/QuestionFilter';

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
  const [Quest, setQuest] = useState([])
  let {Questions} = useSelector(state => state.qa)
  let {CurrentQuestion} = useSelector(state => state.currentqa)
  useEffect(() => {
    switch(CurrentQuestion) {
      case 1: {
        Questions.forEach(item => {
          if (item.id === 1) {
           setQuest([QuestionFilter(item)])
            console.log(Quest)
          }
        })
      }
      break
      case 2: {
        Questions.forEach(item => {
          if (item.id === 2) {
           setQuest([QuestionFilter(item)])
            console.log(Quest)
          }
        })
      }
      break
    }
  } , [CurrentQuestion] )
  // const [QuestionsType, setQuestionsType] = useState(initialState)
  // const [CurrentQuestion, setCurrentQuestion] = useState(initialState)
  console.log(Questions)
  console.log(CurrentQuestion)
  const classes = useStyles();
  return (

      <div>
        {Quest}
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