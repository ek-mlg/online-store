import React from 'react';
import styled from "styled-components";
import Navi from "./Navi";
import {path} from "../pages/Pages";
import {NavLink} from "react-router-dom";

const HeaderWrapper = styled.header`
  background: gray;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
`

const LogoNavLink = styled(NavLink)`
  font-size: 35px;
  color: white;
  display: flex;
  align-items: center;
  cursor: pointer;
  background: black;
`

const Header = () => {
    return (
        <HeaderWrapper>
            <LogoNavLink to={path.main}>Online-store</LogoNavLink>
            <Navi />
        </HeaderWrapper>
    );
};

export default Header;