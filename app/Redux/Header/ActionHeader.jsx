import { SET_HEADER, SET_LOADING, SET_ERROR } from "./ActionTypes";

export const setHeader = (header) => {
  return {
    type: SET_HEADER,
    payload: header,
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
export const fetchHeader = () => {
  return async function (dispatch) {
    try {
      let data = await fetch("/api/total");
      let res = await data.json();
      dispatch(setError(""));
      dispatch(setLoading(false));
      dispatch(setHeader(res.header));
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(true));
    }
  };
};