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
