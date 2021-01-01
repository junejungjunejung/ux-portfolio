import React from 'react';

const Footer = () => {
  return (
    <footer id="footer-layout">
      <div>This website is built with React.js & Material-UI by me.</div>
      <div>{'© '}{new Date().getFullYear()} June Jung</div>
    </footer>
  );
}

export default Footer;