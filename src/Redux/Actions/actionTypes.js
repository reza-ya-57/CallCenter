// IMPORT TO AUTHREDUCER
export const SET_USER = "SET_USER";


// IMPORT TO THEMEREDUCER
export const SET_THEME = "SET_THEME";


// Use in QuestionReducer 
// آبجکت سوال جاری را در دیتا کلی پیدا میکند و سوال جاری آپدیت شده را جایگزین جایگزین قبلی میکند
export const SUBMIT_ANSWER = "SUBMIT_ANSWER";


// Use in CurrentQuestionReducer
// سوال بعدی را در دیتا کلی پیدا میکند و سوال جاری را مطابقا آپدیت میکند
// سوال بعدی منظور سوالی است که نوبت پرسیدنش است
export const NEXT_QUESTION = "NEXT_QUESTION";
// رفتن به سوال قبلی با توجه به اینکه کدام سوال حذف شده
export const BACK_QUESTION = "BACK_QUESTION";

export const UPDATE_CURRENT_QUESTION = "UPDATE_CURRENT_QUESTION";
export const SET_CHANGE_CURRENT_QUESTION = "SET_CHANGE_CURRENT_QUESTION";






export const CHECK_FOR_REQUIRE_VALIDATE = "CHECK_FOR_REQUIRE_VALIDATE";
export const SET_REQUIRE_VALIDATE = "SET_REQUIRE_VALIDATE";

