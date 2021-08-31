import RadioQuestion from "../SingleSelect/RadioCustom/RadioCustom";
import DropDown from "../SingleSelect/SingleDropDown/SingleDropDown";
import MultiDropDown from "../MultiSelect/MultiDropDown/MultiDropDown";
import Shamsi from "../SingleSelect/Shamsi/Shamsi";
import MultiCheckbox from "../MultiSelect/MultiCheckbox/MultiCheckbox";
import MultiCheckboxUpdate from "../MultiSelect/MultiCheckbox/MultiCheckboxUpdate";



const QuestionFilter = (CurrentQuestion) => {
   if (CurrentQuestion) {
    console.log(CurrentQuestion)
    console.log("here")
        switch (CurrentQuestion.choiceTypeId) {
            
            // case "SingleSelectDropDown": {
                
            //     return (
            //         <DropDown key={Question.id} number={Question.number} text={Question.text} />
            //     )
            // }
            // case "MultiSelectDropDown": {
            //     return (
            //         <MultiDropDown key={Question.id} number={Question.number} text={Question.text} />
            //     )
            // }
            // case "SingleSelectRadio": {
            //     return (
            //         <RadioQuestion key={Question.id}  number={Question.number} text={Question.text} choice={Question.choice} />
            //     )
            // }
            // case "Shamsi": {
            //     return (
            //         <Shamsi key={Question.id} number={Question.number} text={Question.text} />
            //     )
            // }
            case 12: {
                return (
                    // key={Question.id}
                    <MultiCheckboxUpdate
                        {...CurrentQuestion}
                    />
                )
            }
            case 100: {
                return (
                    <DropDown />
                )
            }
            default : return null;
        }
   }
}

export default QuestionFilter;


