import React from 'react';

const AboutPage = () => {
  return (
    <div id="about-layout">
      <div id="about-intro">
        <h1>I'm a passionate Web and Mobile UX Designer & Front-End developer with meticulous attention to detail.</h1>
        <p>I possess excellent time management skill comes from a background of fast-paced creative production work environment.</p>
      </div>

      <h1>Tools & Skills</h1>
      <div id="tools-layout">
        <div>
          <h2>Design</h2>

          <div id="design-layout">
            <div>
              <h3>Creative Process</h3>
              <p>Persona</p>            
              <p>User Flow</p>
              <p>Wireframe</p>
              <p>Prototype</p>
              <p>Mockup</p>
              <p>Responsive Design</p>
              <p>Agile Methodology</p>
            </div>

            <div>
              <h3>Softwares</h3>
              <p>Figma</p>
              <p>Zeplin</p>
              <p>Adobe Photoshop</p>
              <p>Adobe Illustrator</p>
              <p>Adobe XD</p>
              <p>Adobe InDesign</p>
              <p>Sketch</p>
              <p>Trello</p>
            </div>
          </div>
        </div>

        <div>
          <h2>Development</h2>

          <div id="dev-layout">
            <div>
              <p>React.JS</p>
              <p>Rest API</p>
              <p>Firebase</p>
              <p>Material-UI</p>
              <p>Node.Js</p>
              <p>Express.Js</p>
              <p>MySQL</p>
              <p>Git</p>
              <p>NPM</p>
            </div>
            <div>
              <p>Yarn</p>
              <p>Webpack</p>
              <p>Docker</p>
              <p>WordPress</p>
              <p>HTML</p>
              <p>CSS</p>
              <p>JavaScript</p>
              <p>SCSS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;