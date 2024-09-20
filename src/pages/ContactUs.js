import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './ContactUs.css';
const handleFormSubmit = (e) => {
  e.preventDefault();
  const formData = {
    name: e.target.name.value,
    email: e.target.email.value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
};


const savedFormData = JSON.parse(localStorage.getItem('formData'));
console.log(savedFormData);

export default function ContactUs() {
  return (
    <div>
   
      <div className="hero-container">
        <img src={`${process.env.PUBLIC_URL}/assets/contact-us-hero.jpg`} className="hero-image" alt="Contact Us" />
        <div className="hero-text">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you! Please fill out the form below to get in touch with us.</p>
        </div>
      </div>

  
      <Container className="contact-form-section mt-5">
        <h2>Get in Touch</h2>
        <Row>
          <Col md={6}>
            <Form>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter your message" required />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>

          {/* Contact Information */}
          <Col md={6}>
            <div className="contact-info">
              <h4>Contact Information</h4>
              <p><strong>Address:</strong> 123 Wellness Street, City, Country</p>
              <p><strong>Phone:</strong> +123 456 789</p>
              <p><strong>Email:</strong> contact@qc-terme.com</p>
              <p><strong>Opening Hours:</strong> Mon - Sun: 8:00 AM - 10:00 PM</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
