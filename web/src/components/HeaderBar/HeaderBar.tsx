import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import mapMarker from '../../assets/map-marker.svg';

import './headerbar.css';

export default function HeaderBar() {
  const { goBack } = useHistory();

  return (
    <header className="app-headerbar">
      <Link to='/'>
        <img src={mapMarker} alt="Happy" />
      </Link>

      <div className="app-headerbar-b">
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </div>
    </header>
  )
}
