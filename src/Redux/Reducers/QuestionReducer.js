import * as actionTypes from '../Actions/actionTypes';
import { ReplaceCurrentQuestionInData } from '../../functions/handleData';
import { checkConditionOfChoices } from '../../functions/handleData';

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
           noidea:  {id: 102 , choice: "ایسhguygyuاکو" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "67 ,56" , status: false  , display: true} ,
           other: true ,
           column: 4 ,
           values:[
             {id: 102 , choice: "1" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "45" , status: false  , display: true} ,
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
           {id: 1 , choice: "2" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "67,19,18" , status: false  , display: true } ,
           {id: 34 , choice: "ایساکو" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "67" , status: false  , display: true} ,
           {id: 56 , choice: "ایسgdfgاکو" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "67" , status: false  , display: true} ,
        //    {id: 5 , choice: "ایfdgfdساکو" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "67" , status: false  , display: true} ,
        //    {id: 12 , choice: "ایساکو" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "67" , status: false  , display: true} ,
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
           {id: 100 , choice: "3" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "67,19,18" , status: false  , display: true} ,
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
           {id: 30 , choice: "4" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "67,19,18" , status: false  , display: true} ,
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






export const QuestionReducer = (state = initialState , action) => {
    switch(action.type) {

        case(actionTypes.SUBMIT_ANSWER): 
            let updateData = JSON.parse(JSON.stringify(state))
            checkConditionOfChoices( action.payload, updateData.Data)
            ReplaceCurrentQuestionInData(action.payload , updateData.Data)
            return {
                Data: updateData.Data
            }


        default: return state
    }
}
