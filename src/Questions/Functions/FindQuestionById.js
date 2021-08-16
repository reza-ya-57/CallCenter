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