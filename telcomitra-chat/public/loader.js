(function () {
  if (window.__TelcoMitraLoaded) return;
  window.__TelcoMitraLoaded = true;

  // Base URL of loader.js
  const baseUrl = new URL(".", document.currentScript.src).href;

  // Create host element
  const host = document.createElement("div");
  host.id = "telcomitra-root";
  document.body.appendChild(host);

  // Create Shadow DOM
  const shadowRoot = host.attachShadow({ mode: "open" });

  // React mount point
  const container = document.createElement("div");
  container.id = "root";
  shadowRoot.appendChild(container);

  // Expose for widget.js
  window.__TELCOMITRA_CONTAINER__ = container;
  window.__TELCOMITRA_SHADOW_ROOT__ = shadowRoot;

  // Load CSS
  const css = document.createElement("link");
  css.rel = "stylesheet";
  css.href = baseUrl + "assets/widget.css";
  shadowRoot.appendChild(css);

  // Load JS
  const script = document.createElement("script");
  script.type = "module";
  script.src = baseUrl + "assets/widget.js";
  document.body.appendChild(script);
})();
