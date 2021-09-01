

// GET DATA OBJECT AND RETURN THE NEXT QUESTION THAT SHOULD RENDER 
export const ReturnQuestionTurn = ( Questions ) => {
    for (let i = 0; i < Questions.length; i++) {
        if (Questions[i].answered === false && Questions[i].display === true) {
            return Questions[i];
        } 
    }
    
}
// GET ID OF CHOICES IN STRING FROMAT ("45,56,2") AND CHANG DISPLAY OF THAT CHOICE ACORDING TO BOOL 
export const deletedChoiceIdHandler = (Data ,choiceStringId , bool) => {
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
export const deletedQuestionIdHandler = (Data ,QuestionStringId , bool) => {
    let stringArr = QuestionStringId.split(",");
    let intArr = stringArr.map(item => {
        return parseInt(item)
    })
    Data.forEach(item => {
        intArr.forEach(element => {
            if (item.id === element) {
                item.dispaly = bool
            }
        })
    })
    
}


export const checkConditionOfChoices = (questionobject , data) => {
    // GET ID OF CHOICES IN STRING FROMAT ("45,56,2") AND CHANG DISPLAY OF THAT CHOICE ACORDING TO BOOL 
const deletedChoiceIdHandler = (choiceStringId , bool , data) => {
    let stringArr = choiceStringId.split(",");
    let intArr = stringArr.map(item => {
        return parseInt(item)
    })
    data.forEach((item , index) => {
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
const deletedQuestionIdHandler = (QuestionStringId , bool , data) => {
    let stringArr = QuestionStringId.split(",");
    let intArr = stringArr.map(item => {
        return parseInt(item)
    })
    data.forEach(item => {
        intArr.forEach(element => {
            if (item.id === element) {
                item.dispaly = bool
            }
        })
    })
    
}
    // از دو تابع بالا استفاده میکند و براثاث یک آبجکت سوال که بهش پاس داده میشود آبجکت کلی سوال ها را آپدیت میکند
    // منظور از آپدیت این است که بر اثاث گزینه هایی که انتحاب شده در آبجکت سوال 
    //display
    // را هم برای سوال هایی که باید حذف شوند و هم برای گزینه ها تغییر میدهد
   questionobject.choices.values.forEach(item => {
        if (item.deletedChoiceId) {
            deletedChoiceIdHandler(item.deletedChoiceId , !item.status , data)
        }
        if (item.deletedChoiceId) {
         deletedQuestionIdHandler(item.deletedQuestionId , !item.status , data)
        }
    //    deletedChoiceIdHandler(item.deletedChoiceId , true , data)
   })
}
// FINISH FUNCITON
 





// سوال فعلی که اطلاعات جدید در آن ثبت شده را در دیتا اصلی جایگزین میکند
// اول آیدی سوال را در دیتا کلی پیدا میکند و سوال را جایگزین میکند
export const ReplaceCurrentQuestionInData = (currentquestion , data) => {
    if (currentquestion && data) {
        data.forEach((item , index) => {
                if (item.id === currentquestion.id) {
                    currentquestion.answered = true
                    data.splice(index , 1 , currentquestion)
                }
        })
    }
}



export  const OneStepBackFromCurrentQuestion = (currentquestion , data) => {
    for (let i = 0; i < data.length; i++) {
        if (currentquestion.id === data[i].id) {
            for (let j = (i - 1); j >= 0; j--) {
                if (data[j].display === true) {
                    return  data[j]
                }
            }
        }
    }
}


export const IsCurrentQuestionHaveAnswerd = (currentquesiton) => {
    let haveAnswer = false;
    currentquesiton.choices.values.forEach(item => {
        if ( item.status === true ) {
            haveAnswer = true; 
        }
    })

    return haveAnswer;
}