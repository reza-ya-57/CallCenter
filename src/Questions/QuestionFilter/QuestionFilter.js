import RadioQuestion from "../SingleSelect/Radio/RadioCustom";
import DropDown from "../SingleSelect/DropDown/SingleDropDown";
import MultiDropDown from "../MultiSelect/MultiDropDown/MultiDropDown";
import Shamsi from "../SingleSelect/Shamsi/Shamsi";
import MultiCheckbox from "../MultiSelect/MultiCheckbox/MultiCheckbox";



const QuestionFilter = (Question) => {
    switch (Question.type) {
        case "SingleSelectDropDown": {
            
            return (
                <DropDown key={Question.id} number={Question.number} text={Question.text} />
            )
        }
        case "MultiSelectDropDown": {
            return (
                <MultiDropDown key={Question.id} number={Question.number} text={Question.text} />
            )
        }
        case "SingleSelectRadio": {
            return (
                <RadioQuestion key={Question.id}  number={Question.number} text={Question.text} choice={Question.choice} />
            )
        }
        case "Shamsi": {
            return (
                <Shamsi key={Question.id} number={Question.number} text={Question.text} />
            )
        }
        case "MultiCheckbox": {
            return (
                <MultiCheckbox key={Question.id} number={Question.number} text={Question.text}
                checks={
                    {...Question.checks}
                }
                />
            )
        }
        default : return null;
    }
}

export default QuestionFilter;


