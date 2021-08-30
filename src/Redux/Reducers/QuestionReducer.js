import * as actionTypes from '../Actions/actionTypes';
import { ReturnQuestionTurn } from '../../functions/handleData';
import { ReplaceCurrentQuestionInData } from '../../functions/handleData';

const initialState = {
    Data : [
    {
       id: 23 ,
       caption: "گزینه مورد نظر خود را وارد کنید؟" ,
       description: "توضیحی برای سوال" ,
       mandatory: true , 
       choiceTypeId: 12 , 
       sortOrder: 1 ,
       answered: false ,
       display: true ,
       choices:{
           noidea: true ,
           other: true ,
           column: 4 ,
           values:[
             {id: 102 , choice: "ایساکو" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "67 ,56" , status: false  , display: true} ,
             {id: 202 , choice: "ایساکو" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "67" ,  status: false  , display: true} ,
             {id: 302 , choice: "ایساکو" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "67" , status: false  , display: true } ,
             {id: 402 , choice: "ایساکو" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "67" , status: false  , display: true } ,
             {id: 408 , choice: "ایساکو" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "67" , status: false  , display: true } ,
             {id: 409 , choice: "ایساکو" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "67" , status: false  , display: true } ,
               ]
         }

   } ,

   {
   id: 45 ,
   caption: "گزینه مورد نظر خود را وارد کنید؟" ,
   description: "توضیحی برای سوال" ,
   mandatory: true , 
   choiceTypeId: 12 , 
   sortOrder: 2 ,
   answered: false ,
   display: true ,
   choices:{
       noidea: true ,
       other: true ,
       column: 4 ,
       values:[
           {id: 1 , choice: "ایساکو" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "67,19,18" , status: false  , display: true } ,
           {id: 34 , choice: "ایساکو" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "67" , status: false  , display: true} ,
           {id: 56 , choice: "ایسgdfgاکو" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "67" , status: false  , display: true} ,
           {id: 5 , choice: "ایfdgfdساکو" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "67" , status: false  , display: true} ,
           {id: 12 , choice: "ایساکو" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "67" , status: false  , display: true} ,
        //    {id: 11 , choice: "ایساکو" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "67" , status: false  , display: true} ,

           ]
       }

   } 
   ,

   {
   id: 60 ,
   caption: "گزینه مورد نظر خود را وارد کنید؟" ,
   description: "توضیحی برای سوال" ,
   mandatory: true , 
   choiceTypeId: 12 , 
   sortOrder: 3 ,
   answered: false ,
   display: true ,
   choices:{
       noidea: true ,
       other: true ,
       column: 4 ,
       values:[
           {id: 100 , choice: "ایساکو" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "67,19,18" , status: false  , display: true} ,
           {id: 344 , choice: "ایساکو" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "67" , status: false  , display: true} ,
           {id: 564 , choice: "ایساکو" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "67" , status: false  , display: true} ,
           {id: 54 , choice: "ایساکو" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "67" , status: false  , display: true} ,
        //    {id: 124 , choice: "ایساکو" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "67" , status: false  , display: true} ,
        //    {id: 14 , choice: "ایساکو" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "67" , status: false  , display: true} ,
           ]
       }

   }
   ,

   {
   id: 50 ,
   caption: "گزینه مورد نظر خود را وارد کنید؟" ,
   description: "توضیحی برای سوال" ,
   mandatory: true , 
   choiceTypeId: 12 , 
   sortOrder: 3 ,
   answered: false ,
   display: true ,
   choices:{
       noidea: true ,
       other: true ,
       column: 4 ,
       values:[
           {id: 30 , choice: "ایساکو" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "67,19,18" , status: false  , display: true} ,
           {id: 34 , choice: "ایساکو" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "67" , status: false  , display: true} ,
           {id: 56 , choice: "ایساکو" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "67" , status: false  , display: true} ,
        //    {id: 40 , choice: "ایساکو" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "67" , status: false  , display: true} ,
        //    {id: 12 , choice: "ایساکو" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "67" , status: false  , display: true} ,
        //    {id: 1 , choice: "ایساکو" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "67" , status: false  , display: true} ,
           ]
       }

   }
]
}



// export const QuestionReducer = (state = initialState , action) => {
//     switch(action.type) {
//         case(actionTypes.NEXT_QUESTION): 
//         return {
//          CurrentQuestion : state.CurrentQuestion + 1
//         }
//         case(actionTypes.BACK_QUESTION): 
//         return {
//          CurrentQuestion : state.CurrentQuestion - 1
//         }
 
//         default: return state
//     }
//  }










export const QuestionReducer = (state = initialState , action) => {
    switch(action.type) {

        case(actionTypes.SUBMIT_ANSWER): 
            let updateData = JSON.parse(JSON.stringify(state))
            ReplaceCurrentQuestionInData(action.payload , updateData.Data)
            return {
                Data: updateData.Data
            }


        default: return state
    }
}




























// Questions : [
//          {
//             id: 1 , 
//             number: 1 ,
//             type: 'SingleSelectDropDown'  ,
//             text: ' آیا در انتهاي كار (در زمان ترخيص) مسئول ترخيص موارد ثبت شده در برگه ي پذيرش را براي شما توضيح دادند كه چه كاري روي ماشين انجام دادند؟'  ,
//          } ,


//          {
//             id: 2 , 
//             number: 2 ,
//             type: 'MultiSelectDropDown'  ,
//             text: ' آیا در انتهاي كار (در زمان ترخيص) مسئول ترخيص موارد ثبت شده در برگه ي پذيرش را براي شما توضيح دادند كه چه كاري روي ماشين انجام دادند؟'  ,
//          } ,

//          {
//             id: 3 , 
//             number: 3 ,
//             type: 'SingleSelectRadio'  ,
//             text: ' آیا در انتهاي كار (در زمان ترخيص) مسئول ترخيص موارد ثبت شده در برگه ي پذيرش را براي شما توضيح دادند كه چه كاري روي ماشين انجام دادند؟'  ,
//             choice: {
//                 Horizontal: false ,
//                 value: {
//                     value2: 'خیر' , 
//                     value1: 'بله' ,
//                     value3: 'نمیدانم' ,
//                     value4: 'سایر موارد'
//                 }
//             }
//          } ,


//          {
//             id: 4 , 
//             number: 4 ,
//             type: 'Calendar'  ,
//             text: ' آیا در انتهاي كار (در زمان ترخيص) مسئول ترخيص موارد ثبت شده در برگه ي پذيرش را براي شما توضيح دادند كه چه كاري روي ماشين انجام دادند؟'  ,
//          } ,
//          {
//             id: 5 , 
//             number: 5 ,
//             type: 'MultiCheckbox'  ,
//             text: ' آیا در انتهاي كار (در زمان ترخيص) مسئول ترخيص موارد ثبت شده در برگه ي پذيرش را براي شما توضيح دادند كه چه كاري روي ماشين انجام دادند؟'  ,
//             checks: {
//                 check001: 'گزینه 1' ,
//                 check002: 'گزینه 2' , 
//                 check003: 'گزینه 3' ,
//                 check004: 'گزینه 4' ,
//                 check005: 'گزینه 5' ,
//                 check006: 'گزینه 6' ,
//             }
//          }
//      ]