import React from 'react';

const Footer = () => {
  return (
    <footer id="footer-layout">
      This website is built with React.js & Material-UI by me.<br/>
      {'© '}{new Date().getFullYear()} June Jung
    </footer>
  );
}

export default Footer;