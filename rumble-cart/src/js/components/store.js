import { renderHeader } from "./header";
import {createProductCard} from "./productCard";
import { products } from "../data/products";

export function renderStore() {
    const app = document.getElementById('app');

    const header = renderHeader();
    const container = document.createElement('div');
    container.className = 'grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8';


    const productsSection = document.createElement('div');
    productsSection.innerHTML = `
        <h2 class="text-2xl font-semibold mb-4">Products</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${products.map(product => createProductCard(product)).join('')}
        </div>
    `;
    container.appendChild(productsSection);

    app.appendChild(header);
    app.appendChild(container);

    setupProductListeners()
}

function setupProductListeners() {
    const productCards = document.querySelectorAll('[data-product-id]');
    
    productCards.forEach(card => {
      const productId = card.dataset.productId;
      const product = products.find(p => p.id === parseInt(productId));
      
      const addButton = card.querySelector('.add-to-cart');
      const decreaseButton = card.querySelector('.quantity-decrease');
      const increaseButton = card.querySelector('.quantity-increase');
      const quantityValue = card.querySelector('.quantity-value');
      
      let quantity = quantityValue.innerHTML || 1;
      
      addButton.addEventListener('click', () => {
        const success = cartService.addItem(product, quantity);
        
        if (success) {
          quantity = 1;
          quantityValue.textContent = quantity;
          
          addButton.textContent = 'Added!';
          addButton.classList.add('added-to-cart');
          
          setTimeout(() => {
            addButton.textContent = 'Add to Cart';
            addButton.classList.remove('added-to-cart');
          }, 1000);
        }
      });
      
      decreaseButton.addEventListener('click', () => {
        if (quantity > 1) {
          quantity--;
          quantityValue.textContent = quantity;
        }
      });
      
      increaseButton.addEventListener('click', () => {
        if (quantity < product.stock) {
          quantity++;
          quantityValue.textContent = quantity;
        } else {
          alert(`Sorry, only ${product.stock} ${product.name} available.`);
        }
      });
    });
  }