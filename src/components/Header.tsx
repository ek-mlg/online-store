import React from 'react';
import styled from "styled-components";
import Navi from "./Navi";

const HeaderWrapper = styled.header`
  background: gray;
  width: 100%;
  height: 80px;
  display: flex;
`

const Header = () => {
    return (
        <HeaderWrapper>
            <Navi />
        </HeaderWrapper>
    );
};

export default Header;