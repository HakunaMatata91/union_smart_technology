import React from "react";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import "bootstrap/dist/css/bootstrap.css";
import "./component/Header/Header.scss";
import Main from "./component/Pages/Main/Main";
import About from "./component/Pages/About/About";
import Offers from "./component/Pages/Offers/Offers";
import Portfolio from "./component/Pages/Portfolio/Portfolio";
import Benefits from "./component/Pages/Benefits/Benefits";
import Client from "./component/Pages/Client/Client";
import Contact from "./component/Pages/Contact/Contact";
import FAQ from "./component/Pages/Faq/Faq";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <main className="for_page">
        <Header />
        <div className="pages">
          <Routes>
            <Route exact path="/" element={<Main />} />
          </Routes>
          <About />
          <Offers />
          <Portfolio />
          <Benefits />
          <Client />
          <Contact />
          <FAQ />
        </div>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
