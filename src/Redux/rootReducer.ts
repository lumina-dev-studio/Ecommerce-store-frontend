import { baseApi } from "./api/baseApi";
// import addProductReducer from "./api/Ecommerce/AddProduct/addProductSlice";
// import navBarReducer from "./api/NavBar/navBarSlice";
import rightSideBarReducer from "./api/RightSideBar/RightSideBarSlice";

export const reducer = {
  [baseApi.reducerPath]: baseApi.reducer,

  rightSideBar: rightSideBarReducer
};
