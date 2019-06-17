import { Component, OnInit } from '@angular/core';
import { CartService } from '../../shared';
import { PRODUCTS } from './../../shared/constants/products.constant';

@Component({
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public dataCart: Array<any> = [];
  public countCart: Number = 0;
  public products: Array<any>;

  constructor(private cart: CartService) {
  }

  ngOnInit() {
    this.cart.currentStore.subscribe(data => this.countCart = data );

    this.products = PRODUCTS;
  }

  addCart(product) {
    this.cart.addCart(product);
  }
}
