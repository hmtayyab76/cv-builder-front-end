import React, { useLayoutEffect } from "react";
import "./App.css";
import Header from "./page/Header/Header";
import Page from "./page/Page";
import Footer from "./page/Footer/Footer";
import CVT from "./page/cv-templates/CVT";
import RST from "./page/resume-templates/RST";
import CoverLetter from "./page/cover-letter/CoverLetter";
import { Routes, Route, useLocation } from "react-router-dom";
import CVT1 from "./page/cv-templates/CV-Templates/CVT1";
import CVTDATA from "./page/get-data/CVTDATA";
import SignIn from "./page/SignIn";
import Register from "./page/Register";

function App() {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="App">
      {location.pathname === "/sign-in" ||
      location.pathname === "/register" ? null : (
        <Header />
      )}
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/cv-template" element={<CVT />} />
        <Route path="/resume-template" element={<RST />} />
        <Route path="/cover-letter" element={<CoverLetter />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create-cv-template" element={<CVT1 data={CVTDATA} />} />
      </Routes>
      {location.pathname === "/sign-in" ||
      location.pathname === "/register" ? null : (
        <Footer />
      )}
    </div>
  );
}

export default App;
