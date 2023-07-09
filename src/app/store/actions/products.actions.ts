import { createAction, props } from "@ngrx/store";

export const getProducts = createAction("[Product Component] get Products Action", props<{productName: string}>());
export const addProducts = createAction("[Product Component] get Products Action", props<{products:any}>())