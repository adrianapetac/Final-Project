import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Container, Nav, Form, FormControl, Button, Dropdown } from 'react-bootstrap';
import './Header.css';

export default function Header({ cartItems, setCartItems, favorites }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [favoritesOpen, setFavoritesOpen] = useState(false); 
  const navigate = useNavigate();


  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };


  const toggleFavorites = () => {
    setFavoritesOpen(!favoritesOpen);
  };

 
  const closeCart = () => {
    setCartOpen(false);
  };

 
  const closeFavorites = () => {
    setFavoritesOpen(false);
  };

 
  const totalPrice = cartItems.reduce((total, item) => total + item.totalPrice, 0);


  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1); 
    setCartItems(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
  };

 
  const searchItems = [
    { name: 'Wellness Path', link: '/services/wellness' },
    { name: 'Massage Treatments', link: '/services/massage' },
    { name: 'Rome', link: '/locations/rome' },
    { name: 'London', link: '/locations/london' }
  ];

  const filteredItems = searchItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (filteredItems.length > 0) {
      navigate(filteredItems[0].link); 
      setSearchTerm(''); 
    } else {
      alert('No matching results found.');
    }
  };

  const highlightMatch = (text, term) => {
    const index = text.toLowerCase().indexOf(term.toLowerCase());
    if (index === -1 || term === '') {
      return text; 
    }
    return (
      <>
        {text.substring(0, index)}
        <span style={{ backgroundColor: 'yellow' }}>{text.substring(index, index + term.length)}</span>
        {text.substring(index + term.length)}
      </>
    );
  };

  return (
    <>
    
      <Navbar bg="light" expand="lg" className="px-3 py-2 shadow-sm">
        <Container fluid>
         
          <Navbar.Toggle aria-controls="navbarResponsive">
            <i className="bi bi-list" style={{ fontSize: '1.5rem' }}></i>
          </Navbar.Toggle>

       
          <Navbar.Brand className="mx-auto text-center qc-terme-center position-a">
            <h1 className="qc-terme-brand">QC Terme</h1>
          </Navbar.Brand>

         
          <Navbar.Collapse id="navbarResponsive" className="justify-content-end d-flex align-items-center">
            <Nav className="align-items-center">
             
              <Form className="d-flex align-items-center me-3 search-form" onSubmit={handleSearchSubmit}>
                <FormControl
                  type="search"
                  placeholder="Search..."
                  className="me-2"
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setShowResults(true);
                  }}
                />
                <Button variant="outline-primary" type="submit" className="search-button">
                  <i className="bi bi-search"></i>
                </Button>

              
                {showResults && searchTerm && (
                  <div className="search-results">
                    {filteredItems.length > 0 ? (
                      filteredItems.map((item, idx) => (
                        <div
                          key={idx}
                          className="search-result-item"
                          onClick={() => {
                            navigate(item.link);
                            setSearchTerm(''); 
                            setShowResults(false); 
                          }}
                        >
                          {highlightMatch(item.name, searchTerm)} 
                        </div>
                      ))
                    ) : (
                      <div className="search-result-item">No matching results</div>
                    )}
                  </div>
                )}
              </Form>

              
              <Dropdown show={favoritesOpen} onToggle={toggleFavorites} align="end">
                <Dropdown.Toggle variant="outline-primary" id="dropdown-favorites" style={{ textDecoration: 'none' }}>
                  <i className="bi bi-heart-fill" style={{ color: 'red', fontSize: '1.5rem' }}></i>
                  <span className="ms-1">{favorites.length}</span>
                </Dropdown.Toggle>

                <Dropdown.Menu className="favorites-modal">
                  <Dropdown.Header>Your Favorites</Dropdown.Header>
                  {favorites.length > 0 ? (
                    <div>
                      {favorites.map((favorite, idx) => (
                        <Dropdown.Item
                          key={idx}
                          className="favorite-item"
                          onClick={() => navigate(`/locations/${favorite.name.toLowerCase()}`)} // Navigate to favorite location
                        >
                          <p>{favorite.name}</p>
                        </Dropdown.Item>
                      ))}
                    </div>
                  ) : (
                    <Dropdown.Item>Your favorites list is empty.</Dropdown.Item>
                  )}
                </Dropdown.Menu>
              </Dropdown>

             
              <Dropdown show={cartOpen} onToggle={toggleCart} align="end">
                <Dropdown.Toggle variant="outline-primary" id="dropdown-cart">
                  <i className="bi bi-cart-fill" style={{ fontSize: '1.5rem' }}></i>
                  <span className="ms-1">{cartItems.length}</span>
                </Dropdown.Toggle>

                <Dropdown.Menu className="cart-modal" style={{ border: 'none' }}>
                  <Dropdown.Header>Your Cart</Dropdown.Header>
                  {cartItems.length > 0 ? (
                    <div>
                      {cartItems.map((item, idx) => (
                        <Dropdown.Item key={idx} className="cart-item d-flex justify-content-between">
                          <div>
                            <p>{item.service}</p>
                            <p>{item.guests} guests</p>
                            <p>{item.date}</p>
                            <p>{item.time}</p>
                            <p>{item.totalPrice} €</p>
                          </div>
                          <Button variant="primary" size="sm" onClick={() => removeFromCart(idx)}>Remove</Button>
                        </Dropdown.Item>
                      ))}
                      <Dropdown.Divider />
                      <Dropdown.Item className="cart-total">Total: {totalPrice} €</Dropdown.Item>
                    </div>
                  ) : (
                    <Dropdown.Item>Your cart is empty.</Dropdown.Item>
                  )}
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    
      {cartOpen && <div className="overlay" onClick={closeCart}></div>}
      {favoritesOpen && <div className="overlay" onClick={closeFavorites}></div>}
    </>
  );
}
