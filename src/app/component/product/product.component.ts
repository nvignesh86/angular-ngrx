
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getProducts } from 'src/app/store/actions/products.actions';
import { getProductList } from 'src/app/store/selectors/products.selectors';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  products: any = [];

  constructor(private store: Store){
    this.store.select(getProductList).subscribe((products)=>{
      if(products && products.products){
        this.products = products?.products;
      }
      console.log(products)
    })

  }

  getProducts(){
    this.store.dispatch(getProducts({productName:"test"}));
  }
}
