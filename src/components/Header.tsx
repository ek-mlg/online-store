import React from 'react';
import styled from "styled-components";

const HeaderWrapper = styled.header`
    background: gray;
    width: 100%;
    height: 80px;
`

const Header = () => {
    return (
        <HeaderWrapper>
            Nav
        </HeaderWrapper>
    );
};

export default Header;