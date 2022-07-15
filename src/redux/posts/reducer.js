import {
  GET_POSTS_FAILURE,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  ADD_POST,
} from "./constant";

const initialState = Object.freeze({
  posts: {
    data: [],
    isLoading: false,
    error: null,
  },
});
export default (state = initialState, action) => {
  debugger;
  switch (action.type) {
    case GET_POSTS_REQUEST:
      return {
        ...state,
        posts: {
          ...state.posts,
          isLoading: true,
        },
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: {
          data: action?.payload,
          isLoading: false,
          error: null,
        },
      };
    case GET_POSTS_FAILURE:
      return {
        ...state,
        posts: {
          ...state.posts,
          error: action?.payload,
          isLoading: false,
        },
      };

    case ADD_POST:
      return {
        ...state,
        posts: {
          data: [action?.payload, ...state.posts.data],
        },
      };

    default:
      return state;
  }
};
