import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;

  @media (max-width: 750px) {
    display: unset;
  }
`;

export const Content = styled.div`
  flex: 1;
`;