import React from "react";
import styled from "styled-components";

function Header() {
  return <Container>Header</Container>;
}

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export default Header;
