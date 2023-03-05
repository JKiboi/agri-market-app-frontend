import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Home.css"

const Home = () => {
  return (
    <div className='home'>
      <section id="landing">
        <h1>Welcome to FarmConnect</h1>
        <p>FarmConnect is a platform that connects farmers and consumers. Our aim is to help farmers increase their productivity and profitability by providing them with resources and access to markets, while also making it easier for consumers to access fresh and healthy farm produce.</p>
      </section>

      <section id="features">
        <h2>Features</h2>
        <ul>
          <li>
            <h3>Farmer Resources</h3>
            <p>Access farming resources, such as articles on farming techniques, weather information, market prices and other resources that can help farmers improve their practices.</p>
            <Link to="/farmers-resources" className="button">Explore</Link>
          </li>
          <li>
            <h3>Consumer Dashboard</h3>
            <p>Access your profile and place orders for fresh farm produce from local farmers.</p>
            <Link to="/consumer-dashboard" className="button">Explore</Link>
          </li>
          <li>
            <h3>Weather Widget</h3>
            <p>Get up-to-date weather information and forecasts for your current location.</p>
            <Link to="/weather-widget" className="button">Explore</Link>
          </li>
        </ul>
      </section>

      <section id="cta">
        <h2>Join FarmConnect Today</h2>
        <p>Sign up or log in to access our features and start connecting with local farmers and consumers.</p>
        <div>
          <Link to="/register" className="button">Sign Up</Link>
          <Link to="/login" className="button">Log In</Link>
        </div>
      </section>

      <section id="dashboard-link">
        <h2>Farmer Dashboard</h2>
        <p>Access your dashboard to manage your farm and products.</p>
        <Link to="/farmer-dashboard" className="button">Dashboard</Link>
      </section>
    </div>
  );
};

export default Home;
