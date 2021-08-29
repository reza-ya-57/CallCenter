import QuestionFilter from "../QuestionFilter/QuestionFilter"

// GET CURRENTQUESTION STATE (ID) AND FIND IT IN QUESTION OBJECT

export const FindQuestionById = (Questions , CurrentQuestion) => {
    let FilteredQuestion;

    Questions.forEach(item => {
        if (item.id === CurrentQuestion) {

            FilteredQuestion = QuestionFilter(item)
            
        }
    })
        return FilteredQuestion
}








var Data = [
    {
       id: 23 ,
       caption: "گزینه مورد نظر خود را وارد کنید؟" ,
       description: "توضیحی برای سوال" ,
       mandatory: true , 
       choiceTypeId: 12 , 
       sortOrder: 1 ,
       answered: false ,
       dispaly: true ,
       choices:{
           noidea: true ,
           other: true ,
           column: 4 ,
           values:[
             {id: 1 , choice: "ایساکو" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "67" , status: false  , dispaly: true} ,
             {id: 1 , choice: "ایساکو" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "67" , status: false } ,
             {id: 1 , choice: "ایساکو" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "67" , status: false } ,
             {id: 1 , choice: "ایساکو" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "67" , status: false } ,
             {id: 2 , choice: "سایپا  دک"} ,
             {id: 3 , choice: "هپ کو "} ,
             {id: 4 , choice: " تو (ISPCO)"} ,
             {id: 5 , choice: "آی  (GISP)"} ,   
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
   dispaly: true ,
   choices:{
       noidea: true ,
       other: true ,
       column: 4 ,
       values:[
           {id: 1 , choice: "ایساکو" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "67,19,18" } ,
           {id: 34 , choice: "ایساکو" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "67" , status: false  , dispaly: true} ,
           {id: 56 , choice: "ایساکو" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "67" , status: false  , dispaly: true} ,
           {id: 1 , choice: "ایساکو" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "67" , status: false  , dispaly: true} ,
           {id: 12 , choice: "ایساکو" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "67" , status: false  , dispaly: true} ,
           {id: 1 , choice: "ایساکو" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "67" , status: false  , dispaly: true} ,
           {id: 2 , choice: "سایپا  دک"} ,
           {id: 3 , choice: "هپ کو "} ,
           {id: 4 , choice: " تو (ISPCO)"} ,
           {id: 5 , choice: "آی  (GISP)"} ,
           {id: 6 , choice: "RPCO"} ,
           {id: 7 , choice: "کروز"} ,
           ]
       }

   } 
   ,

   {
   id: 29 ,
   caption: "گزینه مورد نظر خود را وارد کنید؟" ,
   description: "توضیحی برای سوال" ,
   mandatory: true , 
   choiceTypeId: 12 , 
   sortOrder: 3 ,
   answered: false ,
   dispaly: true ,
   choices:{
       noidea: true ,
       other: true ,
       column: 4 ,
       values:[
           {id: 1 , choice: "ایساکو" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "67,19,18" } ,
           {id: 2 , choice: "سایپا  دک"} ,
           {id: 3 , choice: "هپ کو "} ,
           {id: 4 , choice: " تو (ISPCO)"} ,
           {id: 5 , choice: "آی  (GISP)"} ,
           {id: 6 , choice: "RPCO"} ,
           {id: 7 , choice: "کروز"} ,
           ]
       }

   }
   ,

   {
   id: 12 ,
   caption: "گزینه مورد نظر خود را وارد کنید؟" ,
   description: "توضیحی برای سوال" ,
   mandatory: true , 
   choiceTypeId: 12 , 
   sortOrder: 3 ,
   answered: false ,
   dispaly: true ,
   choices:{
       noidea: true ,
       other: true ,
       column: 4 ,
       values:[
           {id: 1 , choice: "ایساکو" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "67,19,18" } ,
           {id: 2 , choice: "سایپا  دک"} ,
           {id: 3 , choice: "هپ کو "} ,
           {id: 4 , choice: " تو (ISPCO)"} ,
           {id: 5 , choice: "آی  (GISP)"} ,
           {id: 6 , choice: "RPCO"} ,
           {id: 7 , choice: "کروز"} ,
           ]
       }

   }
]


// GET DATA OBJECT AND RETURN THE NEXT QUESTION THAT SHOULD RENDER 
const ReturnQuestionTurn = ( Questions ) => {
    for (let i = 0; i < Questions.length; i++) {
        if (Questions[i].answered === false) {
            return Questions[i];
        }
    }
    
}
// GET ID OF CHOICES IN STRING FROMAT ("45,56,2") AND CHANG DISPLAY OF THAT CHOICE ACORDING TO BOOL 
const deletedChoiceIdHandler = (choiceStringId , bool) => {
    let stringArr = choiceStringId.split(",");
    let intArr = stringArr.map(item => {
        return parseInt(item)
    })
    Data.forEach((item , index) => {
        if (item.choices.values) {
            item.choices.values.forEach((element , index) => {
                intArr.forEach(lastelement => {
                    if (lastelement === element.id) {
                        element.dispaly = bool
                    }
                })
            })
        }
    })
}


// GET ID OF QUESTION TO CHANG DISPLAY STATUS TRUE TO FALSE ACORDING TO BOOL 
const deletedQuestionIdHandler = (QuestionStringId , bool) => {
    let stringArr = QuestionStringId.split(",");
    let intArr = stringArr.map(item => {
        return parseInt(item)
    })
    console.log(intArr)
    Data.forEach(item => {
        intArr.forEach(element => {
            if (item.id === element) {
                item.dispaly = bool
            }
        })
    })
    
}


deletedQuestionIdHandler("12,45" , false)
deletedChoiceIdHandler("34,56,12" ,false)

console.log(Data)

var test = ReturnQuestionTurn(Data)

// console.log(test)

 

