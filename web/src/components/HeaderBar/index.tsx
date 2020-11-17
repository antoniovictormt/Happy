import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';

import {
  Container,
  Link,
  Division,
  Button,
} from '../HeaderBar/styles';
import mapMarker from '../../assets/map-marker.svg';

export default function HeaderBar() {
  const { goBack } = useHistory();

  return (
    <Container>
      <Link to='/'>
        <img src={mapMarker} alt="Happy" />
      </Link>

      <Division>
        <Button onClick={goBack}>
          <FiArrowLeft size={24} color="#FFF" />
        </Button>
      </Division>
    </Container>
  )
}
