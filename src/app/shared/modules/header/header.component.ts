import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public dataCart: Number;
  public hasProducts: Boolean;
  public products: Array<any> = [];

  constructor( public router: Router, private cart: CartService ) {
    this.hasProducts = false;
    this.openCart();
  }

  ngOnInit() {
    this.cart.currentStore.subscribe(data => this.dataCart = data );
  }

  openCart() {
    const products = this.cart.getCart();
    if (products) {
      this.products = products;
      this._hasProducts();
    }
  }

  addProductCart(product) {
    this.cart.addCart(product);
    this.products = this.cart.getCart();
  }

  removeProductCart(product) {
    this.cart.removeCart(product);
    this.products = this.cart.getCart();
    this._hasProducts();
  }

  deleteProductCart(product) {
    this.cart.deleteCart(product);
    this.products = this.cart.getCart();
    this._hasProducts();
  }

  removeAllProductsCart() {
    if (this.products.length > 0 ) {
      this.cart.removeAllCart();
      this.products = this.cart.getCart();
      this._hasProducts();
    }
  }

  _hasProducts() {
    if ( this.products && this.products.length > 0 ) {
      this.hasProducts = true;
    } else {
      this.hasProducts = false;
    }
  }
}
