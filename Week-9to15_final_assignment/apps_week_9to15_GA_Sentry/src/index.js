import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Sentry from "@sentry/react"; //Sentry For react
import { Provider } from "react-redux";
import store from "./Store";

// process.env.NODE_ENV === "production" && // when we have production build of react application i will triggger Sentry
Sentry.init({
  dsn: "https://1a33112f396c4aa6891c3625b42b7c29@o4505049635618816.ingest.sentry.io/4505066222321664",
  integrations: [new Sentry.BrowserTracing()],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
  });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); // can see report in sentry
