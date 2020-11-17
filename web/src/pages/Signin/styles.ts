import styled from 'styled-components';
import { Link as ReactRouterLink } from 'react-router-dom';

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

export const CheckWrapper = styled(InputWrapper)`
    flex-direction: row;
    align-items: center;
    margin-top: 1.5rem;
`;

export const Check = styled.button`
    width: 2.4rem;
    height: 2.4rem;
    border: 1px solid #D3E2E5;
    border-radius: .8rem;
    background-color: #F5F8FA;
    box-sizing: border-box;
    margin-right: 1.7rem;
    margin-left: 1.7rem;
    outline: none;
		cursor: pointer;
		
		.Button {
			display: flex;
			margin: auto;
		}

    .check {
        background-color: #37C77F;
    };
`;

export const Help = styled(ReactRouterLink)`
    color: #8FA7B2;
    margin-left: auto;
    margin-right: 15px;

    text-decoration: none;
		
		cursor: pointer;

    &:hover{
			color: rgb(54, 207, 130);
		}
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

export const ButtonRegister = styled(ReactRouterLink)`
    width: 36rem;
    height: 6.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;

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

export const Error = styled.strong`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FF669D;
    background-color: #FDF0F5;
    height: 6.4rem;
    border-radius: 2rem;
`;