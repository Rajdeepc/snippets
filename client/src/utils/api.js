// import axios from "axios";
// import { BASE_URL, API_ENDPOINTS } from "./environment";

// // /**
// //  * @method registerUser
// //  * @param {*} obj
// //  */
// // const registerUser = (obj) => {
// //     const body = {
// //         email: obj.email,
// //         username: obj.username,
// //         password: obj.password
// //     }
// //     const url = BASE_URL + API_ENDPOINTS.signup;
// //     return axios.post(url,body)
// //     .then(response => {
// //         return response.data
// //     })
// // }

// // /**
// //  * @method loginUser
// //  * @param {*} obj
// //  */
// // const loginUser = (obj) => {
// //     const body = {
// //         email: obj.email,
// //         password: obj.password
// //     }
// //     const url = BASE_URL + API_ENDPOINTS.signin;
// //     return axios.post(url,body)
// //     .then(response => {
// //         return response.data
// //     })
// // }

// // const shrinkLongUrl = (urlToShrink,email) => {
// //     const body = {
// //         email:email,
// //         longUrl: urlToShrink
// //     }
// //     const url = BASE_URL + API_ENDPOINTS.shrinkUrl;
// //     return axios.post(url,body)
// //     .then(response => {
// //         return response.data
// //     })
// // }

// const getMyProfileData = (channelId = 123) => {
//   const url = BASE_URL + API_ENDPOINTS.getChannelQuestions;
//   return axios.get(url).then((response) => {
//     return response.data;
//   });
// };

// const addTask = (channelId, task) => {
//   const url = BASE_URL + API_ENDPOINTS.addTask;
//   const body = {
//     channelId,
//     task,
//   };
//   return axios.post(url, body).then((response) => {
//     return response.data;
//   });
// };

// export default {
//   getMyProfileData,
//   addTask,
// };
