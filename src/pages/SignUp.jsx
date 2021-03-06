import React, { useState, useCallback } from "react";
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
  height: 100px;
`;

const GroupWrap = styled.div`
  display: flex;
  height: 100px;
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

const Select = styled.select`
  position: relative;
  width: 185px;
  height: 40px;
  border: 1px solid #dfdfdf;
  margin: 0 10px 0 7px;
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [phone, setPhone] = useState("");

  const [emailMessage, setEmailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");
  const [phoneMessage, setPhoneMessage] = useState("");

  const [isEmail, setIsEmail] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  const [isPhone, setIsPhone] = useState(false);
  // const router = useRouter();

  // ?????????
  const onChangeEmail = useCallback((e) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage("????????? ???????????? ??????????????????.");
      setIsEmail(false);
    } else {
      setEmailMessage("");
      setIsEmail(true);
    }
  }, []);

  // ????????????
  const onChangePassword = useCallback((e) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    const passwordCurrent = e.target.value;
    setPassword(passwordCurrent);

    if (!passwordRegex.test(passwordCurrent)) {
      setPasswordMessage(
        "??????+?????????+???????????? ???????????? 8?????? ?????? ??????????????????."
      );
      setIsPassword(false);
    } else {
      setPasswordMessage("");
      setIsPassword(true);
    }
  }, []);

  // ???????????? ??????
  const onChangePasswordConfirm = useCallback(
    (e) => {
      const passwordConfirmCurrent = e.target.value;
      setPasswordConfirm(passwordConfirmCurrent);

      if (password === passwordConfirmCurrent) {
        setPasswordConfirmMessage("??????????????? ???????????????.");
        setIsPasswordConfirm(true);
      } else {
        setPasswordConfirmMessage("");
        setIsPasswordConfirm(false);
      }
    },
    [password]
  );

  const onChangePhone = useCallback((e) => {
    const phoneRegex = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
    const phoneCurrent = e.target.value;
    setPhone(phoneCurrent);

    if (!phoneRegex.test(phoneCurrent)) {
      setPhoneMessage("????????? ??????????????????.");
      setIsPhone(false);
    } else {
      setPhoneMessage("");
      setIsPhone(true);
    }
  }, []);

  return (
    <All>
      <Base>
        <Link href="/">
          <Img src={logo} width={142} height={108} alt="logo" />
        </Link>
        <LabelL>????????????</LabelL>
        <form>
          <Group>
            <Label>??????</Label>
            <Input type="text" id="name" />
          </Group>
          <Group>
            <Label>????????????</Label>
            <Input type="text" id="birth" />
          </Group>
          <Group>
            <Label>?????????</Label>
            <Input
              placeholder="????????? ???????????? ??????????????????"
              type="text"
              id="id"
              onChange={onChangeEmail}
            />
            {email.length > 0 && <Condition>{emailMessage}</Condition>}
          </Group>
          <Group>
            <Label>????????????</Label>
            <Input type="password" id="password" onChange={onChangePassword} />
            {password.length > 0 && <Condition>{passwordMessage}</Condition>}
          </Group>
          <Group>
            <Label>???????????? ??????</Label>
            <Input
              type="password"
              id="confirmPassword"
              onChange={onChangePasswordConfirm}
            />
            {passwordConfirm.length > 0 && (
              <Condition>{passwordConfirmMessage}</Condition>
            )}
          </Group>
          <Group>
            <Label>????????????</Label>
            <Input type="text" id="number" onChange={onChangePhone} />
            {phone.length > 0 && <Condition>{phoneMessage}</Condition>}
          </Group>
          <GroupWrap>
            <Group>
              <Label>???????????????</Label>
              <Select>
                <option>?????????</option>
                <option>??????</option>
              </Select>
            </Group>
            <Group>
              <Label>??????</Label>
              <Select>
                <option>??????</option>
                <option>??????</option>
                <option>??????</option>
              </Select>
            </Group>
          </GroupWrap>
          <Group>
            <Label>??????</Label>
            <Input type="text" id="ac" />
          </Group>
          <Button
            disabled={!(isEmail && isPassword && isPasswordConfirm && isPhone)}
          >
            ??????????????????
          </Button>
        </form>
        <Text>?????? ???????????????????</Text>
        <Link href="/signin">
          <TextEmpha>?????????</TextEmpha>
          <br />
        </Link>
      </Base>
    </All>
  );
}

export default Signup;
