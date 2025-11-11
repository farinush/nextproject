import { SET_TAGHVIM2, SET_LOADING, SET_ERROR } from "./ActionTypes";

export const setTaghvim2 = (taghvim2) => {
  return {
    type: SET_TAGHVIM2,
    payload: taghvim2,
  };
};
export const setLoading = (status) => {
  return {
    type: SET_LOADING,
    payload: status,
  };
};
export const setError = (error) => {
  return {
    type: SET_ERROR,
    payload: error,
  };
};
export const fetchTaghvim2 = () => {
  return async function (dispatch) {
    try {
      let data = await fetch("/api/total");
      let res = await data.json();
      dispatch(setError(""));
      dispatch(setLoading(false));
      dispatch(setTaghvim2(res.taghvim2));
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(true));
    }
  };
};