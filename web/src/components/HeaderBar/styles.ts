import styled from 'styled-components';
import { Link as ReactRouterLink } from 'react-router-dom'

export const Container = styled.header`
  height: 100%;
  padding: 20px;
  background: linear-gradient(to top, #00a3ff 0%, #66e92887 100%);  
    
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 750px) {
    display: none;
  }
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

export const Division = styled.div``;

export const Button = styled.button`
  width: 48px;
  height: 48px;

  border: 0;

  background: linear-gradient(45deg, #00a3ff 0%, #66e92887 100%);
  border-radius: 16px;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
    
  transition: background-color 0.2s;

  :hover {
    background: linear-gradient(45deg, #66e92887 0%, #00a3ff 100%);
  }
`;
