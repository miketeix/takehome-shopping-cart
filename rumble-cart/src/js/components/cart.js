import { cartService } from "../services/cart-service";
import {formatCurrency} from "../utils/currency"

export function renderCart() {
    const items = cartService.getItems();
    if (items.length === 0) {
      return `
        <div class="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
          <h2 class="text-2xl font-semibold">Your Cart</h2>
        </div>
        <div class="text-center py-8 text-gray-500">
          <p class="mb-2">Your cart is empty</p>
          <p>Add some products to get started</p>
        </div>
      `;
    }
    
    return `
      <div class="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
        <h2 class="text-2xl font-semibold">Your Cart</h2>
        <button class="clear-cart border border-primary text-primary px-4 py-2 rounded-md hover:bg-primary/5 transition-colors">Clear</button>
      </div>
      <div class="space-y-4">
        ${items.map(item => `
          <div class="flex justify-between items-center py-4 border-b border-gray-200" data-product-id="${item.product.id}">
            <div class="flex-1">
              <div class="font-medium">${item.product.name}</div>
              <div class="text-sm text-gray-600">${formatCurrency(item.product.price)} × ${item.quantity}</div>
              ${totals.appliedCoupons.find(coupon => coupon.productId === item.product.id) 
                ? `<div class="text-success text-sm mt-1">✓ B2GO Applied</div>` 
                : ''}
            </div>
            <div class="flex items-center gap-2">
              <div class="flex items-center gap-2">
                <button class="cart-decrease w-6 h-6 flex items-center justify-center bg-primary text-white rounded-md">-</button>
                <span class="w-6 text-center">${item.quantity}</span>
                <button class="cart-increase w-6 h-6 flex items-center justify-center bg-primary text-white rounded-md">+</button>
              </div>
              <button class="cart-item-remove w-6 h-6 flex items-center justify-center text-error hover:bg-error/10 rounded-md transition-colors">×</button>
            </div>
          </div>
        `).join('')}
      </div>
      <div class="mt-6 pt-4 space-y-2">
        <div class="flex justify-between">
          <span>Subtotal:</span>
          <span>${formatCurrency(totals.subtotal)}</span>
        </div>
        <div class="flex justify-between">
          <span>Savings:</span>
          <span class="text-success">-${formatCurrency(totals.savings)}</span>
        </div>
        <div class="flex justify-between text-lg font-semibold pt-4 border-t border-gray-200">
          <span>Total:</span>
          <span>${formatCurrency(totals.finalTotal)}</span>
        </div>
      </div>
      <button class="checkout-button w-full bg-primary text-white py-4 rounded-md font-semibold mt-6 hover:bg-primary-light transition-colors">
        Proceed to Checkout
      </button>
    `;
  }