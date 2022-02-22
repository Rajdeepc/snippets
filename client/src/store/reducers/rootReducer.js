import { combineReducers } from "redux";
import QuestionsReducer from './QuestionsReducer';

const rootReducer =  combineReducers({
    QuestionsReducer,
})

export default rootReducer