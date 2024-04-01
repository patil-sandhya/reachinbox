import { ADD_THREAD_REPLY, CHANGE_THEME, CURRENT_THREAD, CURRENT_THREAD_DATA, DELETE_THREAD, GET_DATA, GET_TOKEN } from "./ActionType";
import axios from "axios";

export const switchTheme = (newTheme) => (dispatch)=>{
    console.log("new theme", newTheme)
    dispatch({type: CHANGE_THEME, payload:newTheme})
}

export const updateToken = (newToken) => (dispatch)=>{
    dispatch({type: GET_TOKEN, payload:newToken})
}

export const getEmailList = (config) => (dispatch) => {
    return axios.get(`https://hiring.reachinbox.xyz/api/v1/onebox/list`, config)
      .then(res => {
        dispatch({ type: GET_DATA, payload: res.data });
      })
      .catch(err => {
        console.log(err)
      });
};

export const updateCurThread = (threadId)=> (dispatch)=>{
    dispatch({type: CURRENT_THREAD, payload: threadId})
}

export const getThreadData = (id,config) => (dispatch) => {
    dispatch({type: CURRENT_THREAD_DATA, payload: config})
    // return axios.get(`https://hiring.reachinbox.xyz/api/v1/onebox/messages/${id}`, config)
    //   .then(res => {
    //     dispatch({ type: CURRENT_THREAD_DATA, payload: res.data });
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   });
};

export const deleteThread =(id,config) =>(dispatch)=>{
  dispatch({type: DELETE_THREAD, payload: config})
    // return axios.delete(`https://hiring.reachinbox.xyz/api/v1/onebox/messages/${id}`, config)
    //   .then(res => {
    //     console.log(res.data)
    //   })
    //   .catch(err => {
    //     console.log(err)
    //   });
} 

export const sendReply = (id,replyObj,config) =>(dispatch)=>{
  dispatch({type: ADD_THREAD_REPLY, payload: replyObj})
    return axios.post(`https://hiring.reachinbox.xyz/api/v1/onebox/reply/${id}`,replyObj, config)
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      });
}