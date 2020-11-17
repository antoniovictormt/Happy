import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  width: 100vw;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: .3;
  background-color: #fff;
  position: relative;

  @media(max-width: 750px){
    flex: 1;
  };
`;

export const GoBack = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5.8rem;
    height: 5.8rem;
    border-radius: 1.6rem;
    position: absolute;
    top: 5%;
    right: 10%;
    background: linear-gradient(45deg, #00a2ff 0%, #66e92887 100%);
    cursor: pointer;

    &:hover {
        background: linear-gradient(45deg,#66e92887 0%, #00a2ff 100%);
    }    
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 40px;
`;

export const FormTitle = styled.h1`
    color: #5C8599;
    font-size: 3.2rem;
    line-height: 2.4rem;
    font-weight: bold;
    margin-bottom: 5rem;
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-bottom: .5rem;
`;

export const Label = styled.label`
    color: #8FA7B2;
    margin: 1rem 0;
`;

export const Input = styled.input`
    width: 36rem;
    height: 6.4rem;
    border-radius: 2rem;
    border: 1px solid #D3E2E5;
    background-color: #F5F8FA;
    outline: none;
    padding: 0 2.5rem;
`;

export const Button = styled.button`
    width: 36rem;
    height: 6.4rem;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #37C77F;
    color: #fff;
    border: none;
    border-radius: 2rem;
    margin-top: 3rem;

    cursor: pointer;

    &:hover{
			background: rgb(54, 207, 130);
    }
`;