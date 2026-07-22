import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

export function mountWidget(container) {
  createRoot(container).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}
export function createWidgetContainer() {
  const existing = document.getElementById("telcomitra-root");
  if (existing) return existing;

  const container = document.createElement("div");
  container.id = "telcomitra-root";

  document.body.appendChild(container);

  return container;
}
