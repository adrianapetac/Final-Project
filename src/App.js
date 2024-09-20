
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Locations from './pages/Locations';
import Services from './pages/Services';
import Reservation from './pages/Reservation';
import ContactUs from './pages/ContactUs';
import WellnessPath from './pages/WellnessPath';
import MassageTreatment from './pages/MassageTreatment';
import Rome from './pages/Rome';
import London from './pages/London';
import './App.css'; 
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);

  return (
    <Router>
      <div className="app">
      <Header cartItems={cartItems} setCartItems={setCartItems} favorites={favorites} />
        <div className="flex">
          <Sidebar />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/locations" element={<Locations favorites={favorites} setFavorites={setFavorites} />} />
              <Route path="/rome" element={<Rome />} />
              <Route path="/london" element={<London />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/wellness" element={<WellnessPath />} />
              <Route path="/services/massage" element={<MassageTreatment />} />
              <Route path="/reservation" element={<Reservation cartItems={cartItems} setCartItems={setCartItems} />} />
              <Route path="/contact" element={<ContactUs />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
