import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { About, Home, NotFound, Pricing, Admin, Auth } from "./pages";

import "./app.scss";
import "../src/assets/scss/main.scss";
import Snackbar from "./components/snackbar/Snackbar";
import PrivateRoute from "./helpers/PrivateRoute";
import { AuthProvider } from "./helpers/context/AuthContext";
import { InquiryProvider } from "./helpers/context/InquiryContext";

const App = () => {
  const [close, setClose] = useState(false);
  const authenticated = false;

  return (
    <div className="app">
      {/* <Snackbar /> */}
      <Router>
        <AuthProvider>
          <InquiryProvider>
            <Routes>
              <Route
                index
                path="/"
                element={<Home close={close} setClose={setClose} />}
              />
              <Route
                path="/pricing"
                element={<Pricing close={close} setClose={setClose} />}
              />
              <Route path="/about-us" element={<About />} />
              <Route
                path="/admin/*"
                element={
                  <PrivateRoute>
                    <Admin />
                  </PrivateRoute>
                }
                exact
                index
              />
              <Route path="/auth/*" element={<Auth />} exact index />
              <Route
                path="*"
                element={<Navigate replace to="/you-are-lost" />}
              />
              <Route path="/you-are-lost" element={<NotFound />} />
            </Routes>
          </InquiryProvider>
        </AuthProvider>
      </Router>
    </div>
  );
};

export default App;
