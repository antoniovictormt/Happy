import React, { useEffect, useState } from 'react';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import api from '../../services/api';

import { SideBar } from '../../components';
import { MapIconMarker } from '../../utils/mapIcon';


import {
  MapStyle,
  Container,
  Link,
  LinkCreate
} from './styles';

interface Orphanage {
  id: number;
  latitude: number,
  longitude: number,
  name: string
}

export default function OrphanagesMap() {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);
  const [position, setPosition] = useState({ longitude: 0, latitude: 0, })

  useEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data);
    });

    navigator.geolocation.getCurrentPosition(position => {
      setPosition({ latitude: position.coords.latitude, longitude: position.coords.longitude })
    });
  }, []);

  return (
    <>
      <MapStyle />
      <Container id="map-container">
        <SideBar>
          <SideBar.Header>
            <SideBar.Logo />

            <SideBar.Title>Escolha um orfanato no mapa</SideBar.Title>
            <SideBar.SubTitle>Muitas crianças estão esperando a sua visita :)</SideBar.SubTitle>
          </SideBar.Header>

          <SideBar.Footer>
            <SideBar.City>Recife</SideBar.City>
            <SideBar.State>Pernambuco</SideBar.State>
          </SideBar.Footer>
        </SideBar>

        <Map
          center={position.latitude !== 0 ? [position.latitude, position.longitude] : [-8.0646842, -34.8955189]} // array pq são duas propríedades
          zoom={15}
          style={{ width: '100%', height: '100%' }}
        >
          {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
          />

          {orphanages.map(orphanage => (
            <Marker
              key={orphanage.id}
              position={[orphanage.latitude, orphanage.longitude]}
              icon={MapIconMarker}
            >
              <Popup
                closeButton={false}
                minWidth={240}
                maxWidth={240}
                minHeight={42}
                maxHeight={100}
                className="map-popup">
                {orphanage.name}
                <Link to={`/orphanages/${orphanage.id}`}>
                  <FiArrowRight size={20} color="rgb(255, 255, 255)" />
                </Link>
              </Popup>
            </Marker>
          ))}

        </Map>

        <LinkCreate to="/orphanages/create">
          <FiPlus size={32} color="rgb(255, 255, 255)" />
        </LinkCreate>
      </Container>
    </>
  );
};
