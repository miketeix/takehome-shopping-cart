import { cartService } from "../services/cart-service";

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
  }