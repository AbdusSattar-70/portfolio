import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Nav, Navbar, Offcanvas,
} from 'react-bootstrap';
import { FaBars, FaXmark } from 'react-icons/fa6';
import logo from '../assets/logo.png';

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
    <div className="d-flex justify-content-between align-items-center bg-white p-4">
      <div className="d-flex align-items-center">
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top logo"
            alt="logo"
          />
        </Navbar.Brand>
      </div>
      <div className="nav-toggle-button">
        <button type="button" className="humIcon" onClick={toggleOffcanvas}>
          {showOffcanvas ? <FaXmark /> : <FaBars />}
        </button>
      </div>
    </div>
  );

  return (
    <>
      {isLargeScreen ? (
        <div className="navMainContainer sticky-top">
          <div className="d-flex bg-white justify-content-between align-items-center">
            <Navbar.Brand href="/">
              <img
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top logo"
                alt="logo"
              />
            </Navbar.Brand>
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
            </Nav>
          </div>
        </div>
      ) : (
        <>
          {renderMobileNavToggle}
          <Offcanvas show={showOffcanvas} onHide={() => setShowOffcanvas(false)}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className="d-flex bg-white flex-column justify-content-between">
                <Navbar.Brand href="/">
                  <img
                    src={logo}
                    width="70"
                    height="70"
                    className="d-inline-block align-top"
                    alt="logo"
                  />
                </Navbar.Brand>
                <Nav fill variant="tabs" className="align-items-start customFontOffCanvas flex-column">
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
                </Nav>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </>
      )}
    </>
  );
};

export default NavBar;
