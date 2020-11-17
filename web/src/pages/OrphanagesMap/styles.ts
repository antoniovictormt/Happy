import styled, { createGlobalStyle } from 'styled-components/macro';
import { Link as ReactRouterLink } from 'react-router-dom';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    position: relative;

    .leaflet-container {
        z-index: 5;
    };
`;

export const Link = styled(ReactRouterLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    
    width: 40px;
    height: 40px;
    background: linear-gradient(45deg, rgb(0, 162, 255) 0%, rgba(102, 233, 40, 0.529) 100%);
    border-radius: 12px;

    transition: background-color 0.2s;

    &:hover {
      background: linear-gradient(45deg, rgba(102, 233, 40, 0.529) 0%, rgb(0, 162, 255) 100%);
    } 
`;

export const LinkCreate = styled(ReactRouterLink)`
    position: absolute;
    right: 10px;
    bottom: 10px;

    z-index: 10;

    width: 64px;
    height: 64px;
    border-radius: 20px;
    background: linear-gradient(45deg, rgb(0, 162, 255) 0%, rgba(102, 233, 40, 0.529) 100%);

    display: flex;
    justify-content: center;
    align-items: center;

    transition: background-color 0.2s;
    
    &:hover {
      background: linear-gradient(45deg, rgba(102, 233, 40, 0.529) 0%, rgb(0, 162, 255) 100%);
    }
`;

export const MapStyle = createGlobalStyle`
  #map-container .map-popup .leaflet-popup-content-wrapper {
    background: rgba(255, 255, 255, .8);
    box-sizing: 20px;
    box-shadow: none;
    padding: 5px;
  };

  #map-container .map-popup .leaflet-popup-content {
    color: #0089a5;
    font-size: 20px;
    font-weight: bold;
    margin: 8px 12px;

    display: flex;
    justify-content: space-around;
    align-items: center;        
  };

  #map-container .map-popup .leaflet-popup-content a {
    width: 40px;
    height: 40px;
    background: linear-gradient(45deg, rgb(0, 162, 255) 0%, rgba(102, 233, 40, 0.529) 100%);
    border-radius: 12px;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: background-color 0.2s;
    
    &:hover {
        background: linear-gradient(45deg, rgba(102, 233, 40, 0.529) 0%, rgb(0, 162, 255) 100%);
    }
} ;

  #map-container .map-popup .leaflet-popup-tip-container {
        display: none;
  };
`;