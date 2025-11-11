import { SET_FOOTERH, SET_LOADING, SET_ERROR } from "./ActionTypes";

export const setFooterh = (footerh) => {
  return {
    type: SET_FOOTERH,
    payload: footerh,
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
export const fetchFooterh = () => {
  return async function (dispatch) {
    try {
      let data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}db.json`);
      let res = await data.json();
      dispatch(setError(""));
      dispatch(setLoading(false));
      dispatch(setFooterh(res.footerh));
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(true));
    }
  };
};