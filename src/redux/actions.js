import axios from 'axios';

export const SET_VIDEO_LIST = 'SET_VIDEO_LIST';
export const SET_VIDEO = 'SET_VIDEO';
export const SET_LOADING_STATUS = 'SET_LOADING_STATUS';

const api_key = 'AIzaSyD53VjJoB5OJsHa-_iQApbYU056DwOpxpg';
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

    dispatch({
      type: SET_LOADING_STATUS,
      payload: true
    })

    let endpoint = query ? '/search' : '/videos';
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
      console.log(res);
      dispatch({
        type: SET_VIDEO_LIST,
        payload: res.data
      })
    })
    .catch(err => {
      dispatch({
        type: SET_VIDEO_LIST,
        payload: {nextPageToken: null, items: []}
      })
  
      console.error(err)
    });
  }
};

// export function getVideo(id) {
//   return function(dispatch) {
//     axiosInstance.get('/videos/' + id)
//       .then(res => {
//         dispatch({
//           type: SET_VIDEO,
//           payload: res.data
//         })
//       })
//       .catch(err => console.error(err))
//   }
// };
