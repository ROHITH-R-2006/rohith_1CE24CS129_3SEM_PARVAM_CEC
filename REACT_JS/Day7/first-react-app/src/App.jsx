import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Welcome from "./pages/Welcome";
import ThankYou from "./pages/ThankYou";
import  AboutUs from "./pages/AboutUs";
// import AboutUs from "./pages/AboutUs";
function App() {
  return (
    <Router>
      {/* router tag-to navigate from one page to another page .It takes help of react-router-dom.router-routes-route */}
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;