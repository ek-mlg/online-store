import React from 'react';
import {NavLink} from "react-router-dom";
import {PATH} from "../pages/Pages";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  gap: 15px;
  background: lightskyblue;
`

const StyledNavLink = styled(NavLink)`
  color: black;
  &.active {
    color: red;
  }
`

const Navi = () => {
    return (
        <StyledNav>
            <StyledNavLink to={PATH.MAIN}
            >
                Main
            </StyledNavLink>
            <StyledNavLink to={PATH.CATALOG}
            >
                Catalog
            </StyledNavLink>
        </StyledNav>
    );
};

export default Navi;