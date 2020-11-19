import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Map, Marker, TileLayer } from "react-leaflet";
import { FaWhatsapp } from "react-icons/fa";
import { FiClock, FiInfo, FiArrowLeft } from "react-icons/fi";

import { HeaderBar, SideBar } from '../../components';
import { MapIcon } from '../../utils/mapIcon';
import api from '../../services/api';

import {
  Container,
  Content,
  Details,
  Image,
  Images,
  Button,
  ImageButton,
  DetailsContent,
  Name,
  Description,
  MapContainer,
  DetailsFooter,
  Hr,
  InstructionTitle,
  OpenDetails,
  DetailHour,
  DetailOpenOnWeekends,
  Contact,
} from './styles';

interface Orphanage {
  name: string,
  latitude: number,
  longitude: number,
  about: string,
  instructions: string,
  opening_hours: string,
  open_on_weekends: string,
  whatsapp: string,
  images: Array<
    {
      id: number,
      url: string,
    }>;
}

interface OrphanageParams {
  id: string;
}

export default function Orphanage() {
  const params = useParams<OrphanageParams>();
  const [orphanage, setOrphanage] = useState<Orphanage>();
  const [activeImageIndex, setactiveImageIndex] = useState(0);
  const { goBack } = useHistory();

  useEffect(() => {
    api.get(`orphanages/${params.id}`).then(response => {
      setOrphanage(response.data);
    });
  }, [params.id]);

  if (!orphanage) {
    return <p>Loading</p>;
  }

  return (
    <Container>
      <SideBar.FixedContainer>
        <SideBar.Logo />
        <SideBar.Footer>
          <SideBar.Button type={'button'} onClick={goBack}>
            <FiArrowLeft size={24} color="#FFF" />
          </SideBar.Button>
        </SideBar.Footer>
      </SideBar.FixedContainer>

      <HeaderBar>
        <HeaderBar.Logo />
        <HeaderBar.Button isActive={false} type="button" onClick={goBack}>
          <FiArrowLeft size={24} />
        </HeaderBar.Button>
      </HeaderBar>

      <Content>
        <Details>
          <Image src={orphanage?.images[activeImageIndex]?.url} alt={orphanage?.name} />

          <Images>
            {orphanage?.images.map((image, i) => (
              <Button
                onClick={_ => setactiveImageIndex(i)}
                type="button"
                key={image.id}
                className={activeImageIndex === i ? 'active' : ''}
              >
                <ImageButton src={image.url} alt={orphanage.name} />
              </Button>
            ))}
          </Images>

          <DetailsContent>
            <Name>{orphanage?.name}</Name>
            <Description>
              {orphanage?.instructions}
            </Description>

            <MapContainer>
              <Map
                // center={[orphanage?.latitude, orphanage?.longitude]} -> ERROR -> Alternative bellow!
                center={[orphanage?.latitude ? orphanage.latitude : 0, orphanage?.longitude ? orphanage.longitude : 0]}
                zoom={16}
                style={{ width: '100%', height: 280 }}
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
                  position={[orphanage?.latitude ? orphanage.latitude : 1, orphanage?.longitude ? orphanage.longitude : 1]}
                />
              </Map>

              <DetailsFooter>
                <a target="_blank" rel="noopener noreferrer" href={`https://www.google.com/maps/dir/?api=1&destination=${orphanage?.latitude},${orphanage?.longitude}`}>
                  Ver rotas no Google Maps
                </a>
              </DetailsFooter>
            </MapContainer>

            <Hr />

            <InstructionTitle>Instruções para visita</InstructionTitle>
            <Description>{orphanage?.instructions}</Description>

            <OpenDetails>
              <DetailHour>
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta <br />
                {orphanage?.opening_hours}
              </DetailHour>
              {orphanage?.open_on_weekends ?
                <DetailOpenOnWeekends>
                  <FiInfo size={32} color="#39CC83" />
                  Atendemos <br />
                  fim de semana
                </DetailOpenOnWeekends>
                :
                <DetailOpenOnWeekends className="dont-open">
                  <FiInfo size={32} color="#FF669D" />
                  Não atendemos <br />
                  fim de semana
                </DetailOpenOnWeekends>
              }
            </OpenDetails>

            <Contact href={`https://wa.me/+55${orphanage?.whatsapp}`} target='_blank' rel="noopener noreferrer">
              <FaWhatsapp size={20} />
              Entrar em contato
            </Contact>
          </DetailsContent>
        </Details>
      </Content>
    </Container>
  );
}