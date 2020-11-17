import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: .7;
  background: linear-gradient(to top, #00a2ff 0%, #66e92887 100%);

  @media(max-width: 750px){
    display: none;
  };
`;

export const Logo = styled.img`
    width: 80px;
    object-fit: cover;
`;

export const Title = styled.h1`
    font-size: 70px;
    font-weight: 800;
`;

export const City = styled.span`
  margin-top: 60px;

  font-size: 25px;
  font-weight: 800;
`;

export const State = styled.strong`
font-size: 30px;
`;