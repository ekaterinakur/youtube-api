import axios from 'axios';

export const SET_VIDEO_LIST = 'SET_VIDEO_LIST';
export const SET_NEW_VIDEO_LIST = 'SET_SEARCH_LIST';
export const SET_VIDEO = 'SET_VIDEO';
export const SET_LOADING_STATUS = 'SET_LOADING_STATUS';

const api_key = 'AIzaSyCUG3KH_QaM4Ek_byGLQ_FBfUi--KjztBs';

let axiosInstance = axios.create({    
  baseURL: 'https://www.googleapis.com/youtube/v3',
// params: {
//     key: api_key,
//     maxResults: 10,
//     part: 'snippet'
// }
});

export function getVideoList(query = null, pageToken = null) {
  return function(dispatch) {

    if (!pageToken) {
      dispatch({
        type: SET_LOADING_STATUS,
        payload: true
      })
    }

    let endpoint = query ? '/search' : '/videos';
    let actionType = (query && !pageToken) ? SET_NEW_VIDEO_LIST : SET_VIDEO_LIST;

    let params = {
      key: api_key,
      maxResults: 10,
      part: 'snippet',
      chart: 'mostPopular',
    }

    if (query) {
      params.q = query;
    }

    if (pageToken) {
      params.pageToken = pageToken;
    }

    axiosInstance.get(endpoint, { params })   
    .then(res => {
      dispatch({
        type: actionType,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: SET_NEW_VIDEO_LIST,
        payload: {nextPageToken: null, items: []}
      })
  
      console.error(err)
    });
  }
};

export function getVideo(id) {
  return function(dispatch) {
    axiosInstance.get('/videos', {
      params: {
        key: api_key,
        part: 'snippet',
        id
      }
    })
      .then(res => {
        dispatch({
          type: SET_VIDEO,
          payload: res.data.items[0]
        })
      })
      .catch(err => console.error(err))
  }
};
