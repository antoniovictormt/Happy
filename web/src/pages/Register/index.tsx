import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import { Banner } from '../../components';

import {
  Container,
  Content,
  GoBack,
  Form,
  FormTitle,
  InputWrapper,
  Label,
  Input,
  Button
} from './styles';

export default function ForgotPassword() {
  const { goBack } = useHistory();

  return (
    <Container>
      <Banner />
      <Content>
        <GoBack onClick={goBack}>
          <FiArrowLeft size={26} color="rgb(255, 255, 255)" />
        </GoBack>
        <Form>
          <FormTitle>Criar um Novo Usuário</FormTitle>

          <InputWrapper>
            <Label>Nome de Usuário</Label>
            <Input
              type="text"
              required
            />
          </InputWrapper>

          <InputWrapper>
            <Label>E-mail</Label>
            <Input
              type="text"
              required
            />
          </InputWrapper>

          <InputWrapper>
            <Label>Senha</Label>
            <Input
              type="password"
              required
            />
          </InputWrapper>

          <Button>Enviar</Button>
        </Form>
      </Content>
    </Container>
  )
}
