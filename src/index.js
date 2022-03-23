import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

// initializing  unexpected error loging library for loanerbazar.com
// logger.init();

Sentry.init({
  dsn: "https://7a46aee947b645bdb8b88e0cc536f904@o1107036.ingest.sentry.io/6150831",
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Sentry.ErrorBoundary fallback={"Something went wrong, Please try again"}>
        <App />
      </Sentry.ErrorBoundary>
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
