

const initialState = {
     Questions : [
         {
            id: 1 , 
            number: 1 ,
            type: 'SingleSelectDropDown'  ,
            text: ' آیا در انتهاي كار (در زمان ترخيص) مسئول ترخيص موارد ثبت شده در برگه ي پذيرش را براي شما توضيح دادند كه چه كاري روي ماشين انجام دادند؟'  ,
         } ,


         {
            id: 2 , 
            number: 2 ,
            type: 'MultiSelectDropDown'  ,
            text: ' آیا در انتهاي كار (در زمان ترخيص) مسئول ترخيص موارد ثبت شده در برگه ي پذيرش را براي شما توضيح دادند كه چه كاري روي ماشين انجام دادند؟'  ,
         } ,

         {
            id: 3 , 
            number: 3 ,
            type: 'SingleSelectRadio'  ,
            text: ' آیا در انتهاي كار (در زمان ترخيص) مسئول ترخيص موارد ثبت شده در برگه ي پذيرش را براي شما توضيح دادند كه چه كاري روي ماشين انجام دادند؟'  ,
            choice: {
                Horizontal: false ,
                value: {
                    value2: 'خیر' , 
                    value1: 'بله' ,
                    value3: 'نمیدانم' ,
                    value4: 'سایر موارد'
                }
            }
         } ,


         {
            id: 4 , 
            number: 4 ,
            type: 'Calendar'  ,
            text: ' آیا در انتهاي كار (در زمان ترخيص) مسئول ترخيص موارد ثبت شده در برگه ي پذيرش را براي شما توضيح دادند كه چه كاري روي ماشين انجام دادند؟'  ,
         } ,
         {
            id: 5 , 
            number: 5 ,
            type: 'MultiCheckbox'  ,
            text: ' آیا در انتهاي كار (در زمان ترخيص) مسئول ترخيص موارد ثبت شده در برگه ي پذيرش را براي شما توضيح دادند كه چه كاري روي ماشين انجام دادند؟'  ,
            checks: {
                check001: 'گزینه 1' ,
                check002: 'گزینه 2' , 
                check003: 'گزینه 3' ,
                check004: 'گزینه 4' ,
                check005: 'گزینه 5' ,
                check006: 'گزینه 6' ,
            }
         }
     ]
}

export const QuestionReducer = (state = initialState , action) => {
    switch(action.type) {
        case("SET_QUESTION"): 
        return {
            ...state 
        }

        default: return state
    }
}