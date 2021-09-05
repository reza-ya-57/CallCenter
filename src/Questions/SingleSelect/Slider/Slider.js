import clsx from 'clsx';
import React , {useState , useEffect} from 'react';
import { useStore } from 'react-redux';
import { useSelector , useDispatch } from 'react-redux';
import * as actionTypes from '../../../Redux/Actions/actionTypes';
import "./Slider.css";
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import QuestionTemplate from '../../../Components/UI/WrapperComponent/QuestionTemplate';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import SentimentVeryDissatisfiedOutlinedIcon from '@material-ui/icons/SentimentVeryDissatisfiedOutlined';
import SentimentDissatisfiedOutlinedIcon from '@material-ui/icons/SentimentDissatisfiedOutlined';
import MoodBadIcon from '@material-ui/icons/MoodBad';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import InsertEmoticonOutlinedIcon from '@material-ui/icons/InsertEmoticonOutlined';
import SentimentVerySatisfiedOutlinedIcon from '@material-ui/icons/SentimentVerySatisfiedOutlined';
import NoIdeaCheckbox from '../../../Partial/NoIdeaCheckbox/NoIdeaCheckbox';


const Icons = [
  <SentimentVeryDissatisfiedOutlinedIcon /> , 
  <MoodBadIcon /> , 
  <SentimentDissatisfiedOutlinedIcon /> ,
  <SentimentDissatisfiedIcon /> , 
  <SentimentSatisfiedIcon /> ,
  <InsertEmoticonOutlinedIcon /> ,
  <SentimentVerySatisfiedOutlinedIcon />
]



const useStyles = makeStyles({
  root: {
    margin: "20px 50px"  , 

    
  },

  SliderRoot: {
    color: "#1E5631" , 
  } ,

 

  Rail: {
    height: "30px" ,
    borderRadius: "10px" ,  
  } , 
  
  Track: {
    background: "linear-gradient(90deg, rgba(52,171,0,1) 13%, rgba(252,6,6,1) 100%)" ,
    height: "30px" , 
  } , 

  Thumb: {
    borderRadius: "5px" ,
    width: "10px" , 
    height: "30px" ,
    position: "relative" , 
    top: "5px" , 
    color: "black" , 
  } ,

  MarkLabel: {
      marginTop: "15px" ,
      padding: "5px"
  } ,

  SliderOpacity: {
    opacity: "0.3"
  } ,
});



function valuetext(value) {
  return `${value}°C`;
}



export default function CustomSlider(props) {
  let dispatch = useDispatch();
  const store = useStore();
  let {CurrentQuestion} = useSelector(state => state.currentqa);
  const classes = useStyles();
  const [Checked, setChecked] = useState(false)
  const [ValueOfSlider, setValueOfSlider] = useState(0)
  let initialmarks = [];
  const step =  parseInt(98 / (CurrentQuestion.choices.values.length -1 ))

  CurrentQuestion.choices.values.forEach((item  , index) => {

    initialmarks.push ({
      id: item.id ,
      value: index + 1 === CurrentQuestion.choices.values.length ? 100 : 2 + (index * step) , 
      label: item.caption ,  
      icon: item.icon ? item.icon : Icons[parseInt(((7/CurrentQuestion.choices.values.length)*(index + 1)) - 1 )]
    })
  })  

  let marks = initialmarks

 useEffect(() => {
  CurrentQuestion.choices.values.forEach(item => {
    if (item.status === true) {
      marks.forEach(element => {
        if (element.id === item.id) {
          setValueOfSlider(element.value)
        }
      })
    }
  })
 }, [])

  function valueLabelFormat(value) {

    var test = marks.filter((mark) => mark.value === value);
      if (test[0]) {
        return test[0].icon
      }
  }

 

  const SliderChangeHandler = ( e , val ) => {
    setValueOfSlider(val)
    let updateCurrentQuestion = JSON.parse(JSON.stringify(CurrentQuestion));
    marks.forEach(item => {
      if (item.value === val) {
        updateCurrentQuestion.choices.values.forEach(element => {
          if (element.id === item.id) {
            element.status = true
          } else {
            element.status = false
          }
        })
      }
    })

    
    dispatch({type: actionTypes.UPDATE_CURRENT_QUESTION , payload: updateCurrentQuestion })
    dispatch({type: actionTypes.CHECK_FOR_REQUIRE_VALIDATE , CurrentQuestion: updateCurrentQuestion })
    // dispatch({type: actionTypes.SET_REQUIRE_VALIDATE , payload: validate })
  }


  const checkboxChangeHandler = () => {
    setValueOfSlider(0)
    setChecked(prev => !prev)
    let updateState = JSON.parse(JSON.stringify(CurrentQuestion));
    updateState.noidea.status = !updateState.noidea.status
    updateState.choices.values.forEach(item => {
      item.status = false
    })
    dispatch({type: actionTypes.UPDATE_CURRENT_QUESTION , payload: updateState });
    let {Validate} = store.getState().validate
    dispatch({type: actionTypes.SET_REQUIRE_VALIDATE , payload: updateState.noidea.status })
}

  return (
    <QuestionTemplate number={CurrentQuestion.number} text={CurrentQuestion.caption}>
          <div className={classes.root}>
            <NoIdeaCheckbox
                className={clsx({
                    [classes.NoIdeaStatus]: !CurrentQuestion.noidea , 
                    [classes.NoIdeaCheckbox]: true
                })}
                checked={CurrentQuestion.noidea.status}
                onChange={checkboxChangeHandler}
              />
              <Slider
                disabled={CurrentQuestion.noidea.status}
                // defaultValue={0}
                value={ValueOfSlider}
                classes={{
                  root: classes.SliderRoot ,
                  rail: classes.Rail, 
                  track: classes.Track ,
                  markLabel: classes.MarkLabel , 
                  thumb: classes.Thumb
                }}
                onChange={( e , val) => SliderChangeHandler( e , val )}
                className={clsx({
                  [classes.SliderOpacity]: Checked
                })}
                valueLabelFormat={valueLabelFormat}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider-restrict"
                step={null}
                valueLabelDisplay="auto"
                marks={marks}
              />
            
        </div>
    </QuestionTemplate>
  );
}
