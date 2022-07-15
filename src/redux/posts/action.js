import {
  ADD_POST,
  GET_POSTS_FAILURE,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
} from "./constant";

export const getPosts = () => async (dispatch) => {
  dispatch({
    type: GET_POSTS_REQUEST,
  });

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const response = await res.json();
    if (response.length) {
      dispatch({
        type: GET_POSTS_SUCCESS,
        payload: response,
      });
    }
  } catch (error) {
    dispatch({
      type: GET_POSTS_FAILURE,
      payload: error,
    });
  }
};
export const addPost = (post) => async (dispatch) => {
  dispatch({
    type: GET_POSTS_REQUEST,
  });

  try {
    dispatch({
      type: ADD_POST,
      payload: post,
    });
  } catch (error) {
    dispatch({
      type: GET_POSTS_FAILURE,
      payload: error,
    });
  }
};
