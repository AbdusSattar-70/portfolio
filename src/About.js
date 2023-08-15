import React from 'react';
import {
  FaFacebookF, FaGooglePlusG, FaGoogleDrive,
  FaTwitter, FaLinkedinIn,
} from 'react-icons/fa6';
import {
  Container, Row, Col, Nav,
} from 'react-bootstrap';
import Tippy from '@tippyjs/react';

import photo from './assets/photo.png';

const About = () => (
  <Container className="mt-4">
    <Row className="mt-4">
      <Col>
        <div className="position-relative">
          <img src={photo} alt="Profile" className="img-fluid" />
          <div className="social-media-overlay">
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
      </Col>
    </Row>
    <Row className="mt-4">
      <Col>
        <h2>SUMMARY</h2>
        <p>
          Software Engineer with a strong background in building scalable web
          applications for mid-sized companies. Proficient in all aspects of
          the software development lifecycle and skilled in end-to-end project
          management, from development to delivery. I&apos;ve gained extensive
          experience working remotely and asynchronously with developers from
          different countries on several real-world projects, such as building
          a weather app with APIs and a live chat application with web sockets.
          My unique combination of technical skills and experience in a
          high-stress environment sets me apart from other developers. I am
          seeking opportunities to apply my skills and continue growing as a
          developer. Let&apos;s work together to create innovative solutions and
          drive success.
        </p>
      </Col>
    </Row>
    <Row className="mt-4 ">
      <Col>
        <h2>EXPERIENCE</h2>
        <p>
          Microverse, Remote
          <br />
          <strong>Code Reviewer · Part-time</strong>
          <br />
          May 2023 - Present
        </p>
        <p>
          Ensuring the quality of source code and conducting code and UI reviews.
          Review codes written by software development students in GitHub.
          Evaluate code clarity, style, and best practices on project Pull Requests.
        </p>
        <p>
          MICROVERSE, Remote
          <br />
          <strong>Mentor (Volunteer)</strong>
          <br />
          January 2023 – Present
        </p>
        <p>
          Mentoring multiple junior web developers and providing technical support
          through many code reviews. Providing advice and tips on maintaining
          motivation to maintain longevity in the program.
        </p>
        <p>
          Bangladesh Rural Electrification Board, Dhaka, Bangladesh
          <br />
          <strong>Line Technician</strong>
          <br />
          June 2008 – January 2020
        </p>
        <p>
          Filling my communication and problem-solving skills in a high-stress,
          fast-paced environment. Reduced time and cost on maintenance services by
          task prioritization and concise scheduling. I achieved the best employee
          award three times for maintaining a good customer relationship and
          technical skills.
        </p>
      </Col>
    </Row>

    {/* Education */}
    <Row className="mt-4">
      <Col>
        <h2>EDUCATION</h2>
        <p>
          <strong>MICROVERSE, January 2023– present</strong>
          <br />
          <em>Remote Full Stack Web Development Program, Full Time</em>
          <br />
          Spent 1000+ hours mastering algorithms, data structures,
          and full-stack development while simultaneously developing
          projects with Ruby, Rails, JavaScript, React, and Redux.
          <br />
          Developed skills in remote pair programming using GitHub,
          industry-standard git-flow, and daily standups to communicate
          and collaborate with international remote developers.
        </p>
        {/* Add other education details */}
      </Col>
    </Row>

    {/* Skills */}
    <Row className="mt-4 ">
      <Col>
        <h2>SKILLS</h2>
        <p>
          <strong>Front-End:</strong>
          {' '}
          JavaScript, React, Redux, HTML5, CSS3
          <br />
          <strong>Back-End:</strong>
          {' '}
          Ruby, Rails, Postgresql
          <br />
          <strong>Tools & Methods:</strong>
          {' '}
          Git, GitHub, Heroku, Netlify, Mobile/Responsive Development, RSpec,
          TDD, Chrome Dev Tools
          <br />
          <strong>Professional:</strong>
          {' '}
          Remote Pair-Programming, Teamwork, Mentoring, Code Reviewing.
        </p>
      </Col>
    </Row>
  </Container>
);

export default About;
