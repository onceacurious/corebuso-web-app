import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About, Home, NotFound, Pricing, Admin, Auth } from "./pages";
import "./app.css";
import "./assets/css/utilities.css";
import "./assets/css/typography.css";
import "./assets/css/card.css";
import { Inquiry } from "./components";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<Home />}
            errorElement={<NotFound />}
            index
          />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/auth/*" element={<Auth />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
