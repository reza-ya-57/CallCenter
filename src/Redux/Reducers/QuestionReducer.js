import * as actionTypes from '../Actions/actionTypes';
import { ReplaceCurrentQuestionInData } from '../../functions/handleData';
import { checkConditionOfChoices } from '../../functions/handleData';

const initialState = {
    Data : [
    {
       id: 23 ,
       number: 1 ,
       caption: "گزینه مورد نظر خود را وارد کنید؟" ,
       description: "توضیحی برای سوال" ,
       mandatory: true , 
       choiceTypeId: 12 , 
       sortOrder: 1 ,
       answered: false ,
       display: true ,
       noidea: {id: -1 , caption: "سوشود" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "457" , status: false  , display: true} ,
       choices:{
           description: "" ,
           other: true ,
           column: 4 ,
           values:[
             {id: 102 , caption: "سوال بعدی حذف میشود" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "45" , status: false  , display: true} ,
             {id: 103 , caption: "میشود" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "452" , status: false  , display: true} ,
             {id: 104 , caption: "سیشود" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "453" , status: false  , display: true} ,
               ]
         }

   } ,

   {
   id: 45 ,
   number: 2 ,
   caption: "گزینه مورد نظر خود را وارد کنید؟" ,
   description: "توضیحی برای سوال" ,
   mandatory: true , 
   choiceTypeId: 13 , 
   sortOrder: 2 ,
   answered: false ,
   display: true ,
   noidea:  {id: 1 , caption: "2" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "67,19,18" , status: false  , display: true } ,
   choices:{
       description: "" ,
       other: true ,
       column: 4 ,
       values:[
           {id: 1 , caption: "2" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "67,19,18" , status: false  , display: true } ,
           {id: 34 , caption: "ایساکو" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "67" , status: false  , display: true} ,
           {id: 56 , caption: "سوال بعدی حذف میشود" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "60" , status: false  , display: true} ,
        //    {id: 5 , choice: "ایfdgfdساکو" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "67" , status: false  , display: true} ,
        //    {id: 12 , choice: "ایساکو" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "67" , status: false  , display: true} ,
        //    {id: 11 , choice: "ایساکو" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "67" , status: false  , display: true} ,

           ]
       }

   } 
   ,

   {
   id: 60 ,
   number: 3 ,
   caption: "گزینه مورد نظر خود را وارد کنید؟" ,
   description: "" ,
   mandatory: true , 
   choiceTypeId: 14 , 
   sortOrder: 3 ,
   answered: false ,
   display: true ,
   noidea:  {id: 1 , caption: "2" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "67,19,18" , status: false  , display: true } ,
   choices:{
       description: "" ,
       other: true ,
       column: 4 ,
       values:[
           {id: 100 , caption: "3" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "67,19,18" , status: false  , display: true} ,
           {id: 344 , caption: "ایساکو" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "67" , status: false  , display: true} ,
           {id: 564 , caption: "ایساکو" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "67" , status: false  , display: true} ,
           {id: 54 , caption: "ایساکو" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "67" , status: false  , display: true} ,
        //    {id: 124 , choice: "ایساکو" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "67" , status: false  , display: true} ,
        //    {id: 14 , choice: "ایساکو" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "67" , status: false  , display: true} ,
           ]
       }

   }
   ,

   {
   id: 50 ,
   number: 4 ,
   caption: "گزینه مورد نظر خود را وارد کنید؟" ,
   description: "توضیحی برای سوال" ,
   mandatory: true , 
   choiceTypeId: 12 , 
   sortOrder: 3 ,
   answered: false ,
   display: true ,
   choices:{
       description: "" ,
       other: true ,
       column: 4 ,
       values:[
           {id: 30 , caption: "4" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "67,19,18" , status: false  , display: true} ,
           {id: 34 , caption: "ایساکو" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "67" , status: false  , display: true} ,
           {id: 56 , caption: "ایساکو" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "67" , status: false  , display: true} ,
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
