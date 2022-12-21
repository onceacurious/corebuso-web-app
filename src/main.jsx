import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

import "../src/assets/animate.css";
import App from "./App";
import "./index.css";
import { MainProvider } from "./helpers/context/MainContext";

const queryClient = new QueryClient();

if (process.env.NODE_ENV === "production") {
  disableReactDevTools();
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <MainProvider>
        <App />
      </MainProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
