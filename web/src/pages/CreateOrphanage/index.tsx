import React, { ChangeEvent, FormEvent, useState } from "react";
import { Map, Marker, TileLayer } from "react-leaflet";
import { FiPlus, FiX } from "react-icons/fi";
import { LeafletMouseEvent } from "leaflet";
import { useHistory } from "react-router-dom";

import HeaderBar from "../../components/HeaderBar";
import SideBar from "../../components/SideBar";
import api from "../../services/api";
import mapIcon from "../../utils/mapIcon";

import "./styles.css";

export default function CreateOrphanage() {
  const history = useHistory();

  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

  const [about, setAbout] = useState('');
  const [images, setImages] = useState<File[]>([]);
  const [instructions, setInstructions] = useState('');
  const [name, setName] = useState('');
  const [opening_hours, setOpeningHours] = useState('');
  const [open_on_weekends, setOpenOnWeekends] = useState(true);
  const [previewImages, setPreviewImages] = useState<string[]>([]);
  const [whatsapp, setWhatsapp] = useState('');

  function handleMapClick(event: LeafletMouseEvent) {
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

    await api.post('orphanages', data);

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

    alert('Cadastro realizado com sucesso!');
    history.push('/')
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

  return (
    <div id="page-create-orphanage">
      <HeaderBar />
      <SideBar />

      <main>
        <form onSubmit={handleSubmit} className="create-orphanage-form">
          <fieldset>
            <legend>Formulário de Cadastro</legend>

            <Map
              center={[-8.0646842, -34.8955189]}
              style={{ width: '100%', height: 280 }}
              zoom={15}
              onclick={(handleMapClick)}
            >
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />

              {position.latitude !== 0 && (
                <Marker
                  interactive={false}
                  icon={mapIcon}
                  position={[position.latitude, position.longitude]}
                  required
                />
              )}
            </Map>

            <div className="input-block">
              <label htmlFor="name">Nome do orfanato</label>
              <input
                id="name"
                value={name}
                onChange={event => setName(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label className="label-about" htmlFor="about">Descrição do orfanato <p>(Máximo de 300 caracteres)</p></label>
              <textarea
                id="name"
                maxLength={300}
                value={about}
                onChange={event => setAbout(event.target.value)} />
            </div>

            <div className="input-block">
              <label htmlFor="whatsapp">Telefone para contato</label>
              <input
                id="name"
                maxLength={13}
                placeholder="5581987747555"
                value={whatsapp}
                onChange={event => setWhatsapp(event.target.value)} />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="images-container">
                {previewImages.map((image, i) => {
                  return (
                    <div key={image}>
                      <div className="imageWrapper">
                        <button className="imageButton" type='button' onClick={() => handleRemoveImage(i)}>
                          <FiX size={24} color='#FF669D' />
                        </button  >
                        <img src={image} alt={image} />
                      </div>
                    </div>
                  )
                })}
                <label htmlFor="image[]" className="new-image">
                  <FiPlus size={24} color="#15b6d6" />
                </label>

              </div>
              <input multiple onChange={handleSelectImages} type="file" id="image[]" />
            </div>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <div className="input-block">
              <label htmlFor="instructions">Instruções</label>
              <textarea
                id="instructions"
                value={instructions}
                onChange={event => setInstructions(event.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Hórario de funcionamento</label>
              <input
                id="opening_hours"
                value={opening_hours}
                onChange={event => setOpeningHours(event.target.value)} />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="button-select">
                <button
                  type="button"
                  className={open_on_weekends ? 'active' : ''}
                  onClick={() => setOpenOnWeekends(true)}
                >Sim
                </button>
                <button
                  type="button"
                  className={!open_on_weekends ? 'activeRed' : ''}
                  onClick={() => setOpenOnWeekends(false)}
                >Não
                </button>
              </div>
            </div>
          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </form>
      </main>
    </div>
  );
}