import { combineReducers, createFeatureSelector } from "@ngrx/store";
import { CounterState, counterReducer } from "./counter.reducers";
import { ProductState, productReducer } from "./products.reducers";

export type RootState = {
    counter: CounterState
    products: ProductState
}

export function rootReducer(state: any, actions: any){
    return combineReducers({
        counter: counterReducer,
        products: productReducer,
        dummyStateForCombineReducerExample: counterReducer // Need to uncomment, only for testing combine reducers
    })(state, actions);
}


export const ROOT_STATE = createFeatureSelector<RootState>('rootState');