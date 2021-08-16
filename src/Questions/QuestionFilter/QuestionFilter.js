import RadioQuestion from "../SingleSelect/Radio/Radio";
import DropDown from "../SingleSelect/DropDown/DropDown";
import MultiDropDown from "../MultiSelect/MultiDropDown/MultiDropDown";
import CustomCalendar from "../SingleSelect/Calendar/Calendar";
import MultiCheckbox from "../MultiSelect/MultiCheckbox/MultiCheckbox";


const QuestionFilter = (Question) => {
    switch (Question.type) {
        case "SingleSelectDropDown": {
            
            return (
                <DropDown number={Question.number} text={Question.text} />
            )
        }
        case "MultiSelectDropDown": {
            return (
                <MultiDropDown number={Question.number} text={Question.text} />
            )
        }
        case "SingleSelectRadio": {
            return (
                <RadioQuestion number={Question.number} text={Question.text} />
            )
        }
        case "Calendar": {
            return (
                <CustomCalendar number={Question.number} text={Question.text} />
            )
        }
        case "MultiCheckbox": {
            return (
                <MultiCheckbox number={Question.number} text={Question.text}
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