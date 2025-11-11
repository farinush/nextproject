import { SET_CLIENT, SET_LOADING, SET_ERROR } from "./ActionTypes";

export const setClient = (client) => {
  return {
    type: SET_CLIENT,
    payload: client,
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
export const fetchClient = () => {
  return async function (dispatch) {
    try {
      let data = await fetch("/Api/Total");
      let res = await data.json();
      dispatch(setError(""));
      dispatch(setLoading(false));
      dispatch(setClient(res.client));
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(true));
    }
  };
};