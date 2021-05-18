import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <>
      <Container>
        <p>Tesla&copy;{new Date().getFullYear()}</p>
        <a href="lsk">Privacy & Legal</a>
        <a href="lsk">Contact</a>
        <a href="lsk">Careers</a>
        <a href="lsk">Get Newsletter</a>
        <a href="lsk">News</a>
        <a href="lsk">Forums</a>
        <a href="lsk">Locations</a>
      </Container>
      <Container>
        <p>
          This Landing Page UI is taken from
          <a href="http://tesla.com" target="_blank" rel="noopener noreferrer">
            Tesla
          </a>
          2021, And the clone is created by
          <a
            href="http://akhlak-hossain-jim.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Akhlak Hossain Jim
          </a>
          &nbsp;&copy;&nbsp;{new Date().getFullYear()}
        </p>
      </Container>
    </>
  );
}

const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 30px;
  p,
  a {
    font-size: 12px;
    margin: 10px;
    text-decoration: none;
    font-weight: 600;
  }
`;

export default Footer;
