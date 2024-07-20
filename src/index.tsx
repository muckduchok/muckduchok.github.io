import { createRoot } from "react-dom/client";
import { AppearanceProvider } from "@twa-dev/mark42";
import { BrowserRouter as Router } from "react-router-dom";
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import "./index.scss";
import { App } from "./app";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
<AppearanceProvider>
  <TonConnectUIProvider manifestUrl="https://muckduchok.github.io/tonconnect-manifest.json">
    <Router>
      <App />
    </Router>
  </TonConnectUIProvider>
</AppearanceProvider>);
