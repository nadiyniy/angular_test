import { Injectable } from '@angular/core'
import { Product } from './products'
import { HttpClient } from '@angular/common/http'

@Injectable({
	providedIn: 'root',
})
export class CartService {
	items: Product[] = []
	constructor(private http: HttpClient) {}
	addToCart(product: Product) {
		return this.items.push(product)
	}
	getItems() {
		return this.items
	}
	clearCart() {
		this.items = []
		return this.items
	}
	getShippingPrice() {
		return this.http.get<{ type: string; price: number }[]>('/assets/shipping.json')
	}
	removeFromCart(productID: number): void {
		const index = this.items.findIndex(item => item.id === productID)
		if (index !== -1) {
			this.items.splice(index, 1)
		}
	}
}
