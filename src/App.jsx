import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { About, Home, NotFound, Pricing, Admin, Auth } from "./pages";
import { CBSProvider } from "./helpers/context/SnackbarContext";

import "./app.css";
import "./assets/css/utilities.css";
import "./assets/css/typography.css";
import "./assets/css/card.css";
import Snackbar from "./components/snackbar/Snackbar";

const App = () => {
  const [close, setClose] = useState(false);
  return (
    <CBSProvider>
      <div className="app">
        {/* <Snackbar /> */}
        <Router>
          <Routes>
            <Route
              path="/"
              element={<Home close={close} setClose={setClose} />}
            />
            <Route
              path="/pricing"
              element={<Pricing close={close} setClose={setClose} />}
            />
            <Route path="/about-us" element={<About />} />
            <Route path="/admin/*" element={<Admin />} />
            <Route path="/auth/*" element={<Auth />} />
            <Route path="*" element={<Navigate replace to="/you-are-lost" />} />
            <Route path="/you-are-lost" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </CBSProvider>
  );
};

export default App;
