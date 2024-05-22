import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductmoduleRoutingModule } from './productmodule-routing.module';
import { CategoryComponent } from './category/category.component';
import { ProductsComponent } from './products/products.component';
import { ProductbyidComponent } from './productbyid/productbyid.component';


@NgModule({
  declarations: [
    CategoryComponent,
    ProductsComponent,
    ProductbyidComponent
  ],
  imports: [
    CommonModule,
    ProductmoduleRoutingModule
  ]
})
export class ProductmoduleModule { }
