import React from 'react';
import {NavLink} from "react-router-dom";
import {path} from "../pages/Pages";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  gap: 15px;
  background: lightskyblue;
  margin-right: 100px;
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