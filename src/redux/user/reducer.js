import { ADD_FAILURE, ADD_USER, ADD_USER_REQUEST, ADD_USER_SUCCESS } from "./constant";
const initialState = Object.freeze({
  user: {
    data: [],
    isLoading: false,
    error: null,
  },
});
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        user: {
          data: action?.payload,
          isLoading: false,
          error: null,
        },
      };
    default:
      return state;
  }
};
