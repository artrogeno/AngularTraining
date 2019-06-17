import { Component, OnInit } from '@angular/core';
import { CartService } from '../../shared';

@Component({
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public products: Array<any>;
  public countCart: Number;
  public subTotal: Number = 0;
  public vat: Number;

  constructor(private cart: CartService) {
    this.cart.currentStore.subscribe(data => {
      this.countCart = data;
      this.vat = 12.5;
      this.getProductsCard();
    });
  }

  ngOnInit() {
    this.getProductsCard();
  }

  addProductCart(product) {
    this.cart.addCart(product);
    this.getProductsCard();
  }

  removeProductCart(product) {
    this.cart.removeCart(product);
    this.getProductsCard();
  }

  getProductsCard() {
    this.products = this.cart.getCart();
    if (this.products.length > 0) {
      let subTotal = 0;
      this.products.forEach(item => {
        subTotal += item.price * item.count;
      });
      this.subTotal = subTotal;
    }
  }
}
