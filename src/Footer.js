import React from 'react';
import {
  FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn, FaGithub,
} from 'react-icons/fa';

const Footer = () => (
  <section>
    <footer className="text-center text-white" style={{ backgroundColor: '#0a4275' }}>
      <div className="container p-4 pb-0">
        <section>
          <p className="d-flex justify-content-center align-items-center">
            <span className="me-3">
              Connect with me:
            </span>
            <a href="https://www.facebook.com/your_facebook_profile_url" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-white iconSize me-3" />
            </a>
            <a href="https://www.twitter.com/your_twitter_profile_url" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-white iconSize me-3" />
            </a>
            <a href="https://www.google.com/your_google_plus_profile_url" target="_blank" rel="noopener noreferrer">
              <FaGoogle className="text-white iconSize me-3" />
            </a>
            <a href="https://www.instagram.com/your_instagram_profile_url" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white iconSize me-3" />
            </a>
            <a href="https://www.linkedin.com/your_linkedin_profile_url" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="text-white iconSize me-3" />
            </a>
            <a href="https://www.github.com/your_github_profile_url" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-white iconSize me-3" />
            </a>
          </p>
        </section>
      </div>
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className="text-white" target="_blank" href="https://github.com/AbdusSattar-70/portfolio/blob/master/LICENSE" rel="noreferrer">Abdus Sattar</a>
      </div>
    </footer>
  </section>
);

export default Footer;
