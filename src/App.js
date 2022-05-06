import React from "react";
import Footer from "./component/Footer/Footer";
import "bootstrap/dist/css/bootstrap.css";
import "./component/Header/Header.scss";
import MainContent from "./component/Pages/MainContent/MainContent";
import Team from "./component/Pages/Team/Team";
import Services from "./component/Pages/Services/Services";
import Career from "./component/Pages/Career/Career";
import {Route,  Routes, HashRouter} from "react-router-dom";
import Portfolio from "./component/Pages/Portfolio/Portfolio";
import Contact from "./component/Pages/Contact/Contact";

function App(props) {
  return (
      <HashRouter >
          <main className="for_page">
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
              <Footer />
          </main>
      </HashRouter>
  );
}

export default App;
