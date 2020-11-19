import React, { useState, FormEvent, ChangeEvent, useEffect } from "react";
import { useHistory } from "react-router-dom";
import api from '../../services/api';
import { FiArrowLeft, FiPlus, FiX } from "react-icons/fi";
import { Map, Marker, TileLayer } from 'react-leaflet';

import { MapIcon } from '../../utils/mapIcon';
import { Form, HeaderBar, SideBar } from '../../components';
import created from '../../assets/created.svg';

import {
  ConfirmButton,
  ConfirmContainer,
  ConfirmImage,
  ConfirmInfo,
  ConfirmSubtitle,
  ConfirmTitle,
  Container,
  Inner,
} from './styles';

export default function CreateOrphanage() {
  const history = useHistory();

  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const { goBack } = useHistory();

  const [about, setAbout] = useState('');
  const [images, setImages] = useState<File[]>([]);
  const [instructions, setInstructions] = useState('');
  const [name, setName] = useState('');
  const [opening_hours, setOpeningHours] = useState('');
  const [open_on_weekends, setOpenOnWeekends] = useState(true);
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [whatsapp, setWhatsapp] = useState('');

  const [confirm, setConfirm] = useState(false);

  function handleMapClick(event: any) {
    const { lat, lng } = event.latlng;

    setPosition({
      latitude: lat,
      longitude: lng
    });
  };

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const { latitude, longitude } = position;

    const data = new FormData();

    data.append('about', about);
    data.append('instructions', instructions);
    data.append('latitude', String(latitude));
    data.append('longitude', String(longitude));
    data.append('name', name);
    data.append('opening_hours', opening_hours);
    data.append('open_on_weekends', String(open_on_weekends));
    data.append('whatsapp', whatsapp);

    images.forEach(image => {
      data.append('images', image);
    })

    /* console.log({
      about,
      instructions,
      images,
      latitude,
      longitude,
      name,
      opening_hours,
      open_on_weekends
    }) */

    await api.post('orphanages', data)
      .then(resp => {
        setConfirm(true)
      });
  };

  function goToMap() {
    history.push('/map')
  };

  function handleSelectImages(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) {
      return;
    }

    const selectedImages = Array.from(event.target.files)

    setImages(selectedImages);

    const selectedImagesPreview = selectedImages.map(image => {
      return URL.createObjectURL(image);
    });

    setPreviewImages(selectedImagesPreview);
  };

  function handleRemoveImage(i: number) {
    const currentFileImages = images.filter((image, index) => i === index ? null : image)
    const currentImages = previewImages.filter((image, index) => i === index ? null : image);

    setImages(currentFileImages)
    setPreviewImages(currentImages);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      setPosition({ latitude: position.coords.latitude, longitude: position.coords.longitude })
    });
  }, [])

  return (
    confirm ?
      (
        <ConfirmContainer>
          <ConfirmInfo>
            <ConfirmTitle>Ebaaa!</ConfirmTitle>
            <ConfirmSubtitle>
              O cadastro deu certo e foi enviado ao administrador para ser aprovado. Agora é só esperar :)
          </ConfirmSubtitle>
            <ConfirmButton onClick={goToMap}>Voltar para o mapa</ConfirmButton>
          </ConfirmInfo>

          <ConfirmImage src={created} alt='confirmed' />
        </ConfirmContainer>
      )
      :
      (

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

          <Inner>
            <Form.FormWrapper>
              <Form onSubmit={handleSubmit}>
                <Form.Fieldset>
                  <Form.Legend>Formulário de Cadastro</Form.Legend>

                  <Map
                    center={position.latitude !== 0 ? [position.latitude, position.longitude] : [-8.0646842, -34.8955189]}
                    style={{ width: '100%', height: 280 }}
                    zoom={15}
                    onclick={handleMapClick}
                  >
                    <TileLayer
                      url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                    />

                    {position.latitude === 0 ?
                      null
                      :
                      <Marker interactive={false} icon={MapIcon} position={[position.latitude, position.longitude]} />
                    }
                  </Map>

                  <Form.InputWrapper>
                    <Form.Label htmlFor="name">Nome do orfanato</Form.Label>
                    <Form.Input
                      id="name"
                      value={name}
                      onChange={e => setName(e.target.value)} />
                  </Form.InputWrapper>

                  <Form.InputWrapper>
                    <Form.Label htmlFor="about">
                      Descrição do orfanato
                      <Form.Span>
                        (Máximo de 300 caracteres)
                      </Form.Span>
                    </Form.Label>

                    <Form.TextArea
                      id="name"
                      maxLength={300}
                      value={about}
                      onChange={e => setAbout(e.target.value)} />
                  </Form.InputWrapper>

                  <Form.InputWrapper>
                    <Form.Label htmlFor="contact">Telefone para contato</Form.Label>
                    <Form.Input
                      id="name"
                      value={whatsapp}
                      onChange={event => setWhatsapp(event.target.value)} />
                  </Form.InputWrapper>

                  <Form.InputWrapper>
                    <Form.Label htmlFor="images">Fotos</Form.Label>

                    <Form.ImagesWrapper>
                      {previewImages.map((image, i) => {
                        return (
                          <div key={image}>
                            <Form.ImageWrapper >
                              <Form.ImageButton type='button' onClick={() => handleRemoveImage(i)}>
                                <FiX size={24} color='#FF669D' />
                              </Form.ImageButton>
                              <img src={image} alt={image} />
                            </Form.ImageWrapper>
                          </div>
                        )
                      })}

                      <Form.ImageLabel htmlFor="image[]">
                        <FiPlus size={24} color="#15b6d6" />
                      </Form.ImageLabel>

                      <Form.ImageInput multiple onChange={handleSelectImages} type="file" id="image[]" />
                    </Form.ImagesWrapper>
                  </Form.InputWrapper>
                </Form.Fieldset>

                <Form.Fieldset>
                  <Form.Legend>Visitação</Form.Legend>

                  <Form.InputWrapper>
                    <Form.Label htmlFor="instructions">Instruções</Form.Label>
                    <Form.TextArea id="instructions" value={instructions} onChange={e => setInstructions(e.target.value)} />
                  </Form.InputWrapper>

                  <Form.InputWrapper>
                    <Form.Label htmlFor="opening_hours">Horário de funcionamento</Form.Label>
                    <Form.Input
                      id="opening_hours"
                      value={opening_hours}
                      onChange={event => setOpeningHours(event.target.value)} />
                  </Form.InputWrapper>

                  <Form.InputWrapper>
                    <Form.Label htmlFor="open_on_weekends">Atende fim de semana</Form.Label>

                    <Form.SelectWrapper>
                      <Form.Select
                        type="button"
                        className={open_on_weekends ? 'active' : ''}
                        onClick={_ => setOpenOnWeekends(true)}
                      >
                        Sim
                </Form.Select>
                      <Form.Select
                        type="button"
                        className={open_on_weekends ? '' : 'active'}
                        onClick={_ => setOpenOnWeekends(false)}
                      >
                        Não
                </Form.Select>
                    </Form.SelectWrapper>
                  </Form.InputWrapper>

                </Form.Fieldset>

                <Form.Submit type="submit">
                  Confirmar
                </Form.Submit>

              </Form>
            </Form.FormWrapper>

          </Inner>
        </Container >
      )
  )
}