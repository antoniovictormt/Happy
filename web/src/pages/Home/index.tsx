import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import {
  Container,
  WrapperAnimation,
  WrapperTitle,
  WrapperLogo,
  Inner,
  Header,
  HeaderContainer,
  Logo,
  Location,
  City,
  State,
  AccessRestrict,
  Content,
  Title,
  SubTitle,
  Link,
} from './styles';

import logo from '../../assets/logo.svg';
import markerImg from '../../assets/map-marker.svg';

export default function Home() {
  return (
    <Container>
      <WrapperAnimation
        initial={{ scale: 0 }}
        animate={{ scale: 2 }}
        transition={{ duration: 1.5, repeat: 1, repeatType: "reverse" }}>
        <WrapperTitle>Bem Vindo a Recife, Pernambuco</WrapperTitle>
        <br />
        <WrapperLogo src={markerImg} alt="Logo happy" />
      </WrapperAnimation>

      <Inner
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.0, duration: 0.8 }}>
        <Header>
          <HeaderContainer>
            <Logo src={logo} alt="Happy" />

            <Location>
              <City>Recife</City>
              <State>Pernambuco</State>
            </Location>
          </HeaderContainer>
          <AccessRestrict to="/login">Acesso restrito</AccessRestrict>
        </Header>

        <Content>
          <Title>Leve Felicidade para o mundo</Title>
          <SubTitle>Visite orfanatos e mude o dia de muitas crianças.</SubTitle>
        </Content>

        <Link to="/map">
          <FiArrowRight size={26} color="rgb(255, 255, 255)" />
        </Link>
      </Inner>
    </Container>
  );
}
