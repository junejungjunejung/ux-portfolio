import React from 'react';

const AboutPage = () => {
  return (
    <div id="about-layout">
      <div id="about-intro">
        <h1>I'm a passionate Web and Mobile UX/UI Designer & Front-End developer with meticulous attention to detail.</h1>
        <p>I possess excellent time management skill comes from a background of fast-paced creative production work environment.</p>
      </div>

      <div id="about-tools">
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
                <p>Mockup</p>
                <p>Prototype</p>
                <p>Style guide / UI kit</p>
                <p>Responsive Design</p>
                <p>Agile Methodology</p>
              </div>

              <div>
                <h3>Softwares</h3>
                <p>Trello</p>
                <p>Figma</p>
                <p>Zeplin</p>
                <p>Sketch</p>
                <p>Adobe XD</p>
                <p>Adobe InDesign</p>
                <p>Adobe Illustrator</p>
                <p>Adobe Photoshop</p>
              </div>
            </div>
          </div>

          <div>
            <h2>Development</h2>

            <div id="dev-layout">
              <div>
                <p>JavaScript ES6</p>
                <p>React.JS</p>
                <p>Rest API</p>
                <p>Firebase</p>
                <p>Material-UI</p>
                <p>Authentication</p>
                <p>WordPress</p>
                <p>Node.Js</p>
                <p>Express.Js</p>
              </div>
              <div>
                <p>Git</p>
                <p>Yarn</p>
                <p>NPM</p>
                <p>Docker</p>
                <p>MySQL</p>
                <p>Webpack</p>
                <p>HTML</p>
                <p>CSS</p>
                <p>SCSS</p>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}

export default AboutPage;