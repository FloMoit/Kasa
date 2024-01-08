import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home.tsx";
import Header from "./components/header/header.tsx";
import Footer from "./components/footer/footer.tsx";

import "./style/main.scss";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
