import RadioQuestion from "../SingleSelect/Radio/Radio";
import DropDown from "../SingleSelect/DropDown/DropDown";
import MultiDropDown from "../MultiSelect/MultiDropDown/MultiDropDown";
import { QuestionReducer } from "../../Redux/Reducers/QuestionReducer";


const QuestionFilter = (Question) => {
    switch (Question.type) {
        case "SingleSelectDropDown": {
            console.log(Question.number)
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
    }
}

export default QuestionFilter;