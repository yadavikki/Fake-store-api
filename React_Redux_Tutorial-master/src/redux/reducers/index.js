import { combineReducers } from "redux";
import cartReducer from './cartSlice';
import { productsReducer, selectedProductsReducer } from "./productsReducer";
import authReducer from "./authReducer";

const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  cart:cartReducer,
  auth:authReducer
});

export default reducers;

