import { SET_TAGHVIM, SET_LOADING, SET_ERROR } from "./ActionTypes";

export const setTaghvim = (taghvim) => {
  return {
    type: SET_TAGHVIM,
    payload: taghvim,
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
export const fetchTaghvim = () => {
  return async function (dispatch) {
    try {
      let data = await fetch("/Api/Total");
      let res = await data.json();
      dispatch(setError(""));
      dispatch(setLoading(false));
      dispatch(setTaghvim(res.taghvim));
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(true));
    }
  };
};