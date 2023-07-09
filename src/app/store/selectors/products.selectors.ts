import { createSelector } from "@ngrx/store";
import { ROOT_STATE, RootState } from "../reducers/root.reducers";

export const getProductList = createSelector(ROOT_STATE, (state: RootState)=>{
    return state.products.products;
})