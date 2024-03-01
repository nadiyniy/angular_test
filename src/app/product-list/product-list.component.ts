import { Component } from '@angular/core';

import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  completedMessage: string = ''
  completedMessagesID: { [productId: number]: string } = {};

  products = [...products];
  constructor(private cartService: CartService) {}

  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {
    window.alert('You will be notified when the product goes on sale')
  }

  buy(product: Product){
    this.cartService.addToCart(product);
    this.completedMessage = `${product.name} added to the cart`;
    this.completedMessagesID[product.id] = `${product.name} added to the cart with ID`
    setTimeout(() => {
      this.completedMessage = '';
      this.completedMessagesID[product.id] = '';
    }, 3000);
  }
}
