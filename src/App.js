import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Home from "./layout/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ConsumerDashboard from "./components/consumers/ConsumerDashboard";
import ConsumerProfile from "./components/consumers/ConsumerProfile";
import FarmerDashboard from "./components/farmers/FarmerDashboard";
import FarmersResources from "./components/farmers/FarmersResources";
import WeatherWidget from "./components/weather/WeatherWidget";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/farmer-dashboard" element={<FarmerDashboard/>} />
        <Route path="/farmers-resources" element={<FarmersResources />} />
        <Route path="/consumer-dashboard" element={<ConsumerDashboard />} />
        <Route path="/consumer-profile" element={<ConsumerProfile />} />
        <Route path="/weather" element={<WeatherWidget />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
