import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { getStorage, setStorage, removeStorage } from './storage.service';

@Injectable()
export class CartService {

  private cartSource: any;
  public currentStore: any;

  constructor() {
    const countCart = this.countCart();
    this.cartSource = new BehaviorSubject(countCart);
    this.currentStore = this.cartSource.asObservable();
  }

  getCart() {
    const cartStorange = getStorage('ls-cart');
    if (!cartStorange) {
      return [];
    }
    return cartStorange;
  }

  addCart(product: any) {
    const cart = this._addDataCart(product);
    this.cartSource.next(cart);
  }

  removeCart(product: any) {
    const cart = this._removeDataCart(product);
    this.cartSource.next(cart);
  }

  deleteCart(product: any) {
    const cart = this._deleteDataCart(product);
    this.cartSource.next(cart);
  }

  removeAllCart() {
    removeStorage('ls-cart');
    this.cartSource.next(0);
  }

  countCart() {
    let count = 0;
    const cartStorange = getStorage('ls-cart');
    if (!cartStorange) {
      return count;
    }
    cartStorange.forEach(item => {
      count += item.count;
    });
    return count;
  }

  _addDataCart(product) {
    let create = true, count = 0;
    const cart = [], cartStorange = getStorage('ls-cart');
    if (cartStorange) {
      cartStorange.forEach(item => {
        if (item.sku === product.sku && item.id === product.id ) {
          create = false;
          if ( product.count > 0 ) {
            if (product.count === item.count) {
              item.count++;
            } else {
              item.count = product.count;
            }
          }
        }
        count += item.count;
        cart.push(item);
      });
      if (create) {
        product.count = product.count > 0 ? product.count : 1;
        count += product.count;
        cart.push(product);
      }
    } else {
      product.count = 1;
      cart.push(product);
      count = 1;
    }
    setStorage('ls-cart', cart);
    return count;
  }

  _removeDataCart(product) {
    let count = 0;
    const cart = [], cartStorange = getStorage('ls-cart');
    if (cartStorange) {
      cartStorange.forEach(item => {
        if (item.sku === product.sku && item.id === product.id ) {
          item.count--;
        }
        if (item.count > 0 ) {
          count += item.count;
          cart.push(item);
        }
      });
      setStorage('ls-cart', cart);
      return count;
    }
  }

  _deleteDataCart(product) {
    let count = 0;
    const cart = [], cartStorange = getStorage('ls-cart');
    if (cartStorange) {
      cartStorange.forEach(item => {
        if (item.sku !== product.sku && item.id !== product.id ) {
          count += item.count;
          cart.push(item);
        }
      });
      setStorage('ls-cart', cart);
      return count;
    }
  }

}
