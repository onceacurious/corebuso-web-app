import React from "react";
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import { About, Home, NotFound, Pricing, Admin, Auth } from "./pages";
import "./app.css";
import "./assets/css/utilities.css";
import "./assets/css/typography.css";
import "./assets/css/card.css";
import { AdminPricing, Inquiry } from "./components";

const router = createBrowserRouter([
  {
    path:"admin/",
    element: <Admin/>,
    children : [
      {
        path: "/admin/",
        element: <Inquiry/>,
      },
      {
        path: "/admin/pricing",
        element: <AdminPricing/>
      }
    ]
  },
  {
    path: '/',
    element: <Home/>,
  errorElement: <NotFound/>,

  },
  {
    path: '/pricing',
    element: <Pricing/>,
  },{
  },


])

const App = () => {

  return (
    <div className="app">
      
      <RouterProvider router={router} />
      {/* <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} index />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/auth/*" element={<Auth />} />
          <Route path="*" errorElement={<NotFound/>} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
};

export default App;
