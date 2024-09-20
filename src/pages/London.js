// src/pages/London.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './London.css';

export default function London() {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero-container text-center">
        <img
          src={`${process.env.PUBLIC_URL}/assets/london.jpg`}
          alt="London"
          className="hero-image"
        />
        <div className="hero-text">
          <h1>London Wellness Center</h1>
          <p>Experience wellness and relaxation in the heart of London</p>
        </div>
      </div>

      <Container className="my-5">
        <Row className="mb-5">
          <Col>
            <h2>About Our London Center</h2>
            <p>
              Our London Wellness Center is designed to provide a luxurious and relaxing environment
              amidst the hustle and bustle of the city. Enjoy a range of wellness services including
              thermal baths, personalized massage treatments, and a serene wellness path. Whether you
              want to escape for a quick break or spend a full day, the London center offers an ideal
              retreat.
            </p>
          </Col>
        </Row>

  
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
                  <strong>Address:</strong> 123 Wellness Street, London, UK <br />
                  <strong>Phone:</strong> +44 20 1234 5678 <br />
                  <strong>Email:</strong> london@qcterme.com
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
