import React from "react";
import styled from "@emotion/styled";
import Header from "../components/Header";
import mainText from "../images/main_text.png";
import mainImg from "../images/main_img.png";

const Main = styled.div`
  background-color: rgb(240, 240, 240);
  width: 100%;
  height: 85%;
`;

const Wrap = styled.div`
  flex: 1 0 auto;
  margin: auto;
  max-width: 1000px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;
const Img = styled.img`
  display: flex;
  margin: 0 3rem;
`;

function MainPage() {
  return (
    <>
      <Header />
      <Main>
        <Wrap>
          <Img src={mainImg} width={530} height={415} alt="logo" />
          <Img src={mainText} width={260} height={255} alt="logo" />
        </Wrap>
      </Main>
    </>
  );
}

export default MainPage;
