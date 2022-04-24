import React from "react";
import styled from "@emotion/styled/";
import logo from "../images/logo_ver.png";

const All = styled.div`
  width: 100%;
  height: 100%;
`;

const Base = styled.div`
  flex: 1 0 auto;
  margin: 0px auto;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  padding: 40px 0px;
`;

const Group = styled.div`
  margin: 10px 0px;
`;

const Input = styled.input`
  font: inherit;
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #dfdfdf;
  width: 23rem;
  height: 1.5rem;
  max-width: 100%;
  margin: -1px auto;
  display: block;
`;

const Label = styled.h1`
  font-weight: 800;
  display: flex;
  font-size: 15px;
  margin: 10px;
`;
const Condition = styled.h1`
  font-weight: 800;
  display: flex;
  font-size: 12px;
  margin: 10px;
  color: rgb(130, 130, 130);
`;

const Text = styled.h1`
  font-size: 15px;
  text-align: center;
  color: rgb(150, 150, 150);
`;

const LabelL = styled.a`
  font-weight: 1000;
  display: flex;
  font-size: 20px;
  margin: 10px;
  color: rgb(100, 100, 100);
`;

const TextEmpha = styled.h1`
  font-size: 15px;
  text-align: center;
  margin: 0px;
`;

const Button = styled.button`
  font: inherit;
  font-weight: 800;
  background-color: #b6884c;
  color: #ffffff;
  border: 1px solid #b6884c;
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  margin: 15px auto;
  display: block;
  width: 24rem;
  height: 3rem;
`;
const Link = styled.a`
  text-decoration: none;
`;

const Img = styled.img`
  display: block;
  margin: 20px auto;
`;

function Signup() {
  return (
    <All>
      <Base>
        <Link href="/">
          <Img src={logo} width={142} height={108} alt="logo" />
        </Link>
        <LabelL>회원가입</LabelL>
        <Group>
          <Label>이름</Label>
          <Input type="text" id="name" />
        </Group>
        <Group>
          <Label>생년월일</Label>
          <Input type="text" id="birth" />
        </Group>
        <Group>
          <Label>아이디</Label>
          <Input
            placeholder="이메일 형식으로 입력해주세요"
            type="text"
            id="id"
          />
        </Group>
        <Group>
          <Label>비밀번호</Label>
          <Condition>
            영문,숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.
          </Condition>
          <Input type="password" id="password" />
          <Label>비밀번호 확인</Label>
          <Input type="password" id="confirmPassword" />
        </Group>
        <Group>
          <Label>휴대전화</Label>
          <Input type="text" id="number" />
        </Group>
        <Group>
          <Label>가입자신분</Label>
          <Input type="text" id="who" />
        </Group>
        <Group>
          <Label>과목</Label>
          <Input type="text" id="subject" />
        </Group>
        <Group>
          <Label>소속</Label>
          <Input type="text" id="ac" />
        </Group>
        <Button>회원가입하기</Button>
        <Text>이미 가입하셨나요?</Text>
        <Link href="/signin">
          <TextEmpha>로그인</TextEmpha>
        </Link>
      </Base>
    </All>
  );
}

export default Signup;
