import RadioQuestion from "../SingleSelect/RadioCustom/RadioCustom";
import DropDown from "../SingleSelect/SingleDropDown/SingleDropDown";
import MultiDropDown from "../MultiSelect/MultiDropDown/MultiDropDown";
import Shamsi from "../SingleSelect/Shamsi/Shamsi";
import MultiCheckbox from "../MultiSelect/MultiCheckbox/MultiCheckbox";
import MultiCheckboxUpdate from "../MultiSelect/MultiCheckbox/MultiCheckboxUpdate";



const QuestionFilter = (CurrentQuestion) => {
   if (CurrentQuestion) {
        switch (CurrentQuestion.choiceTypeId) {
            case 12: {
                return (
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


