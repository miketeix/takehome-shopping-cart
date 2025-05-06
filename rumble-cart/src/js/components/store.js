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
}