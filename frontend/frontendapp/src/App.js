import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Auth from "./components/auth";
import Home from "./components/home";
import Driver from "./components/driver";
import { CookiesProvider } from "react-cookie";
import adminHome from "./components/adminHome";
import adminDriver from "./components/adminDriver";
import adminUser from "./components/adminUser";
import adminGenerateList from "./components/adminGenerateList";

function App() {
  return (
    <div className="App">
      <CookiesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="home" element={<Home />} />
            <Route path="driver" element={<Driver />} />
            <Route path="adminHome" element={<adminHome />} />
            <Route path="adminDriver" element={<adminDriver />} />
            <Route path="adminUser" element={<adminUser />} />
            <Route path="adminGenerateList" element={<adminGenerateList />} />
          </Routes>
        </BrowserRouter>
      </CookiesProvider>
    </div>
  );
}

export default App;
