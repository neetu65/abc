import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ProductsComponent } from './products/products.component';
import { ProductbyidComponent } from './productbyid/productbyid.component';

const routes: Routes = [
  {path:'', component:CategoryComponent},
  {path:'category', component:CategoryComponent},
  {path:'products/:CategoryId', component:ProductsComponent},
  {path:'productbyid', component:ProductbyidComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductmoduleRoutingModule { }
