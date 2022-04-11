import React from 'react';
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { HashRouter } from "react-router-dom"


function App() {
  return (
      <HashRouter>
          <main className="for_page">
              <Header />
              <div className="pages">

              </div>
              <Footer />
          </main>
      </HashRouter>
  );
}

export default App;
