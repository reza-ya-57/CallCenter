import RadioQuestion from "../SingleSelect/RadioCustom/RadioCustom";
import DropDown from "../SingleSelect/SingleDropDown/SingleDropDown";
import MultiDropDown from "../MultiSelect/MultiDropDown/MultiDropDown";
import Shamsi from "../SingleSelect/Shamsi/Shamsi";
import MultiCheckbox from "../MultiSelect/MultiCheckbox/MultiCheckbox";
import RadioCustom from "../SingleSelect/RadioCustom/RadioCustom";
import EmailField from "../SingleSelect/EmailField/EmailField";



const QuestionFilter = (CurrentQuestion) => {
   if (CurrentQuestion) {
        switch (CurrentQuestion.choiceTypeId) {
            case 12: {
                return (
                    <MultiCheckbox
                        {...CurrentQuestion}
                    />
                )
            }
            case 13: {
                return (
                    <RadioCustom 
                        {...CurrentQuestion}
                    />
                )
            }
            case 14: {
                return (
                    <EmailField
                        {...CurrentQuestion}
                    />
                )
            }
            default : return null;
        }
   }
}

export default QuestionFilter;


