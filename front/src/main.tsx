import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Product from "./pages/product/product";
import About from "./pages/about/about";
import Error404 from "./pages/error404/error404";
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
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
