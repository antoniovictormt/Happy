import React, { /* useContext, */ useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FiMapPin, FiPower, FiAlertCircle } from 'react-icons/fi';

import { MiniMap, SideBar } from '../../../components';
import api from '../../../services/api';

import notFound from '../../../assets/not-found.svg';
import Deleted from '../../../assets/deleted.svg';

import {
  Container,
  Content,
  OrphanagesContainer,
  OrphanagesContent,
  TitleContainer,
  Title,
  OrphanagesTotal,
  NotFoundContainer,
  NotFoundContent,
  NotFoundMessage,
  DeletedContainer,
  DeletedInfo,
  DeletedTitle,
  DeletedSubtitle,
  DeletedButton,
  DeletedImage,
} from './styles';

/* import { UserContext } from '../../../contexts/UserContext';
 */

interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
};


export default function Dashboard() {
  const [orphanagesContainer, setOrphanagesContainer] = useState(0); // 0 -> registered orphanages, 1 -> pending entries
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);
/*   const [orphanagesNotApproved, setOrphanagesNotApproved] = useState<Orphanage[]>([]);
 */
/*   const { setUser } = useContext(UserContext);
 */  const history = useHistory()

  const [deletedContainer, setDeletedContainer] = useState(false);

  useEffect(() => {
    api.get('orphanages').then(response => {
      setOrphanages(response.data);
    });
  }, []);

  /* useEffect(() => {
    api.get('/orphanages?filter=not_approved')
      .then(response => { setOrphanagesNotApproved(response.data.orphanages); })
  }, []) */

  function EditOrphanage(id: number) {
    history.push(`/orphanages/edit/${id}`);
  };

  async function deleteOrphanage(id: number) {
    await api.delete(`/orphanages/${id}`);
    setDeletedContainer(true);

    const currentOrphanages = orphanages.filter(orphanage => orphanage.id !== id ? orphanage : null);
    setOrphanages(currentOrphanages);
  };

  function ApproveOrphanage(id: number) {
    history.push(`/orphanages/approve/${id}`)
  };

  function switchContainer() {
    if (orphanagesContainer === 0) {
      setOrphanagesContainer(1);
      return;
    };

    setOrphanagesContainer(0);
  };

  function logout() {
    /*  setUser!(undefined);*/
    history.push('/');
  };

  return (
    deletedContainer ?
      (
        <DeletedContainer>
          <DeletedInfo>
            <DeletedTitle>Excluído</DeletedTitle>
            <DeletedSubtitle>Orfanato deletado</DeletedSubtitle>
            <DeletedButton onClick={_ => setDeletedContainer(false)}>Voltar</DeletedButton>
          </DeletedInfo>
          <DeletedImage src={Deleted} />
        </DeletedContainer>
      )
      :
      (
        <Container>
          <SideBar.FixedContainer>
            <SideBar.Logo />
            <SideBar.GroupIcon>
              <SideBar.Icon isActive={orphanagesContainer === 0 ? true : false} type="button" onClick={switchContainer}>
                <FiMapPin size={24} />
              </SideBar.Icon>
              <SideBar.Icon isActive={orphanagesContainer === 1 ? true : false} type="button" onClick={switchContainer}>
                <FiAlertCircle size={24} />
              </SideBar.Icon>
            </SideBar.GroupIcon>
            <SideBar.Icon isActive={false} type="button" onClick={logout}>
              <FiPower size={24} />
            </SideBar.Icon>
          </SideBar.FixedContainer>

          <Content>
            {orphanagesContainer === 0 ?
              (
                <OrphanagesContainer>
                  <TitleContainer>
                    <Title>
                      Orfanatos cadastrados
                    </Title>
                    <OrphanagesTotal>{orphanages.length} Orfanatos Cadastrados</OrphanagesTotal>
                  </TitleContainer>
                  <OrphanagesContent>
                    {orphanages.map(orphanage => (
                      <MiniMap
                        key={orphanage.id}
                        name={orphanage.name}
                        latitude={orphanage.latitude}
                        longitude={orphanage.longitude}
                        Edit={() => EditOrphanage(orphanage.id)}
                        Delete={() => deleteOrphanage(orphanage.id)}
                      />
                    ))}
                  </OrphanagesContent>
                </OrphanagesContainer>
              )
              :
              (
                <OrphanagesContainer>
                  <TitleContainer>
                    <Title>Cadastros pendentes</Title>
                    <OrphanagesTotal>
                      {'Nenhum Cadastro de Orfanato Pendente'}
                    </OrphanagesTotal>
                  </TitleContainer>
                  {orphanages.length ?
                    <OrphanagesContent>
                      {orphanages.map(orphanage => (
                        <MiniMap
                          key={orphanage.id}
                          name={orphanage.name}
                          latitude={orphanage.latitude}
                          longitude={orphanage.longitude}
                          RegistrationApproval={() => ApproveOrphanage(orphanage.id)}
                          Edit={() => EditOrphanage(orphanage.id)}
                          Delete={() => deleteOrphanage(orphanage.id)}
                        />
                      ))}
                    </OrphanagesContent>
                    :
                    <NotFoundContainer>
                      <NotFoundContent>
                        <img src={notFound} alt="Nenhum cadastro de orfanato encontrado" />
                        <NotFoundMessage>Nenhum cadastro pendente</NotFoundMessage>
                      </NotFoundContent>
                    </NotFoundContainer>
                  }
                </OrphanagesContainer>
              )
            }
          </Content>
        </Container>
      )
  );
};
