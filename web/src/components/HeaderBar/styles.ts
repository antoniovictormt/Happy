import styled, { StyledComponent } from 'styled-components';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Container = styled.header`
  height: 100%;
  padding: 20px;
  background: linear-gradient(to right, rgba(102, 233, 40, 0.529) 0%, rgb(0, 162, 255) 100%);  
    
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 750px) {
    display: none;
  }
`;

export const FixedContainer = styled.div`
  position: fixed;
  height: 100%;
  padding: 32px 24px;
  background: linear-gradient(to right, rgba(102, 233, 40, 0.529) 0%, rgb(0, 162, 255) 100%);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 750px) {
      display: none;
  }
`;

export const Header = styled.header``;

interface IconProps {
  isActive: boolean;
}

export const Icon: StyledComponent<"button", any, { isActive: boolean }, never> = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 1.6rem;
    background: ${({ isActive }: IconProps) => isActive ? '#00a3ff' : '#66e92887'};
    border: none;
    outline: none;
    cursor: pointer;
    
    svg {
        color: ${({ isActive }: IconProps) => isActive ? '#fff' : '#fff'};
    };
    &:hover {
      background: linear-gradient(45deg, #66e92887 0%, #00a3ff 100%);
        svg {
            color: #fff;
        };
    };
    & + & {
        margin-left: 1.5rem;
    };
`;

export const GroupIcon = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Link = styled(ReactRouterLink)`
  width: 48px;
  height: 48px;

  border: 0;
   
  border-radius: 16px;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
    
  transition: background-color 0.2s;
    
  img {
    width: 48px;
  }
`;

export const Title = styled.h2`
    font-size: 4rem;
    font-weight: 800;
    line-height: 4.2rem;
    margin-top: 6.4rem;

    @media (max-width: 650px) {
    font-size: 1.75rem;
    font-weight: 800;
    line-height: 1.75rem;
  }
`;

export const SubTitle = styled.p`
    line-height: 2.8rem;
    margin-top: 2.4rem;

    @media (max-width: 650px) {
    line-height: 1.75rem;
  }
`;

export const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    line-height: 2.4rem;
`;

export const City = styled.strong`
    font-weight: 800;
`;

export const State = styled.span``;

export const Button = styled.button`
  width: 48px;
  height: 48px;

  border: 0;

  background: linear-gradient(45deg, #00a3ff 0%, #66e92887 100%);
  border-radius: 16px;
  color: #fff;

  cursor: pointer;

  transition: background-color 0.2s;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: linear-gradient(45deg, #66e92887 0%, #00a3ff 100%);
  }
`;

export const Division = styled.div``;