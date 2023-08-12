import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Nav, NavDropdown, Button, Offcanvas,
} from 'react-bootstrap';
import {
  FaFacebookF, FaGooglePlusG, FaGoogleDrive,
  FaTwitter, FaLinkedinIn, FaBars, FaXmark,
} from 'react-icons/fa6';
// import { useDispatch, useSelector } from 'react-redux';

function NavBar() {
  // const [showSignUpModal, setShowSignUpModal] = useState(false);
  // const handleCloseSignUpModal = () => {
  //   setShowSignUpModal(false);
  // };
  // const handleOpenSignUpModal = () => {
  //   setShowSignUpModal(true);
  // };
  const location = useLocation();
  // const dispatch = useDispatch();

  const handleSignOut = () => {
    // dispatch(signOut());
    window.location.href = '/';
  };

  const isActiveLink = (path) => location.pathname === path;

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

  return (
    <>
      {isLargeScreen ? (
        <div className="d-flex flex-column border-end h-100 bg-white">
          <div className="d-flex align-items-center p-3">
            <h1 className="m-0 ms-2">A.Sattar</h1>
          </div>
          <div className="d-flex flex-column flex-grow-1 px-0">
            <NavLink to="/delete_doctor" activeClassName="active" isActive={() => isActiveLink('/delete_doctor')} className="p-3">
              Delete Doctor
            </NavLink>
            <NavLink to="/doctors" activeClassName="active" isActive={() => isActiveLink('/doctors')} className="p-3">
              Doctors
            </NavLink>
            <NavLink to="/appointment" activeClassName="active" isActive={() => isActiveLink('/appointment')} className="p-3">
              Appointment
            </NavLink>
            <NavLink to="/my_appointments" activeClassName="active" isActive={() => isActiveLink('/my_appointments')} className="p-3">
              My Appointments
            </NavLink>
            <NavDropdown.Item as="button" onClick={handleSignOut} className="p-3">
              Sign Out
            </NavDropdown.Item>
            <NavDropdown title="For Super Admin" id="nav-dropdown" className="p-3 super_admin">
              <NavDropdown.Item href="/user_list">User Lists</NavDropdown.Item>
              <NavDropdown.Item href="/appointment_list">Appointments Lists</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
          </div>
          <div className="d-flex align-items-center justify-content-between p-3 social_media">
            <Nav.Link href="https://www.facebook.com/your_facebook_profile_url" target="_blank">
              <FaFacebookF />
            </Nav.Link>
            <Nav.Link href="https://www.google.com/your_google_plus_profile_url" target="_blank">
              <FaGooglePlusG />
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/your_linkedin_profile_url" target="_blank">
              <FaLinkedinIn />
            </Nav.Link>
            <Nav.Link href="https://www.google.com/your_google_drive_url" target="_blank">
              <FaGoogleDrive />
            </Nav.Link>
            <Nav.Link href="https://www.twitter.com/your_twitter_profile_url" target="_blank">
              <FaTwitter />
            </Nav.Link>
          </div>
        </div>
      ) : (
        <>
          <div className="nav-toggle-button">
            <Button type="button" onClick={toggleOffcanvas}>
              {showOffcanvas ? <FaXmark /> : <FaBars />}
            </Button>
          </div>

          <Offcanvas show={showOffcanvas} onHide={() => setShowOffcanvas(false)}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body />
          </Offcanvas>
        </>
      )}

    </>
  );
}

export default NavBar;
