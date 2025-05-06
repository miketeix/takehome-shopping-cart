import { formatCurrency } from "../utils/currency";

export function createProductCard(product) {
    return `
      <div class="bg-white text-black rounded-xl p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200" data-product-id="${product.id}">
        <h3 class="text-xl font-medium mb-1">${product.name}</h3>
        <div class="text-xl font-medium mb-2">${formatCurrency(product.price)}</div>
        <div class="text-gray-500 text-sm mb-2">${product.stock} in stock</div>
        ${product.coupons && product.coupons.includes('B2GO') 
          ? '<div class="inline-block bg-success/10 text-success text-xs font-medium px-2 py-1 rounded mb-2">Buy 2 Get 1 Free</div>' 
          : ''}
        <div class="flex justify-between items-center mt-4">
          <div class="flex items-center gap-2">
            <button class="quantity-decrease w-7 h-7 flex items-center justify-center bg-primary text-white rounded-md text-lg">-</button>
            <span class="quantity-value w-8 text-center font-medium">1</span>
            <button class="quantity-increase w-7 h-7 flex items-center justify-center bg-primary text-white rounded-md text-lg">+</button>
          </div>
          <button class="add-to-cart bg-primary text-white px-4 py-2 rounded-md font-medium hover:bg-primary-light transition-colors">Add to Cart</button>
        </div>
      </div>
    `;
  }