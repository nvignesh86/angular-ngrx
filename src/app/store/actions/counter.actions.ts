import { createAction, props } from "@ngrx/store";

const increment = createAction("[Counter Component] Increment Action");
const decrement = createAction("[Counter Component] decrement Action");
const reset = createAction("[Counter Component] reset Action");

const incrementByInput = createAction("[Counter Component] Increment By Input Action", props<{value: number}>());


export {increment, decrement, reset, incrementByInput}