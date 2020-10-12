import React from 'react';
import { FiArrowRight } from 'react-icons/fi'

import './styles/global.css'
import './styles/pages/Landing.css'

import LogoImg from './images/Logo.svg';
import LandingImg from './images/Landing.svg';

function App() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={LogoImg} alt="Logo-happy" />

        <main>
          <h1>Leve Felicidade Para o Mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Amazonas</strong>
          <span>Manaus</span>
        </div>

        <a href="" className="enter-app"> 
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)"/>
        </a>

      </div>
    </div>
  );
}

export default App;
