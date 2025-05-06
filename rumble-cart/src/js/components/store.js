import { renderHeader } from "./header";

export function renderStore() {
    const app = document.getElementById('app');

    const header = renderHeader();

    app.appendChild(header);
}