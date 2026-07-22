import { mountWidget } from "./widget";

const container =
  window.__TELCOMITRA_CONTAINER__ || document.getElementById("root");

if (container) {
  mountWidget(container);
}
