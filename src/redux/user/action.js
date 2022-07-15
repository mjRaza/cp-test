import {
  ADD_FAILURE,
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  ADD_USER,
} from "./constant";

export const addUser = (user) => async (dispatch) => {
  dispatch({
    type: ADD_USER,
    payload: user,
  });
};
