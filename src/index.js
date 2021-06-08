import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import App from "./App";
import ErrorMessage from "./components/ErrorMessage";
Sentry.init({
  dsn:
    "https://cd887cc9e360476f849ca07860179914@o816150.ingest.sentry.io/5807298",
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 0.1
});
const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Sentry.ErrorBoundary
      fallback={<ErrorMessage title="An exception has occured" />}
    >
      <App />
    </Sentry.ErrorBoundary>
  </React.StrictMode>,
  rootElement
);
