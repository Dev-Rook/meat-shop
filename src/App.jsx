import React, { useState, useEffect } from "react";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import "./App.css";

// import Sidebar from "./Components/_Sidebar/Sidebar";
// import Nav from "./Components/_Nav/Nav";

import Products from "./Components/Products/Products";
import ProductDetails from "./Components/Products/ProductDetails";

import Landing from "./Views/_Landing/Landing";
import PoultryPage from "./Views/Poultry/PoultryPage";
import BeefPage from "./Views/Beef/BeefPage";
import MuttonPage from "./Views/Mutton/MuttonPage";
import PorkPage from "./Views/Pork/PorkPage";

function App() {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Sidebar />
        <Nav /> */}

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="PoultryPage" element={<PoultryPage />} />
          <Route path="BeefPage" element={<BeefPage />} />
          <Route path="PorkPage" element={<PorkPage />} />
          <Route path="MuttonPage" element={<MuttonPage />} />

          <Route path="Products" element={<Products />} />
          <Route path="Products/:ProductId" element={<ProductDetails />} />
        </Routes>
        <img
          onClick={scrollUp}
          src={require("./Assets/Icons/Scroll-Up.png")}
          alt=""
          className={
            backToTop ? "Back-To-Top Show-back-To-Top-Button" : "Back-To-Top"
          }
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
