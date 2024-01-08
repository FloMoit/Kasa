import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home.tsx";
import Header from "./components/header/header.tsx";
import Footer from "./components/footer/footer.tsx";

import "./style/main.scss";

/*async function getData() {
  const res = await fetch("http://localhost:3000/");
  const data: object[] = await res.json();
  console.log(data);
}*/

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
