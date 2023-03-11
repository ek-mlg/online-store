import React, {useState} from 'react';
import styled from "styled-components";
import ButtonComponent from "../components/ButtonComponent";

const MainWrapper = styled.main`
  height: 100vh;
  background: beige;
`

const TestText = styled.h1`
margin: 0;
`

const Main = () => {

    const [text, setText] = useState('hello')

    return (
        <MainWrapper>
            <TestText>{text}</TestText>
            <ButtonComponent onClick={()=> setText('ты лох')} name={'Click me'}/>
        </MainWrapper>
    );
};

export default Main;