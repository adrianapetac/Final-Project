
import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const saved = localStorage.getItem("favorites");
import { FaHeart, FaRegHeart } from 'react-icons/fa'; 
import './Locations.css'; 

export default function Locations({ favorites, setFavorites }) {
  const locations = [
    { name: 'Rome', img: `${process.env.PUBLIC_URL}/assets/rome.jpg`, link: '/rome' },
    { name: 'London', img: `${process.env.PUBLIC_URL}/assets/london.jpg`, link: '/london' },
  ];


  const isFavorite = (location) => {
    return favorites.some((fav) => fav.name === location.name);
  };

  const toggleFavorite = (location) => {
    let updatedFavorites;
    if (isFavorite(location)) {
    
      updatedFavorites = favorites.filter((fav) => fav.name !== location.name);
    } else {
      // Add to favorites
      updatedFavorites = [...favorites, location];
    }
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };


  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, [setFavorites]);

  return (
    <div className="page-container text-center">
      <h2>Our Locations</h2>
      <div className="locations-container">
        {locations.map((location, idx) => (
          <div key={idx} className="image-card">
            <Link to={location.link}>
              <img src={location.img} alt={location.name} className="image-card-img" />
              <div className="image-card-text">
                <h3>{location.name}</h3>
              </div>
            </Link>
            <Button variant="link" className="favorite-btn" onClick={() => toggleFavorite(location)}>
              {isFavorite(location) ? (
                <FaHeart color="red" size="20" />
              ) : (
                <FaRegHeart size="20" />
              )}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
