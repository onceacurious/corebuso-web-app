import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

import "../src/assets/animate.css";
import App from "./App";
import "./index.css";
import { SnackbarProvider } from "./helpers/context/SnackbarContext";

const queryClient = new QueryClient();

if (process.env.NODE_ENV === "production") {
  disableReactDevTools();
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <SnackbarProvider>
        <App />
      </SnackbarProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
