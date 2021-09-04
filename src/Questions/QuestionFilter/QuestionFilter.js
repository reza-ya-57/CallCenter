import RadioQuestion from "../SingleSelect/RadioCustom/RadioCustom";
import DropDown from "../SingleSelect/SingleDropDown/SingleDropDown";
import MultiDropDown from "../MultiSelect/MultiDropDown/MultiDropDown";
import Shamsi from "../SingleSelect/Shamsi/Shamsi";
import MultiCheckbox from "../MultiSelect/MultiCheckbox/MultiCheckbox";
import RadioCustom from "../SingleSelect/RadioCustom/RadioCustom";
import EmailField from "../SingleSelect/EmailField/EmailField";
import LandlinePhone from "../SingleSelect/LandlinePhone/LandlinePhone";
import MultiLineInput from "../SingleSelect/MultiLineInput/MultiLineInput";



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
            case 15: {
                return (
                    <LandlinePhone 
                        {...CurrentQuestion}
                    />
                )
            }
            case 16: {
                return (
                    <MultiLineInput
                        {...CurrentQuestion}
                    />
                )
            }
            default : return null;
        }
   }
}

export default QuestionFilter;


