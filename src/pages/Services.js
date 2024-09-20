// src/pages/Services.js
import React from 'react';
import { CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Services.css';

export default function Services() {
  const services = [
    { name: 'Wellness Path', img: `${process.env.PUBLIC_URL}/assets/wellness.jpg`, link: '/services/wellness' },
    { name: 'Massage Treatments', img: `${process.env.PUBLIC_URL}/assets/massage.jpg`, link: '/services/massage' },
  ];

  return (
    <div className="page-container">
      <div className="text-center">
        <h2>Our Services</h2>
        <CardGroup className="services-container">
          {services.map((service, idx) => (
            <div key={idx} className="image-card">
              <Link to={service.link}>
                <img src={service.img} alt={service.name} className="image-card-img" />
                <div className="image-card-text">
                  <h3>{service.name}</h3>
                </div>
              </Link>
            </div>
          ))}
        </CardGroup>
      </div>
    </div>
  );
}
