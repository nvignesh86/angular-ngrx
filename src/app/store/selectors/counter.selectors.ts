import { createSelector } from "@ngrx/store";
import { ROOT_STATE, RootState } from "../reducers/root.reducers";

export const getCounter = createSelector(ROOT_STATE, (state: RootState)=>{
    return state.counter.count;
})