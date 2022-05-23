import React from 'react';
import './Footer.css';
import Facebook from '../assets/footerimage/Facebook.png';
import Github from '../assets/footerimage/GitHub.png';
import Google from '../assets/footerimage/Google.png';
import Instagram from '../assets/footerimage/Instagram.png';
import Telegram from '../assets/footerimage/Telegram.png';
import WhatsApp from '../assets/footerimage/WhatsApp.png';
import YouTube from '../assets/footerimage/YouTube.png';

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* column1 */}
          <div className="col">
            <ul className="lis_unstyled">
              <h4>Dessert stores</h4>
              <li>Home</li>
              <li>Products</li>
              <li>About Us</li>
            </ul>
          </div>
          {/* column2 */}
          <div className="col2">
            <ul className="lis_unstyled">
              <h4>Partners</h4>
              <li>Арман </li>
              <li>Магнолия</li>
              <li>Береке</li>
            </ul>
          </div>
          {/* column3 */}
          <div className="col3">
            <ul className="lis_unstyled">
              <h4>Sweetsellers</h4>
              <li>Sweetseller Account Home</li>
              <li>Sweetsellers FAQ</li>
              <li>Sweetseller information</li>
            </ul>
          </div>
          {/* column4 */}
          <div className="col4">
            <ul className="lis_unstyled">
              <h4>Contact</h4>
              <li>+996704880115</li>
              <li>Email: sweetie_stores@gmail.com </li>
              <li>Address: г.Бишкек ул.Табышалиева 29 </li>
            </ul>
          </div>
        </div>
      </div>
      {/* // ICONS */}
      <div className="icons">
        <a target="_blank" href="https://www.instagram.com/" className="card">
          <i className="fab fa-instagram"></i>
          <img src={Instagram} alt="" />
        </a>
        <a target="_blank" href="https://ru-ru.facebook.com/" className="card1">
          <i className="fab fa-facebook"></i>
          <img src={Facebook} alt="" />
        </a>
        <a target="_blank" href="https://www.google.com/" className="card3">
          <i className="fab fa-google"></i>
          <img src={Google} alt="" />
        </a>
        <a target="_blank" href="https://github.com/" className="card2">
          <i className="fab fa-git"></i>
          <img src={Github} alt="" />
        </a>
        <a target="_blank" href="https://web.telegram.org/k/" className="card4">
          <i className="fab fa-telegram"></i>
          <img src={Telegram} alt="" />
        </a>
        <a target="_blank" href="https://www.whatsapp.com/" className="card5">
          <i className="fab fa-whatsApp"></i>
          <img src={WhatsApp} alt="" />
        </a>
        <a target="_blank" href="https://www.youtube.com/" className="card6">
          <i className="fab fa-youTube"></i>
          <img src={YouTube} alt="" />
        </a>
      </div>
      
    </div>
  );
};

export default Footer;