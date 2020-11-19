import React from 'react';

import {
  Container,
  FixedContainer,
  Header,
  Icon,
  GroupIcon,
  Link,
  Title,
  SubTitle,
  Footer,
  State,
  City,
  Button
} from '../HeaderBar/styles';

import mapMarker from '../../assets/map-marker.svg';

interface HeaderBarChildren {
  children: React.ReactNode;
};

interface ButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit';
  onClick(e: React.MouseEvent<HTMLElement>): void;
  isActive?: true | false;
}

interface IconProps {
  children: React.ReactNode;
  type?: 'button' | 'submit';
  onClick(e: React.MouseEvent<HTMLElement>): void;
  isActive: true | false;
}

export default function HeaderBar({ children }: HeaderBarChildren) {
  return <Container>{children}</Container>
};

HeaderBar.FixedContainer = function HeaderBarFixedContainer({ children }: HeaderBarChildren) {
  return <FixedContainer>{children}</FixedContainer>
}

HeaderBar.Header = function HeaderBarHeader({ children }: HeaderBarChildren) {
  return <Header>{children}</Header>
};

HeaderBar.Logo = function HeaderBarLogo() {
  return <Link to='/'> <img src={mapMarker} alt="Happy" /> </Link> // Static
};

HeaderBar.GroupIcon = function HeaderBarGroupIcon({ children }: HeaderBarChildren) {
  return <GroupIcon>{children}</GroupIcon>
}

HeaderBar.Icon = function HeaderBarIcon({ children, onClick, type, isActive }: IconProps) {
  return <Icon isActive={isActive} onClick={onClick} type={type}>{children}</Icon>
};

HeaderBar.Title = function HeaderBarTitle({ children }: HeaderBarChildren) {
  return <Title>{children}</Title>
};

HeaderBar.SubTitle = function HeaderBarSubTitle({ children }: HeaderBarChildren) {
  return <SubTitle>{children}</SubTitle>
};

HeaderBar.City = function HeaderBarCity({ children }: HeaderBarChildren) {
  return <City>{children}</City>
};

HeaderBar.State = function HeaderBarState({ children }: HeaderBarChildren) {
  return <State>{children}</State>
};

HeaderBar.Button = function HeaderBarButton({ children, type, onClick }: ButtonProps) {
  return <Button type={type} onClick={onClick}>{children}</Button>
};

HeaderBar.Footer = function HeaderBarFooter({ children }: HeaderBarChildren) {
  return <Footer>{children}</Footer>
};
