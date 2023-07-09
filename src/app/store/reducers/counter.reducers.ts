import { createFeatureSelector, createReducer, on } from "@ngrx/store";
import {increment, decrement, reset, incrementByInput} from "./../actions/counter.actions";

const InitialState = {
    count: 0
}

export type CounterState = {
    count: number;
}

export const counterReducer = createReducer<CounterState>(
    InitialState,
    on(increment, (state: CounterState)=>{
        return (
            {
                ...state,
                count: state.count + 1
            }
        )
    }),
    on(incrementByInput, (state: CounterState, {value})=>{
        return (
            {
                ...state,
                count: state.count + value
            }
        )
    }),
    on(decrement, (state: CounterState)=>{
        return(
            {
                ...state,
                count: state.count - 1
            }
        )
    }),
    on(reset, (state: CounterState)=>{
        return (
            {
                ...state,
                count: 0
            }
        )
    })
)