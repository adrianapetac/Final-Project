
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div>
 
      <Container fluid className="hero-container text-center py-5">
        <h1>QC Terme</h1>
        <p>Welcome to the best wellness experience!</p>
      </Container>

      <Container className="my-5">
    
        <h2 className="mb-4 text-center">Our Services</h2>
        <Row className="d-flex justify-content-center mb-5">
          <Col md={6} lg={4} className="mb-4">
            <Link to="/services/wellness" className="image-card-link">
              <div className="image-card">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/wellness.jpg`}
                  alt="Wellness"
                  className="image-card-img"
                />
                <div className="image-card-text">
                  <h3>Wellness Path</h3>
                </div>
              </div>
            </Link>
          </Col>
          <Col md={6} lg={4} className="mb-4">
            <Link to="/services/massage" className="image-card-link">
              <div className="image-card">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/massage.jpg`}
                  alt="Massage"
                  className="image-card-img"
                />
                <div className="image-card-text">
                  <h3>Massage Treatments</h3>
                </div>
              </div>
            </Link>
          </Col>
        </Row>

       
        <h2 className="mb-4 text-center">Our Locations</h2>
        <Row className="d-flex justify-content-center">
          <Col md={6} lg={4} className="mb-4">
            <Link to="/locations/rome" className="image-card-link">
              <div className="image-card">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/rome.jpg`}
                  alt="Rome"
                  className="image-card-img"
                />
                <div className="image-card-text">
                  <h3>Rome</h3>
                </div>
              </div>
            </Link>
          </Col>
          <Col md={6} lg={4} className="mb-4">
            <Link to="/locations/london" className="image-card-link">
              <div className="image-card">
                <img
                  src={`${process.env.PUBLIC_URL}/assets/london.jpg`}
                  alt="London"
                  className="image-card-img"
                />
                <div className="image-card-text">
                  <h3>London</h3>
                </div>
              </div>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
