import React from 'react';

const About = () => (
  <div>
    <section id="about" className="about-section">
      <div className="about-container">
        <article className="about-me">
          <h2>About me</h2>
          <p>
            Hello I&apos;m a software developer! I can help you build a product ,
            feature or website Look through some of
            my
            work and
            experience! If you like what you see and have a project you need coded,
            don&apos;t hestiate to contact me.
          </p>
          <a href="images/My Resume.pdf" target="_blank" download="Resume.pdf">
            <button type="button">Get My Resume</button>
          </a>
        </article>
        <ul className="skills-list">
          <li className="skill-1">
            Language
            <ul className="Languages">
              <li>Javascript</li>
              <li>Ruby</li>
              <li>Html</li>
              <li>CSS</li>
            </ul>
          </li>
          <li className="skill-2">
            Frameworks
            <ul className="frameworks">
              <li>Bootstrap</li>
              <li>Ruby on Rails</li>
              <li>RSPec</li>
              <li>CapyBara</li>
              <li>Selenium</li>
            </ul>
          </li>
          <li className="skill-3">
            Skills
            <ul className="skills">
              <li>Codekit</li>
              <li>Github</li>
              <li>Codepen</li>
              <li>Gitlab</li>
              <li>Terminal</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>

  </div>
);

export default About;
