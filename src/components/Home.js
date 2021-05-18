import React from "react";
import styled from "styled-components";
import Homedata from "../data/Homedata";
import HomeSection from "./HomeSection";

function Home() {
  return (
    <Container>
      {Homedata.map((e) => (
        <HomeSection
          key={e.title}
          title={e.title}
          subTitle={e.subTitle}
          subTitleButton={e.subTitleButton}
          LeftButtonText={e.LeftButtonText}
          RightButtonText={e.RightButtonText}
          backgroundImg={e.backgroundImg}
          arrow={e.arrow}
        />
      ))}
    </Container>
  );
}

const Container = styled.main`
  z-index: 1 !important;
`;

export default Home;
