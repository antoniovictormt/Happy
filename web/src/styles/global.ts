import { createGlobalStyle } from 'styled-components';
import 'leaflet/dist/leaflet.css';

export const GlobalStyles = createGlobalStyle`
  * {    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    };

  body {
    color: rgb(255, 255, 255);
    background: rgb(235, 242, 245);
    };

  body, input, button, textarea {
    font: 600 1.8rem Nunito, sans-serif;
  };
  
  .leaflet-control-attribution.leaflet-control {
    display: none;
  }
`;