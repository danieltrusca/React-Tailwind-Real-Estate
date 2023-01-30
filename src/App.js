import React from "react";

// import react router dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import pages
import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";

// import components
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="max-w-[1440px] mx-auto bg-white">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
};

export default App;
