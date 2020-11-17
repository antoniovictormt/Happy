import React from 'react';

import logo from '../../assets/map-marker.svg';

import {
  Container,
  City,
  Logo,
  State,
  Title
} from './styles';

export default function Banner() {
  return (
    <Container>
      <Logo src={logo} alt="logo" />
      <Title>happy</Title>

      <City>Recife</City>
      <State>Pernambuco</State>
    </Container>
  )
}
