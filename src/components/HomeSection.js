import React from "react";
import styled from "styled-components";

function HomeSection({
  title,
  subTitle,
  subTitleButton,
  LeftButtonText,
  RightButtonText,
  backgroundImg,
  arrow,
}) {
  return (
    <Container bgImage={backgroundImg}>
      <Title>
        <h1>{title}</h1>
        <h2>
          {subTitle} <a href="jf">{subTitleButton}</a>
        </h2>
      </Title>
      <Buttons>
        <ButtonWraper>
          <LeftButton>{LeftButtonText}</LeftButton>
          {RightButtonText && <RightButton>{RightButtonText}</RightButton>}
        </ButtonWraper>
        <DownArrow>
          {arrow && <img src="/images/down-arrow.svg" alt="" />}
        </DownArrow>
      </Buttons>
    </Container>
  );
}

const Container = styled.section`
  width: 100vw;
  height: 100vh;
  /* background-color: rebeccapurple; */
  background-image: url("/images/model-s.jpg");
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.div`
  padding-top: 15vh;
  text-align: center;
  h1 {
    font-size: 40px;
    @media (max-width: 768px) {
      font-size: 36px;
    }
  }
  h2 {
    font-size: 14px;
    color: #5c5e62;
    a {
      color: #393c41;
      &:hover {
        color: #000000;
        font-weight: 700;
      }
    }
  }
`;

const Buttons = styled.div``;

const ButtonWraper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 7px;
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  margin: 8px;
  @media (max-width: 548px) {
    width: 90vw !important;
  }
`;

const RightButton = styled(LeftButton)`
  background-color: #e1dcdc;
  color: rgb(23, 26, 32);
`;

const DownArrow = styled.div`
  height: 40px;
  margin-bottom: 15px;
  img {
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
  }
`;

export default HomeSection;
