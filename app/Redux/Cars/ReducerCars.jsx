import { SET_ERROR, SET_CARS, SET_LOADING } from "./ActionTypes";
const initialstate = {
  loading: true,
  cars: {},
  error: "",
};
const ReducerCars = (state = initialstate, action) => {
  switch (action.type) {
    case SET_CARS: {
      return { ...state, cars: action.payload };
    }
    case SET_LOADING: {
      return { ...state, loading: action.payload };
    }
    case SET_ERROR: {
      return { ...state, error: action.payload };
    }
    default: {
      return state;
    }
  }
};
export default ReducerCars;