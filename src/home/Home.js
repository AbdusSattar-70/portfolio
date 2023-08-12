import React from 'react';
import {
  FaFacebookF, FaGooglePlusG, FaGoogleDrive,
  FaTwitter, FaLinkedinIn,
} from 'react-icons/fa6';
import { Nav } from 'react-bootstrap';
import ProjectCards from './ProjectCards';
import './home.css';
import NavBar from '../navbar/NavBar';

const Home = () => (
  <div className="container-fluid backgroundImg">
    <div className="row">
      <NavBar />
      <div className="col-12 text-center mt-4">
        <h1 className="animate-jump">Welcome Back!</h1>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-6 mb-4">
        <div className="d-flex justify-content-center align-items-center">
          <div className="boxshadow">
            <h1>Hey There, I&apos;m Abdus Sattar</h1>
            <h2>I&apos;m a Software Developer</h2>
            <p>
              I can help you build a product, feature or
              website Look through some of my work and experience! If you like
              what you
              see and have a project you need coded,
              don&apos;t hestiate to contact me.
            </p>
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
        </div>
      </div>
      <div className="col-lg-6">
        <div className="boxshadow">
          <ProjectCards />
        </div>
      </div>
    </div>
  </div>
);

export default Home;
