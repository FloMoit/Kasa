import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Product from "./pages/product/product";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

import "./style/main.scss";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productId" element={<Product />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
