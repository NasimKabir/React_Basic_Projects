import { combineReducers } from "redux";
import {productReducer,selectedProductReducer} from './productReducer';

 const reducer =combineReducers({
    allProducts:productReducer,
    singleProduct:selectedProductReducer
});

export default reducer;