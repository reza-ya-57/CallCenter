import RadioQuestion from "../SingleSelect/Radio/Radio";
import DropDown from "../SingleSelect/DropDown/DropDown";
import MultiDropDown from "../MultiSelect/MultiDropDown/MultiDropDown";
import CustomCalendar from "../SingleSelect/Calendar/Calendar";
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
                <RadioQuestion key={Question.id}  number={Question.number} text={Question.text} />
            )
        }
        case "Calendar": {
            return (
                <CustomCalendar key={Question.id} number={Question.number} text={Question.text} />
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