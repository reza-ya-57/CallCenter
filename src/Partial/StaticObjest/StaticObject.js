

var Data = [
     {
        id: 23 ,
        caption: "گزینه مورد نظر خود را وارد کنید؟" ,
        description: "توضیحی برای سوال" ,
        mandatory: true , 
        choiceTypeId: 12 , 
        sortOrder: 1 ,
        choices={
            noidea: true ,
            other: true ,
            column: 4 ,
            values:[
              {id: 1 , choice: "ایساکو" , sortOrder: 12 , deletedChoiceId: "45,12,14" , deletedQuestionId: "67" } ,
              {id: 2 , choice: "سایپا  دک"} ,
              {id: 3 , choice: "هپ کو "} ,
              {id: 4 , choice: " تو (ISPCO)"} ,
              {id: 5 , choice: "آی  (GISP)"} ,
                ]
          }

    } ,

    {
    id: 67 ,
    caption: "گزینه مورد نظر خود را وارد کنید؟" ,
    description: "توضیحی برای سوال" ,
    mandatory: true , 
    choiceTypeId: 12 , 
    sortOrder: 2 ,
    choices={
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

    } ,

    {
    id: 29 ,
    caption: "گزینه مورد نظر خود را وارد کنید؟" ,
    description: "توضیحی برای سوال" ,
    mandatory: true , 
    choiceTypeId: 12 , 
    sortOrder: 3 ,
    choices={
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

Data.forEach(item => {
    if (item.id === 67) {
        console.log(item)
    }
})