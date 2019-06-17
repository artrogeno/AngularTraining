import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store.component';

const routes: Routes = [
  {
    path: '', component: StoreComponent,
    children: [
      { path: '', redirectTo: 'products' },
      { path: 'products', loadChildren: './products/products.module#ProductsModule' },
      { path: 'product', loadChildren: './product/product.module#ProductModule' },
      { path: 'cart', loadChildren: './cart/cart.module#CartModule' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
