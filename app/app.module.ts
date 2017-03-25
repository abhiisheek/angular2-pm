import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { ProductsListComponent } from './products/products-list.component';
import { ProductFilterPipe } from './products/product-filter.pipe';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductFilterPipe
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
