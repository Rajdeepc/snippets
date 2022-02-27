import * as ActionTypes from "../types/questions.action.types";

const INITIAL_STATE = {
  allQuestionsByChannelID: [],
  allChannels: [],
  channelIdFilterText:''
};

const ChannelsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.GET_QUESTIONS_BY_CHANNELID:
      return {
        ...state,
        allQuestionsByChannelID: action.payload
      };
      case ActionTypes.GET_ALL_CHANNELS:
        return {
          ...state,
          allChannels: action.payload,
        };      
    default:
      return {
        ...state,
      };
  }
};

export default ChannelsReducer
