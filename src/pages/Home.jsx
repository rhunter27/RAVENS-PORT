import React from 'react';
import { Link } from 'react-router-dom';
import "../global.css";
import Sidebar from '../components/Sidebar';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <h1>Welcome to Raven's Portfolio</h1>
<p className="intro">
  Welcome to my creative space — where code meets imagination. Check out the projects that reflect my style, skills, and problem-solving spirit.
</p>
        <Link to="/portfolio" className="btn">
          View My Work
        </Link>
      </section>
    </div>
  );
};

export default Home;
