import React from "react";
import styled from "@emotion/styled";
import Header from "../components/Header";
import logo from "../images/logo_color.png";
// import Navigation from "../components/Navigation";

const Img = styled.img`
  display: block;
  margin: 100px auto 0;
`;

const Text = styled.h2`
  font-size: 15px;
  text-align: center;
  color: rgb(90, 90, 90);
`;

const Link = styled.a`
  text-decoration: none;
`;

function MainPage() {
  return (
    <>
      <Header />
      <Img src={logo} width={500} height={500} alt="logo" />
      <Link href="/signin">
        <Text>로그인</Text>
      </Link>
      <Link href="/signup">
        <Text>회원가입</Text>
      </Link>
    </>
  );
}

export default MainPage;
