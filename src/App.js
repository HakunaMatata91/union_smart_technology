import React from "react";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import "bootstrap/dist/css/bootstrap.css";
import "./component/Header/Header.scss";
import MainContent from "./component/Pages/MainContent/MainContent";
import Team from "./component/Pages/Team/Team";
import Services from "./component/Pages/Services/Services";
import Career from "./component/Pages/Career/Career";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Portfolio from "./component/Pages/Portfolio/Portfolio";
import Contact from "./component/Pages/Contact/Contact";

function App() {
  return (
    <main className="for_page">
      <Router>
        {/*<Header />*/}
        <div className="pages">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/team" element={<Team />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </main>
  );
}

export default App;
