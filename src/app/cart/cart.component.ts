import { Component } from '@angular/core'
import { CartService } from '../cart.service'
import { FormBuilder } from '@angular/forms'
import { Product } from '../products'

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrl: './cart.component.css',
})
export class CartComponent {
	items = this.cartService.getItems()
	checkoutForm = this.formBuilder.group({ name: '', address: '' })
	orderSubmitted = false
	name: string | undefined | null = null
	address: string | undefined | null = null
	orderItems: Product[] = []

	constructor(private cartService: CartService, private formBuilder: FormBuilder) {}

	onSubmit(): void {
		this.orderItems = this.items
		this.items = this.cartService.clearCart()
		this.orderSubmitted = true
		this.name = this.checkoutForm.value.name
		this.address = this.checkoutForm.value.address
		this.checkoutForm.reset()
	}

	onDelete(productId: number): void {
		this.cartService.removeFromCart(productId)
	}
}
