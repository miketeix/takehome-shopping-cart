import { renderHeader } from "./header";

export function renderStore() {
    const app = document.getElementById('app');

    const header = renderHeader();
    const container = document.createElement('div');
    container.className = 'grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8';

    

    app.appendChild(header);
    app.appendChild(container);
}