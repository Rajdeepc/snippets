import Service from "../../utils/service";
import { BASE_URL, API_ENDPOINTS } from "../../utils/environment";

const getQuestionsByChannelID =
  (channelId = "channel1") =>
  async (dispatch) => {
    const API_URL =
      BASE_URL + API_ENDPOINTS.getChannelQuestions + "/" + channelId;
    Service.requestParams("GET", API_URL)
      .then((res) => {
        console.log(res);
        dispatch({ type: "GET_QUESTIONS_BY_CHANNELID", payload: res?.data });
      })
      .catch((e) => console.log(e));
  };

export { getQuestionsByChannelID };
