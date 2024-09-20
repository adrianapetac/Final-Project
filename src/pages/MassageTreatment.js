
import React from 'react';
import { Card, Container } from 'react-bootstrap';
import './MassageTreatment.css'; 

export default function MassageTreatment() {
  const treatments = [
    {
      name: 'Traditional Massage',
      duration: '50 minutes',
      description: 'A full-body massage focusing on relaxing tense muscles and relieving stress.',
      price: '€98.00'
    },
    {
      name: 'Anti-Stress Massage',
      duration: '60 minutes',
      description: 'A specialized massage that targets stress points in the body, providing relief and relaxation.',
      price: '€108.00'
    },
    {
      name: 'Energy Massage',
      duration: '50 minutes',
      description: 'A revitalizing massage designed to boost energy levels and rejuvenate the body.',
      price: '€98.00'
    },
    {
      name: 'Aromasoul Massage',
      duration: '25 minutes',
      description: 'A quick, relaxing massage using aromatic oils to provide a soothing experience.',
      price: '€55.00'
    },
  ];

  return (
    <Container>
      <h1 className="mt-5">Massage Packages</h1>
      <p className="mb-4">
        Enjoy relaxation with our wide range of massage therapies.
      </p>
      {treatments.map((treatment, index) => (
        <Card key={index} className="mb-4">
          <Card.Body>
            <Card.Title>{treatment.name} ({treatment.duration})</Card.Title>
            <Card.Text>
              <strong>Description:</strong> {treatment.description}
            </Card.Text>
            <Card.Text>
              <strong>Price:</strong> {treatment.price}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}
