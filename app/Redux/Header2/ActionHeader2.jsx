import { SET_HEADER2, SET_LOADING, SET_ERROR } from "./ActionTypes";

export const setHeader2 = (header2) => {
  return {
    type: SET_HEADER2,
    payload: header2,
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
export const fetchHeader2 = () => {
  return async function (dispatch) {
    try {
      let data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}db.json`);
      let res = await data.json();
      dispatch(setError(""));
      dispatch(setLoading(false));
      dispatch(setHeader2(res.header2));
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(true));
    }
  };
};