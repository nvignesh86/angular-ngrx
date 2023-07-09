import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductService } from "src/app/service/product.service";
import { addProducts, getProducts } from "../actions/products.actions";
import { EMPTY, catchError, exhaustMap, map, withLatestFrom } from "rxjs";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { getCounter } from "../selectors/counter.selectors";

@Injectable()
export class ProductEffects{
   
    loadProducts$ = createEffect(()=>(
        this.action$.pipe(
            ofType(getProducts),
            withLatestFrom(
                this.store.select(getCounter)
            ),
            exhaustMap(([{productName}, counter])=> this.productService.getProducts(productName, counter)
                .pipe(
                    map(products => (addProducts({products})),
                    catchError(() => EMPTY)
                ))
            )
        ))
    );

    constructor(private action$: Actions,private store: Store, private productService: ProductService){
    }


}