

const initialState = {
     Questions : [
         {
            id: 1 , 
            number: 1 ,
            type: 'SingleSelectDropDown'  ,
            text: ' آیا در انتهاي كار (در زمان ترخيص) مسئول ترخيص موارد ثبت شده در برگه ي پذيرش را براي شما توضيح دادند كه چه كاري روي ماشين انجام دادند؟'  ,
            Horizontal: false ,
            value: {
                value2: 'خیر' , 
                value1: 'بله' ,
                value3: 'نمیدانم' ,
                value4: 'سایر موارد'
            }
         } ,

         {
            id: 2 , 
            number: 2 ,
            type: 'MultiSelectDropDown'  ,
            text: ' آیا در انتهاي كار (در زمان ترخيص) مسئول ترخيص موارد ثبت شده در برگه ي پذيرش را براي شما توضيح دادند كه چه كاري روي ماشين انجام دادند؟'  ,
            Horizontal: false ,
            value: {
                value2: 'خیر' , 
                value1: 'بله' ,
                value3: 'نمیدانم' ,
                value4: 'سایر موارد'
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