import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import mapMarker from '../../assets/map-marker.svg';

import "./styles.css";

export default function SideBar() {
  const { goBack } = useHistory();

  return (
    <aside className="app-sidebar">
      <Link to='/'>
        <img src={mapMarker} alt="Happy" />
      </Link>

      <footer>
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </button>
      </footer>
    </aside>
  )
}


