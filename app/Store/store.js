import { configureStore } from "@reduxjs/toolkit";
import ReducerHeader from "../Redux/Header/ReducerHeader";
import ReducerHeader2 from "../Redux/Header2/ReducerHeader2";
import ReducerTaghvim from "../Redux/Taghvim/ReducerTaghvim";
import ReducerTaghvim2 from "../Redux/Taghvim2/ReducerTaghvim2";
import ReducerTotalproduct from "../Redux/TotalProduct/ReducerTotalProduct";
import ReducerFooterh from "../Redux/FooterH/ReducerFooterh";
import ReducerCars from "../Redux/Cars/ReducerCars";

export const store = configureStore({
  reducer: {
    header:ReducerHeader,
    header2:ReducerHeader2,
    taghvim:ReducerTaghvim,
    taghvim2:ReducerTaghvim2,
    totalproduct:ReducerTotalproduct,
    footerh:ReducerFooterh,
    cars:ReducerCars
  },
 
});
