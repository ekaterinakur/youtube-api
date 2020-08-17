import { SET_VIDEO_LIST, SET_NEW_VIDEO_LIST, SET_VIDEO, SET_LOADING_STATUS } from "./actions";

const initialState = {
  videos: [],
  video: null,
  nextPageToken: null,
  isLoading: true
};

export function getNextState(state = initialState, action) {
  switch (action.type) {
    case SET_VIDEO_LIST:
      return {
        ...state,
        videos: [...state.videos, ...action.payload.items],
        nextPageToken: action.payload.nextPageToken,
        isLoading: false
      };
    case SET_NEW_VIDEO_LIST:
      return {
        ...state,
        videos: action.payload.items,
        nextPageToken: action.payload.nextPageToken,
        isLoading: false
      };
    case SET_VIDEO: 
      return {
        ...state,
        video: action.payload
      };
    case SET_LOADING_STATUS: 
      return {
        ...state,
        isLoading: action.payload
      };
    default:
      return state;
  }
}
