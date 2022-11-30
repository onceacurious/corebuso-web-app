import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Home, NotFound, Pricing } from "./pages";
import "./app.css";
import "./assets/css/utilities.css";
import "./assets/css/typography.css";
import "./assets/css/card.css";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" index element={<Home />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about-us" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
