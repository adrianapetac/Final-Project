// src/pages/WellnessPath.js
import React from 'react';
import { Card, Container } from 'react-bootstrap';
import './WellnessPath.css'; // Optional CSS for additional styling

export default function WellnessPath() {
  const packages = [
    { name: 'Morning Wellness', time: '08:00 - 14:00', price: '€50.00' },
    { name: 'Afternoon Wellness', time: '14:00 - 18:00', price: '€50.00' },
    { name: 'Evening Wellness', time: '16:00 - 22:00', price: '€60.00' },
    { name: 'All-Day Wellness', time: 'Entire Day', price: '€70.00' },
  ];

  return (
    <Container>
      <h1 className="mt-5">Wellness Path Packages</h1>
      <p className="mb-4">
        Experience relaxation like never before with our wellness packages.
      </p>
      {packages.map((pkg, index) => (
        <Card key={index} className="mb-4">
          <Card.Body>
            <Card.Title>{pkg.name} ({pkg.time})</Card.Title>
            <Card.Text>Price: {pkg.price}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}
