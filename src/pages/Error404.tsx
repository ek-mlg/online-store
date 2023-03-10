import React from 'react';
import styled from "styled-components";

const Error404Wrapper = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 70px;
  height: 100vh;
  background: #f0fff1;
`

export const Error404 = () => {
    return (
        <div>
            <Error404Wrapper>error 404, page not found</Error404Wrapper>
        </div>
    );
};
