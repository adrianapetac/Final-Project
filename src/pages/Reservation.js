
import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import './Reservation.css';

export default function Reservation({ cartItems, setCartItems }) {
  const [wellnessService, setWellnessService] = useState('');
  const [massageService, setMassageService] = useState('');
  const [guests, setGuests] = useState(1);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('10:00 AM');
  const [totalPrice, setTotalPrice] = useState(0);

  const wellnessPrices = {
    "Morning Wellness (08:00 - 14:00)": 50,
    "Afternoon Wellness (14:00 - 18:00)": 50,
    "Evening Wellness (16:00 - 22:00)": 60,
    "All-Day Wellness": 70,
  };

  const massagePrices = {
    "Traditional Massage (50 minutes)": 98,
    "Anti-Stress Massage (60 minutes)": 108,
    "Energy Massage (50 minutes)": 98,
    "Aromasoul Massage (25 minutes)": 55,
  };


  useEffect(() => {
    let price = 0;

  
    if (wellnessService) {
      price = wellnessPrices[wellnessService] || 0;
    }

    if (massageService && !wellnessService) { 
      price = massagePrices[massageService] || 0;
    }

    
    setTotalPrice(price * guests);
  }, [wellnessService, massageService, guests]);

  const handleAddToCart = () => {
    const selectedService = wellnessService || massageService; 
    if (selectedService && guests > 0 && date) {
      const newReservation = { service: selectedService, guests, date, time, totalPrice };
      setCartItems([...cartItems, newReservation]);
    } else {
      alert('Please complete all fields before adding to cart.');
    }
  };

  return (
    <div className="reservation-form-container">
      <h2 className="text-center mb-4">Make a Reservation</h2>
      
      <Form className="reservation-form">
        <Form.Group className="mb-3">
          <Form.Label>Wellness Path</Form.Label>
          <Form.Select value={wellnessService} onChange={(e) => setWellnessService(e.target.value)}>
            <option value="">Select Wellness Path</option>
            <option value="Morning Wellness (08:00 - 14:00)">Morning Wellness (08:00 - 14:00)</option>
            <option value="Afternoon Wellness (14:00 - 18:00)">Afternoon Wellness (14:00 - 18:00)</option>
            <option value="Evening Wellness (16:00 - 22:00)">Evening Wellness (16:00 - 22:00)</option>
            <option value="All-Day Wellness">All-Day Wellness</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Massage Treatment</Form.Label>
          <Form.Select value={massageService} onChange={(e) => setMassageService(e.target.value)}>
            <option value="">Select Massage Treatment</option>
            <option value="Traditional Massage (50 minutes)">Traditional Massage (50 minutes)</option>
            <option value="Anti-Stress Massage (60 minutes)">Anti-Stress Massage (60 minutes)</option>
            <option value="Energy Massage (50 minutes)">Energy Massage (50 minutes)</option>
            <option value="Aromasoul Massage (25 minutes)">Aromasoul Massage (25 minutes)</option>
          </Form.Select>
        </Form.Group>

        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Guests</Form.Label>
              <Form.Control
                type="number"
                min="1"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>Time</Form.Label>
          <Form.Control
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </Form.Group>

        <h3 className="text-center">Total Price: {totalPrice} €</h3>

        <Button
          variant="primary"
          className="w-100"
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
      </Form>
    </div>
  );
}
