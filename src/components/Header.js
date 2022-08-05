import React from 'react';
import styled from 'styled-components'

export const StyledHeader = styled.header`
  background: red;
  height: 200px;

  h1 {
    margin: 0;
    padding-top: 75px;
    text-align: center;
    color: white;
    font-size: 3em;
  }
  .specialHeading {
    font-size: 100px;
  }
  &:hover {
    background: purple;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <h1 className="specialHeading">Welcome</h1>
    </StyledHeader>
  );
}

export default Header;
