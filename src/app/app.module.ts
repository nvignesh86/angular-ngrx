import { ErrorHandler, NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { CounterComponent } from './component/counter/counter.component';
import { counterReducer } from './store/reducers/counter.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { rootReducer } from './store/reducers/root.reducers';
import { EffectsModule } from '@ngrx/effects';
import { ProductComponent } from './component/product/product.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ProductEffects } from './store/effects/products.effects';
import { ProductService } from './service/product.service';
import { RequestInterceptors } from './globalcore/RequestInterceptors';
import { MyErrorHandler } from './globalcore/MyErrorHandler';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({rootState: rootReducer}, {}),
    StoreDevtoolsModule.instrument({  logOnly: !isDevMode() }),
    EffectsModule.forRoot([ProductEffects]),
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: RequestInterceptors, multi: true
  },
  {
    provide: ErrorHandler, useClass: MyErrorHandler
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
