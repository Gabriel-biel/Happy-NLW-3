import React from 'react';
//PArei no 1.39 horas minutos

import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

import '../styles/pages/Orphanage.css'

import LocalMarker from '../images/Local-marker.svg';

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={LocalMarker} alt="Happy"/>  

          <h2>Escolha um Orfanato</h2>
          <p>Muitas Crianças estão esperando sua visita!</p>
        </header>

          <footer>
            <strong>Lábrea </strong>
            <span> Amazonas</span>
          </footer>
      </aside>

      <div>

      </div>
      <Link to="" className="create-orphanage">
        <FiPlus size={25} color="#fff"/>
      </Link>
    </div>
  )
}

export default OrphanagesMap;