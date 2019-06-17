import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CartService } from '../../shared';
import { PRODUCTS } from './../../shared/constants/products.constant';

@Component({
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public dataCart: Array<any> = [];
  public countCart: Number = 0;
  public products: Array<any>;
  public product: any;

  constructor(
    public route: ActivatedRoute,
    private router: Router,
    private cart: CartService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    this.cart.currentStore.subscribe(data => this.countCart = data );

    this.products = PRODUCTS;

    this.product = this.products.filter(item => item.id === Number(id))[0];

  }

  addCart() {
    this.cart.addCart(this.product);
  }


  bayProduct() {
    this.cart.addCart(this.product);
    this.router.navigate(['/', 'store', 'cart']);
  }
}
