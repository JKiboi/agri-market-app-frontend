import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import "../styles/Footer.css"

function Footer() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log(`Subscribing ${email} to the newsletter...`);
    setEmail('');
  };

  return (
    <footer className="footer">
      <div className="footer__subscribe">
        <h2>Subscribe to our Newsletter</h2>
        <form onSubmit={handleSubscribe}>
          <div className="footer__form-group">
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Your email address"
            />
            <button type="submit">Subscribe</button>
          </div>
        </form>
      </div>

      <div className="footer__links">
        <h2>Quick Links</h2>
        <div className='quick_links'>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
          <a href="#">Products</a>
        </div>
      </div>

      <div className="footer__social-media">
        <h2>Connect with us</h2>
        <div className='social-media'>
          <a href="https://facebook.com/home"><FaFacebook /></a>
          <a href="https://twitter.com/home"><FaTwitter /></a>
          <a href="https://Linkedin.com/home"><FaLinkedin /></a>
          <a href="https://nstagram.com/home"><FaInstagram /></a>
        </div>
      </div>

      <div className="footer__copyright">
        <p>&copy; {new Date().getFullYear()} FarmLink</p>
      </div>
    </footer>
  );
}

export default Footer;
