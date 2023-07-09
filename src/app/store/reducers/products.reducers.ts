import { createReducer, on } from "@ngrx/store";
import { addProducts, getProducts } from "../actions/products.actions";

const InitialState = {
    products: []
}

export type ProductState = {
    products: any
}

export const productReducer = createReducer<ProductState>(
    InitialState,
    on(addProducts, (state, {products})=>{
        return({
            ...state,
            products
        })
    })
)