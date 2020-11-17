import styled from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';

import landing from '../../assets/landing.svg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to top, #00a2ff 0%, #66e92887 100%);

  display: flex;
  justify-content: center;
  align-items: center;  
`;

export const WrapperAnimation = styled(motion.div)`  
  position: absolute;
  z-index: 10;
`;

export const WrapperTitle = styled.h1`  
  display: none;

  @media (max-width: 650px) {    
    font-size: 14px;
    display: flex;
  }
`;

export const WrapperLogo = styled.img`
  @media (max-width: 650px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
  }
`;

export const Inner = motion.custom(styled.div`
  position: relative;

  width: 100%;
  max-width: 1100px;
  height: 100%;  
  max-height: 680px;
  margin: 0 auto;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;

  background: url(${landing}) no-repeat 80% center;

  @media (max-width: 650px) {    
    background: url(${landing}) no-repeat no-repeat 40% center;
    padding: 10px;
  }
`);

export const Header = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderContainer = styled.div`
  display: flex;
`;

export const Content = styled.main`
  max-width: 350px;
`;

export const Logo = styled.img``;

export const Location = styled.div`  
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
  margin-left: 70px;

  @media (max-width: 650px) {    
    display: none;
  }
`;

export const City = styled.strong`
  font-weight: 800;
  font-size: 25px;
`;

export const State = styled.span`
`;

export const AccessRestrict = styled(ReactRouterLink)`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 220px;
    height: 60px;
    border-radius: 20px;
    background: linear-gradient(45deg, #00a2ff 0%, #66e92887 100%);
    
    text-decoration: none;
    color: #FFF;

    transition: background-color ease .3s;

    &:hover {
      background: linear-gradient(45deg,#66e92887 0%, #00a2ff 100%);
    }; 
`;

export const Title = styled.h1`
  font-size: 76px;
  font-weight: 900;
  line-height: 70px;
`;

export const SubTitle = styled.p`
  margin-top: 40px;
  font-size: 24px;
  line-height: 34px;
`;

export const Link = styled(ReactRouterLink)`
  position: absolute;
  bottom: 0;
  right: 0;
    
  width: 80px;
  height: 80px;
  background: linear-gradient(45deg, #00a2ff 0%, #66e92887 100%);
  border-radius: 30px;
    
  display: flex;
  align-items: center;
  justify-content: center;

  transition: background-color 0.2s;
  cursor: pointer;

  &:hover {
    background: linear-gradient(45deg,#66e92887 0%, #00a2ff 100%);
  }

  @media (max-width: 650px) {    
    margin-bottom: 15px;
  }
`;
