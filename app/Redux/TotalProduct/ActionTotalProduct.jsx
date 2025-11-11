import { SET_TOTALPRODUCT, SET_LOADING, SET_ERROR } from "./ActionTypes";

export const setTotalproduct = (totalproduct) => {
  return {
    type: SET_TOTALPRODUCT,
    payload: totalproduct,
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
export const fetchTotalproduct = () => {
  return async function (dispatch) {
    try {
      let data = await fetch("/api/total");
      let res = await data.json();
      dispatch(setError(""));
      dispatch(setLoading(false));
      dispatch(setTotalproduct(res.totalproduct));
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(true));
    }
  };
};