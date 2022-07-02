import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.js";
import AppPage from "./components/AppPageSite.js";
import SearchPage from "./components/SearchPageSite.js";
function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<AppPage />} />
        </Routes>
        <Routes>
          <Route path="/search/:searchTerm" element={<SearchPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
