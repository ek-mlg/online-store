import React from 'react';
import {NavLink} from "react-router-dom";
import {path} from "../pages/Pages";
import styled from "styled-components";

const StyledNav = styled.nav`
  background: lightskyblue;
  margin-right: 100px;
  display: flex;
  align-items: center;
  
`

const StyledNavLink = styled(NavLink)`
  color: black;
  background: coral;
  margin: 20px;
  cursor: pointer;
  &.active {
    color: red;
  }
`

const Navi = () => {
    return (
        <StyledNav>
            <StyledNavLink to={path.main}
            >
                Main
            </StyledNavLink>
            <StyledNavLink to={path.catalog}
            >
                Catalog
            </StyledNavLink>
        </StyledNav>
    );
};

export default Navi;