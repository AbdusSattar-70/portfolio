import React from 'react';
import {
  FaFacebookF, FaGooglePlusG, FaGoogleDrive,
  FaTwitter, FaLinkedinIn,
} from 'react-icons/fa6';
import { Nav } from 'react-bootstrap';
import Tippy from '@tippyjs/react';
import { Link } from 'react-router-dom';
import ProjectCards from './ProjectCards';

const Home = () => (
  <div className="container-fluid ">
    <div className="row mb-3">
      <div className="col-12 text-center welcomePanel">
        <h1 className="Welcome"> Welcome Back!</h1>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-6 mb-4">
        <div className="d-flex justify-content-center align-items-center">
          <div className="boxshadow">
            <h1>
              Hey There,
              <br />
              I&apos;m
              {' '}
              <span className="text-primary">Abdus Sattar</span>
            </h1>

            <h4>I&apos;m a Software Engineer</h4>
            <p className="text-body-emphasis">
              I can help you build a product, feature or
              website Look through some of my work and experience! If you like
              what you
              see and have a project you need coded,
              don&apos;t hestiate to contact me.
              <span>
                Looking To Start A Project?
                {' '}
                <Link to="/contact">
                  <span>Let&apos;s Talk</span>
                </Link>
              </span>
            </p>
            <div className="d-flex align-items-center justify-content-between p-3 social_media">
              <Tippy content="Say Hello On Facebook">
                <Nav.Link href="https://www.facebook.com/your_facebook_profile_url" target="_blank">
                  <FaFacebookF className="iconSize" />
                </Nav.Link>
              </Tippy>
              <Nav.Link href="https://www.google.com/your_google_plus_profile_url" target="_blank">
                <FaGooglePlusG className="iconSize" />

              </Nav.Link>
              <Tippy content="Say Hello On LinkedIn">

                <Nav.Link href="https://www.linkedin.com/your_linkedin_profile_url" target="_blank">
                  <FaLinkedinIn className="iconSize" />
                </Nav.Link>
              </Tippy>
              <Nav.Link href="https://www.google.com/your_google_drive_url" target="_blank">
                <FaGoogleDrive className="iconSize" />
              </Nav.Link>
              <Tippy content="Say Hello On Twitter">

                <Nav.Link href="https://www.twitter.com/your_twitter_profile_url" target="_blank">
                  <FaTwitter className="iconSize" />
                </Nav.Link>
              </Tippy>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6 scrollable">
        <div>
          <ProjectCards />
        </div>
      </div>
    </div>
  </div>
);
export default Home;
