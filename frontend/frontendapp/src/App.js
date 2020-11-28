import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Auth from "./components/auth";
import Home from "./components/home";
import Driver from "./components/driver";
import { CookiesProvider } from "react-cookie";
import AdminHome from "./components/adminHome";
import AdminDriver from "./components/adminDriver";
import AdminUser from "./components/adminUser";
import AdminGenerateList from "./components/adminGenerateList";
import AdminAssignedList from "./components/adminAssignedList";
import BrandHeader from './components/brandHeader';

function App() {
  return (
    <div className="App">
      <CookiesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="home" element={<Home />} />
            <Route path="driver" element={<Driver />} />
            <Route path="adminHome" element={<AdminHome />} />
            <Route path="adminDriver" element={<AdminDriver />} />
            <Route path="adminUser" element={<AdminUser />} />
            <Route path="adminGenerateList" element={<AdminGenerateList />} />
            <Route path="adminAssignedList" element={<AdminAssignedList />} />
            <Route path="brandHeader" element={<BrandHeader />} />
          </Routes>
        </BrowserRouter>
      </CookiesProvider>
    </div>
  );
}

export default App;
