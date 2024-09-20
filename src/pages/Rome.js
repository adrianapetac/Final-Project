// src/pages/Rome.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Rome.css';

export default function Rome() {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-container text-center">
        <img
          src={`${process.env.PUBLIC_URL}/assets/rome.jpg`}
          alt="Rome"
          className="hero-image"
        />
        <div className="hero-text">
          <h1>Rome Wellness Center</h1>
          <p>Experience wellness and relaxation in the heart of Rome</p>
        </div>
      </div>

      {/* Content Section */}
      <Container className="my-5">
        <Row className="mb-5">
          <Col>
            <h2>About Our Rome Center</h2>
            <p>
              Our Rome Wellness Center offers an unforgettable experience of
              relaxation and wellness. Nestled in the historic heart of the
              city, the center provides a variety of services, including thermal
              baths, massage treatments, and wellness paths. Whether you’re
              looking to unwind after a busy day of sightseeing or indulge in a
              day of pure bliss, our Rome center has everything you need.
            </p>
          </Col>
        </Row>

        {/* Details Section */}
        <Row className="mb-5">
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Opening Hours</Card.Title>
                <Card.Text>
                  <strong>Monday - Sunday:</strong> 8:00 AM - 10:00 PM
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Contact Information</Card.Title>
                <Card.Text>
                  <strong>Address:</strong> Via del Corso, 00187 Rome, Italy <br />
                  <strong>Phone:</strong> +39 06 1234 5678 <br />
                  <strong>Email:</strong> rome@qcterme.com
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
