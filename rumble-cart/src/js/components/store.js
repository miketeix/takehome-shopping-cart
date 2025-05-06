export function renderStore() {
    const app = document.getElementById('app');

    const header = document.createElement('header');
    header.className = 'flex justify-between items-center py-6 mb-8 border-b border-gray-200';
    header.innerHTML = `
    <div>
      <h1 class="text-4xl font-semibold mb-2">Shopping Cart</h1>
      <p class="text-gray-600">Select your favorite products</p>
    </div>
  `;

    app.appendChild(header);
}