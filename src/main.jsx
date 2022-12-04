import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import "./index.css";

if (process.env.NODE_ENV === "production") {
  disableReactDevTools();
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
