import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import { Link } from 'react-router-dom'

import LogoImg from '../images/Logo.svg';

import '../styles/pages/Landing.css'

function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={LogoImg} alt="Logo-happy" />

        <main>
          <h1>Leve Felicidade Para o Mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Lábrea</strong>
          <span>Amazonas</span>
        </div>

        <Link to="/app" className="enter-app"> 
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)"/>
        </Link>

      </div>
    </div>
  );
}

export default Landing;