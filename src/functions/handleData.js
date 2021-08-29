

// GET DATA OBJECT AND RETURN THE NEXT QUESTION THAT SHOULD RENDER 
export const ReturnQuestionTurn = ( Questions ) => {
    for (let i = 0; i < Questions.length; i++) {
        if (Questions[i].answered === false) {
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
    console.log(intArr)
    Data.forEach(item => {
        intArr.forEach(element => {
            if (item.id === element) {
                item.dispaly = bool
            }
        })
    })
    
}