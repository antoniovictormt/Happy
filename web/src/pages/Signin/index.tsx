import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft, FiCheck } from 'react-icons/fi';

import { Banner } from '../../components/';

import {
  Container,
  GoBack,
  Content,
  Form,
  FormTitle,
  InputWrapper,
  Input,
  CheckWrapper,
  Check,
  Label,
  Help,
  ButtonRegister
} from './styles';

export default function Signin() {
  const [remember, setRemember] = useState(false);

  const { goBack } = useHistory();

  return (
    <Container>
      <Banner />
      <Content>
        <GoBack onClick={goBack}>
          <FiArrowLeft size={26} color="rgb(255, 255, 255)" />
        </GoBack>
        <Form>
          <FormTitle>Fazer login</FormTitle>
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

          <CheckWrapper>
            <Check type="button" onClick={_ => setRemember(!remember)} style={{ backgroundColor: remember ? '#37C77F' : '#F5F8FA' }}>
              <FiCheck className='Button' size={18} color={'rgb(245, 248, 250)'} />
            </Check>
            <Label>Lembrar me</Label>
            <Help to="/forgot-password">Esqueceu sua senha?</Help>
          </CheckWrapper>

          <ButtonRegister to="/dashboard">Entrar</ButtonRegister>
          <ButtonRegister to="/register">Criar uma Conta</ButtonRegister>
        </Form>
      </Content>
    </Container>
  );
};
