import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Nav, NavDropdown, Button, Offcanvas,
} from 'react-bootstrap';
import { FaBars, FaXmark } from 'react-icons/fa6';
import './nav.css';

const NavBar = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  const toggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Responsive navigation toggle for small screens
  const renderMobileNavToggle = (
    <div className="d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <a href="/" className="m-0 ms-2">A.Sattar</a>
      </div>
      <div className="nav-toggle-button">
        <Button type="button" onClick={toggleOffcanvas}>
          {showOffcanvas ? <FaXmark /> : <FaBars />}
        </Button>
      </div>
    </div>
  );

  return (
    <>
      {isLargeScreen ? (
        <div className="d-flex bg-primary justify-content-between align-items-center">
          <a href="/" className="nav-link">A.Sattar</a>
          <Nav fill variant="tabs">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" className="nav-link">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="nav-link">
              Contact
            </Nav.Link>
            <Nav.Link as={NavLink} to="/recent_work" className="nav-link">
              Recent Work
            </Nav.Link>
            <NavDropdown title="Favorite Project" id="nav-dropdown">
              <NavDropdown.Item href="/"> Project-1</NavDropdown.Item>
              <NavDropdown.Item href="/"> Project-2</NavDropdown.Item>
              <NavDropdown.Item href="/"> Project-3</NavDropdown.Item>
              <NavDropdown.Item href="/"> Project-4</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </div>
      ) : (
        <>
          {renderMobileNavToggle}
          <Offcanvas show={showOffcanvas} onHide={() => setShowOffcanvas(false)}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              {/* Add Offcanvas content here */}
            </Offcanvas.Body>
          </Offcanvas>
        </>
      )}
    </>
  );
};

export default NavBar;
