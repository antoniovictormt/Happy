import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './landing.css';

import logoImg from '../../assets/logo.svg';

function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="logo Happy" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite organatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Recife</strong>
          <span>Pernambuco</span>
        </div>

        <Link to="/map" className="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </Link>
      </div>
    </div>
  );
}

export default Landing;