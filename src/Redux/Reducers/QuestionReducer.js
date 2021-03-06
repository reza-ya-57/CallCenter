import * as actionTypes from '../Actions/actionTypes';
import { ReplaceCurrentQuestionInData } from '../../functions/handleData';
import { checkConditionOfChoices } from '../../functions/handleData';

const initialState = {
    Data : [
        {
            id: 88 ,
            number: 1 ,
            caption: "گزینه مورد نظر خود را وارد کنید؟" ,
            description: "" ,
            mandatory: true , 
            choiceTypeId: 12 , 
            sortOrder: 1 ,
            answered: false ,
            display: true ,
            noidea: {id: -1 , caption: "سوشود" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "457" , status: false  , display: true} ,
            choices:{
                description: "" ,
                column: 3 ,
                values:[
                {id: 100 , caption: "سوال شماره 3 حذف میشود" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "90" , status: false  , display: true} ,
                  {id: 102 , caption: "2" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "23" , status: false  , display: true} ,
                  {id: 103 , caption: "3" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "453" , status: false  , display: true} ,
                  {id: 104 , caption: "4" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "453" , status: false  , display: true} ,
                  {id: -1 , caption: "5" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "453" , status: false  , display: true} ,
                    ]
              }
     
        } ,
        {
            id: 89 ,
            number: 2 ,
            caption: "گزینه مورد نظر خود را وارد کنید؟" ,
            description: "" ,
            mandatory: true , 
            choiceTypeId: 25 , 
            sortOrder: 1 ,
            answered: false ,
            display: true ,
            noidea: {id: -1 , caption: "سوشود" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "457" , status: false  , display: true} ,
            choices:{
                description: "" ,
                max: 10 ,
                min: 5 ,
                childValues:[
                    {id: 100 , caption: "میشود" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "452" , status: false  , display: true  , parentId: 100} ,
                  {id: 102 , caption: "سوال بعدی حذف میشود" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "23" , status: false  , display: true , parentId: 100} ,
                  {id: 103 , caption: "سیشود" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "453" , status: false  , display: true , parentId: 100} ,
                  {id: 104 , caption: "سیشود" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "453" , status: false  , display: true , parentId: 100} ,
                  {id: -1 , caption: "هیچکدام" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "453" , status: false  , display: true , parentId: 102} ,
                    ]
                 ,
                 parentValues: [
                    {id: 100 , caption: "میشود" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "452" , status: false  , display: true} ,
                    {id: 102 , caption: "سوال بعدی حذف میشود" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "23" , status: false  , display: true} ,
                    {id: 103 , caption: "سیشود" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "453" , status: false  , display: true} ,
                    {id: 104 , caption: "سیشود" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "453" , status: false  , display: true} ,
                    {id: -1 , caption: "هیچکدام" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "453" , status: false  , display: true} ,
                 ]
              }
     
        } ,
        {
            id: 90 ,
            number: 3 ,
            caption: "گزینه مورد نظر خود را وارد کنید؟" ,
            description: "" ,
            mandatory: true , 
            choiceTypeId: 24 , 
            sortOrder: 1 ,
            answered: false ,
            display: true ,
            noidea: {id: -1 , caption: "سوشود" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "457" , status: false  , display: true} ,
            choices:{
                description: "" ,
                max: 10 ,
                min: 5 ,
                values:[
                    {id: 100 , caption: "میشود" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "452" , status: false  , display: true} ,
                  {id: 102 , caption: "سوال بعدی حذف میشود" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "23" , status: false  , display: true} ,
                  {id: 103 , caption: "سیشود" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "453" , status: false  , display: true} ,
                  {id: 104 , caption: "سیشود" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "453" , status: false  , display: true} ,
                  {id: -1 , caption: "هیچکدام" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "453" , status: false  , display: true} ,
                    ]
              }
     
        } ,
        {
            id: 91 ,
            number: 4 ,
            caption: "گزینه مورد نظر خود را وارد کنید؟" ,
            description: "" ,
            mandatory: true , 
            choiceTypeId: 23 , 
            sortOrder: 1 ,
            answered: false ,
            display: true ,
            noidea: {id: -1 , caption: "سوشود" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "457" , status: false  , display: true} ,
            choices:{
                description: "" ,
                max: 10 ,
                min: 5 ,
                values:[
                {id: 100 , caption: "میشود" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "452" , status: false  , display: true} ,
                  {id: 102 , caption: "سوال بعدی حذف میشود" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "23" , status: false  , display: true} ,
                  {id: 103 , caption: "سیشود" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "453" , status: false  , display: true} ,
                  {id: 104 , caption: "سیشود" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "453" , status: false  , display: true} ,
                  {id: -1 , caption: "هیچکدام" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "453" , status: false  , display: true} ,
                    ]
              }
     
        } ,
        {
            id: 92 ,
            number: 5 ,
            caption: "گزینه مورد نظر خود را وارد کنید؟" ,
            description: "" ,
            mandatory: true , 
            choiceTypeId: 22 , 
            sortOrder: 1 ,
            answered: false ,
            display: true ,
            noidea: {id: -1 , caption: "سوشود" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "457" , status: false  , display: true} ,
            choices:{
                description: "" ,
                max: 10 ,
                min: 5 ,
                values:[
                    {id: 100 , caption: "میشود" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "452" , status: false  , display: true} ,
                  {id: 102 , caption: "سوال بعدی حذف میشود" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "23" , status: false  , display: true} ,
                  {id: 103 , caption: "سیشود" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "453" , status: false  , display: true} ,
                  {id: 104 , caption: "سیشود" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "453" , status: false  , display: true} ,
                  {id: -1 , caption: "هیچکدام" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "453" , status: false  , display: true} ,
                    ]
              }
     
        } ,
        {
            id: 93 ,
            number: 6 ,
            caption: "گزینه مورد نظر خود را وارد کنید؟" ,
            description: "" ,
            mandatory: true , 
            choiceTypeId: 21 , 
            sortOrder: 1 ,
            answered: false ,
            display: true ,
            noidea: {id: -1 , caption: "سوشود" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "457" , status: false  , display: true} ,
            choices:{
                description: "" ,
                max: 10 ,
                min: 5 ,
                values:[
                    {id: 100 , caption: "میشود" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "452" , status: false  , display: true} ,
                  {id: 102 , caption: "سوال بعدی حذف میشود" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "23" , status: false  , display: true} ,
                  {id: 103 , caption: "سیشود" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "453" , status: false  , display: true} ,
                  {id: 104 , caption: "سیشود" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "453" , status: false  , display: true} ,
                  {id: 105 , caption: "سیشود" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "453" , status: false  , display: true} ,
                    ]
              }
     
        } ,
        {
            id: 94 ,
            number: 7 ,
            caption: "گزینه مورد نظر خود را وارد کنید؟" ,
            description: "" ,
            mandatory: true , 
            choiceTypeId: 20 , 
            sortOrder: 1 ,
            answered: false ,
            display: true ,
            noidea: {id: -1 , caption: "سوشود" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "457" , status: false  , display: true} ,
            choices:{
                description: "" ,
                max: 10 ,
                min: 5 ,
                values:[
                  {id: 102 , caption: "سوال بعدی حذف میشود" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "45" , status: false  , display: true} ,
                  {id: 103 , caption: "میشود" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "452" , status: false  , display: true} ,
                  {id: 104 , caption: "سیشود" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "453" , status: false  , display: true} ,
                    ]
              }
     
        } ,
        {
            id: 95 ,
            number: 8 ,
            caption: "گزینه مورد نظر خود را وارد کنید؟" ,
            description: "" ,
            mandatory: true , 
            choiceTypeId: 19 , 
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
            id: 96 ,
            number: 9 ,
            caption: "گزینه مورد نظر خود را وارد کنید؟" ,
            description: "توضیحی برای سوال" ,
            mandatory: true , 
            choiceTypeId: 18 , 
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
            id: 97 ,
            number: 10 ,
            caption: "گزینه مورد نظر خود را وارد کنید؟" ,
            description: "توضیحی برای سوال" ,
            mandatory: true , 
            choiceTypeId: 17 , 
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
          id: 500 ,
          number: 1 ,
          caption: "گزینه مورد نظر خود را وارد کنید؟" ,
          description: "" ,
          mandatory: true , 
          choiceTypeId: 26 , 
          sortOrder: 1 ,
          answered: false ,
          display: true ,
          noidea: {id: -1 , caption: "سوشود" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "457" , status: false  , display: true} ,
          choices:{
              description: "" ,
              column: 4 ,
              values:[
              {id: 100 , caption: "1" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "452" , status: false  , display: true} ,
                {id: 102 , caption: "2" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "23" , status: false  , display: true} ,
                {id: 103 , caption: "3" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "453" , status: false  , display: true} ,
                {id: 104 , caption: "4" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "453" , status: false  , display: true} ,
                {id: -1 , caption: "5" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "453" , status: false  , display: true} ,
                  ]
            }
   
      } ,
    {
       id: 30 ,
       number: 12 ,
       caption: "گزینه مورد نظر خود را وارد کنید؟" ,
       description: "توضیحی برای سوال" ,
       mandatory: true , 
       choiceTypeId: 16 , 
       sortOrder: 1 ,
       answered: false ,
       display: true ,
       noidea: {id: -1 , caption: "سوشود" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "457" , status: false  , display: true} ,
       choices:{
           description: "" ,
           column: null ,
           max: 1400 , 
           min: 5 ,
           values:null
         }

   } ,
    {
       id: 400 ,
       number: 13 ,
       caption: "گزینه مورد نظر خود را وارد کنید؟" ,
       description: "توضیحی برای سوال" ,
       mandatory: true , 
       choiceTypeId: 15 , 
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
   number: 14 ,
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
   number: 15 ,
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
       column: null ,
       values: [
           
        {id: 1 , caption: "2" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "67,19,18" , status: false  , display: true } ,
        {id: 34 , caption: "ایساکو" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "67" , status: false  , display: true} ,
        {id: 56 , caption: "سوال بعدی حذف میشود" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "60" , status: false  , display: true} ,
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
