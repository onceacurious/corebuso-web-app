import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Home, NotFound, Pricing, Admin, Auth } from "./pages";
import "./app.css";
import "./assets/css/utilities.css";
import "./assets/css/typography.css";
import "./assets/css/card.css";


const App = () => {

  return (
    <div className="app">

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}  errorElement={<NotFound/>} index />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/auth/*" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
