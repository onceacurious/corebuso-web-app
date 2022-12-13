import React, { useState, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { About, Home, NotFound, Pricing, Admin, Auth } from "./pages";

import "./app.scss";
import "../src/assets/scss/main.scss";
import PrivateRoute from "./helpers/PrivateRoute";
import { AuthProvider } from "./helpers/context/AuthContext";
import { InquiryProvider } from "./helpers/context/InquiryContext";
import { UrlProvider } from "./helpers/context/UrlContext";
import SnackbarContext from "./helpers/context/SnackbarContext";

const App = () => {
  const [close, setClose] = useState(false);

  const {scroll} = useContext(SnackbarContext);

  return (
    <div className={scroll ? 'app overflow-hidden' : 'app'}>
      {/* <Snackbar /> */}
      <Router>
        <AuthProvider>
          <InquiryProvider>
            <UrlProvider>
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
            </UrlProvider>
          </InquiryProvider>
        </AuthProvider>
      </Router>
    </div>
  );
};

export default App;
