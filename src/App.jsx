import React, { useState, useEffect } from "react";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Sidebar from "./Components/_Sidebar/Sidebar";
import Nav from "./Components/_Nav/Nav";

import Landing from "./Views/_Landing/Landing";
import Products from "./Components/Products/Products";
import ProductDetails from "./Components/Products/ProductDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <Nav />

        <Routes>
          <Route path="/" element={<Landing />} />

          <Route path="Products" element={<Products />} />
          <Route path="Products/:ProductId" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
