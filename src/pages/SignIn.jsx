import styled from "@emotion/styled/";
import React from "react";
import logo from "../images/logo_ver.png";

const Img = styled.img`
  display: block;
  margin: 20px auto;
`;

const All = styled.div`
  width: 100%;
  height: 100%;
`;

const Base = styled.div`
  flex: 1 0 auto;
  margin: 0px auto;
  max-width: 300px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  padding: 40px 0px;
`;
const Input = styled.input`
  font: inherit;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #dfdfdf;
  width: 15rem;
  height: 2rem;
  max-width: 100%;
  margin: -1px auto;
  display: block;
`;
const Button = styled.button`
  font: inherit;
  background-color: #56c271;
  color: #ffffff;
  border: 1px solid #56c271;
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  margin: 15px auto;
  display: block;
  width: 16rem;
  height: 3rem;
`;

const Text = styled.a`
  font-weight: 800;
  display: flex;
  font-size: 14px;
  text-align: center;
  color: rgb(100, 100, 100);
  margin: 3px;
`;

const Link = styled.a`
  text-decoration: none;
`;

function Signin() {
  return (
    <All>
      <Base>
        <Link href="/">
          <Img src={logo} width={142} height={108} alt="logo" />
        </Link>
        <Input placeholder="이메일" type="text" id="email" />
        <Input placeholder="비밀번호" type="password" id="password" />
        <Button>로그인</Button>
        <Link href="/signup">
          <Text>회원가입</Text>
        </Link>
        <Link href="/">
          <Text>비밀번호찾기</Text>
        </Link>
      </Base>
    </All>
  );
}

export default Signin;
