import React from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { FiEdit, FiTrash, FiCheck, FiX } from 'react-icons/fi';

import { MapIcon } from '../../utils/mapIcon';

import {
  Container,
  MapContainer,
  Info,
  OrphanageName,
  ButtonWrapper,
  ButtonApproval,
  ButtonEdit,
  ButtonDelete,
} from './styles';

interface MiniMapProps {
  name: string;
  latitude: number;
  longitude: number;
  Edit?(e: React.MouseEvent<HTMLElement>): void;
  Delete?(e: React.MouseEvent<HTMLElement>): void;
  RegistrationApproval?(e: React.MouseEvent<HTMLElement>): void;
};

export default function MiniMap({ name, latitude, longitude, Edit, Delete, RegistrationApproval }: MiniMapProps) {
  return (
    <Container>
      <MapContainer>
        <Map
          center={[latitude, longitude]}
          zoom={15}
          style={{
            width: '100%',
            height: '100%',
            borderTopLeftRadius: '2rem',
            borderTopRightRadius: '2rem',
          }}
          dragging={false}
          touchZoom={false}
          zoomControl={false}
          scrollWheelZoom={false}
          doubleClickZoom={false}
        >
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
          />
          <Marker
            interactive={false}
            icon={MapIcon}
            position={[latitude, longitude]}
          />
        </Map>
      </MapContainer>
      <Info>
        <OrphanageName>{name}</OrphanageName>

        <ButtonWrapper>
          {RegistrationApproval ?
            (
              <>
                <ButtonApproval type="button" onClick={RegistrationApproval}>
                  <FiCheck size={24} color="#fff" />
                </ButtonApproval>
                <ButtonEdit type="button" onClick={Edit}>
                  <FiEdit size={24} color="#fff" />
                </ButtonEdit>
                <ButtonDelete type="button" onClick={Delete}>
                  <FiX size={24} color="#fff" />
                </ButtonDelete>
              </>
            )
            :
            (
              <>
                <ButtonEdit type="button" onClick={Edit}>
                  <FiEdit size={24} color="#fff" />
                </ButtonEdit>
                <ButtonDelete type="button" onClick={Delete}>
                  <FiTrash size={24} color="#fff" />
                </ButtonDelete>
              </>
            )
          }
        </ButtonWrapper>

      </Info>
    </Container>
  );
}
