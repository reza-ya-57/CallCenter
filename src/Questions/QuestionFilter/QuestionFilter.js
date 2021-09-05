import RadioQuestion from "../SingleSelect/RadioCustom/RadioCustom";
import DropDown from "../SingleSelect/SingleDropDown/SingleDropDown";
import MultiDropDown from "../MultiSelect/MultiDropDown/MultiDropDown";
import Shamsi from "../SingleSelect/Shamsi/Shamsi";
import MultiCheckbox from "../MultiSelect/MultiCheckbox/MultiCheckbox";
import RadioCustom from "../SingleSelect/RadioCustom/RadioCustom";
import EmailField from "../SingleSelect/EmailField/EmailField";
import LandlinePhone from "../SingleSelect/LandlinePhone/LandlinePhone";
import MultiLineInput from "../SingleSelect/MultiLineInput/MultiLineInput";
import NationalCode from "../SingleSelect/NationalCode/NationalCode";
import PhoneNumber from "../SingleSelect/PhoneNumber/PhoneNumber";
import SimpleNumberInput from "../SingleSelect/SimpleNumberInput/SimpleNumberInput";
import CustomSlider from "../SingleSelect/Slider/Slider";



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
            case 17: {
                return (
                    <NationalCode
                        {...CurrentQuestion}
                    />
                )
            }
            case 18: {
                return (
                    <PhoneNumber
                        {...CurrentQuestion}
                    />
                )
            }
            case 19: {
                return (
                    <Shamsi
                        {...CurrentQuestion}
                    />
                )
            }
            case 20: {
                return (
                    <SimpleNumberInput
                        {...CurrentQuestion}
                    />
                )
            }
            case 21: {
                return (
                    <CustomSlider
                        {...CurrentQuestion}
                    />
                )
            }
            default : return null;
        }
   }
}

export default QuestionFilter;


