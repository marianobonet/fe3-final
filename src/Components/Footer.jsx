import React, { useContext } from 'react';
import { GlobalContext } from '../context';

const Footer = () => {
  const { theme } = useContext(GlobalContext);

  return (
    <footer className={theme}>
      <div className='footer-logo'>
      <p>Powered by</p>
      <img src="./DH.ico" alt='DH-logo' />
      </div>
      
      <div className="social-icons">
        <div className="icon-container">
          <img src="./images/ico-facebook.png" alt="Facebook" />
        </div>
        <div className="icon-container">
          <img src="./images/ico-instagram.png" alt="Instagram" />
        </div>
        <div className="icon-container">
          <img src="./images/ico-tiktok.png" alt="TikTok" />
        </div>
        <div className="icon-container">
          <img src="./images/ico-whatsapp.png" alt="WhatsApp" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;