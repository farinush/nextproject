import { SET_CARS, SET_LOADING, SET_ERROR } from "./ActionTypes";

export const setCars = (cars) => {
  return {
    type: SET_CARS,
    payload: cars,
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
export const fetchCars = () => {
  return async function (dispatch) {
    try {
      let data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}db.json`);
      let res = await data.json();
      dispatch(setError(""));
      dispatch(setLoading(false));
      dispatch(setCars(res.cars));
    } catch (error) {
      dispatch(setError(error.message));
      dispatch(setLoading(true));
    }
  };
};