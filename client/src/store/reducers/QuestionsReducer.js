import * as ActionTypes from "../types/questions.action.types";

const INITIAL_STATE = {
  allQuestionsByChannelID: [],
};

const QuestionsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.GET_QUESTIONS_BY_CHANNELID:
      return {
        ...state,
        allQuestionsByChannelID: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default QuestionsReducer
