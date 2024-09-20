
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaHome, FaMapMarkedAlt, FaSpa, FaCalendarAlt, FaEnvelope, FaTimes } from 'react-icons/fa';
import './Sidebar.css';

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const handleMenuClick = () => {
    setOpen(!open);
  };

  return (
    <>
    
      <div className="hamburger-menu" onClick={handleMenuClick}>
        <FaBars />
      

   
      <div className={`sidebar ${open ? 'open' : ''}`}>
      
        <span className="close-btn" onClick={handleMenuClick}>
          <FaTimes />
        </span>

        <ul className="list-unstyled">
          <li>
            <Link to="/">
              <FaHome /> Home
            </Link>
          </li>
          <li>
            <Link to="/locations">
              <FaMapMarkedAlt /> Locations
            </Link>
          </li>
          <li>
            <Link to="/services">
              <FaSpa /> Services
            </Link>
          </li>
          <li>
            <Link to="/reservation">
              <FaCalendarAlt /> Reservation
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <FaEnvelope /> Contact Us
            </Link>
          </li>
        </ul>
      </div>
      </div>
    </>
  );
}
