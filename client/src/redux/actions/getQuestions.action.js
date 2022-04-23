import Service from "../../utils/service";
import { BASE_URL, API_ENDPOINTS } from "../../utils/environment";

const getSelectedChannelData =
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

const getChannelData = () => async (dispatch) => {
  const API_URL = BASE_URL + API_ENDPOINTS.getAllChannelData;
  Service.requestParams("GET", API_URL)
    .then((res) => {
      dispatch({
        type: "GET_ALL_CHANNELS",
        payload: res?.data,
      });
    })
    .catch((e) => console.log(e));
};



const addTask = (payload) => async (dispatch) => {
  const API_URL = BASE_URL + API_ENDPOINTS.addTask;
  Service.requestParams("POST", API_URL, payload)
    .then((res) => {
      dispatch({
        type: "POST_NEW_TASK",
        payload: res?.data,
      });
    })
    .catch((e) => console.log(e));
}

export { getChannelData, getSelectedChannelData,addTask };
