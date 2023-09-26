import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home";
import HowToUse from "./Pages/How";
import About from "./Pages/About";
import DrawerAppBar from "./Components/Navbar";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <DrawerAppBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/how" element={<HowToUse />} />
      </Routes>
    </BrowserRouter>
  );
}
