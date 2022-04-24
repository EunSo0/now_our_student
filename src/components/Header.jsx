import React from "react";
import styled from "@emotion/styled";
// import { VscAccount } from "react-icons/vsc";
import logo from "../images/logo_ho.png";

const Base = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 62px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgb(255, 255, 255);
  text-align: center;
  box-shadow: rgb(0 0 0 / 20%) 0px 1px 0px 0px;
  transition: background-color 200ms ease 0s;
  z-index: 10;
`;

const Navigation = styled.nav`
  margin: 0 auto;
  max-width: 70%;
`;

const MenuListWrapper = styled.div``;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 10px;
  display: flex;
`;

const MenuLeft = styled.li`
  display: flex;
  align-items: center;
  height: 62px;
  flex-shrink: 0;
  &:not(:first-child) {
    margin: 0 0 0 10px;
  }
`;

const MenuRight = styled.li`
  display: flex;
  align-items: center;
  height: 62px;
  flex-shrink: 1;
  margin: 0 0 0 auto;
`;

const MenuButton = styled.button`
  font-size: 15px;
  font-weight: ${({ active }) => (active ? "550" : "400")};
  color: ${({ active }) => (active ? "rgb(75,50,20)" : "rgb(100,100,100)")};
  text-decoration: ${({ active }) => (active ? "underline" : "none")};
  cursor: pointer;
  border: none;
  background: none;
`;

const Link = styled.a`
  text-decoration: none;
`;

// const Hello = styled.h3`
//   font-size: 13px;
//   font-weight: 400;
//   color: rgb(0, 0, 0);
//   margin: 0 0px 0 4px;
// `;

const Sign = styled.button`
  border-radius: 6px;
  font-weight: 1000;
  box-sizing: border-box;
  min-width: 72px;
  height: 32px;
  background: transparent;
  color: rgb(53, 53, 53);
  font-size: 13px;
  border: 1px solid rgba(116, 116, 123, 0.5);
  cursor: pointer;
  margin: 10px 8px;
`;

function Header() {
  const { pathname } = window.location;
  return (
    <Base>
      <Navigation>
        <MenuListWrapper>
          <MenuList>
            <MenuLeft>
              <Link href="/">
                <img src={logo} width={212} height={37} alt="logo" />
              </Link>
            </MenuLeft>
            <MenuLeft>
              <Link href="/student">
                <MenuButton active={pathname === "/student"}>
                  학생조회
                </MenuButton>
              </Link>
              <Link href="/score">
                <MenuButton active={pathname === "/score"}>성적조회</MenuButton>
              </Link>
            </MenuLeft>
            {/* <MenuRight>
              <VscAccount size={22} color="#696969" />
              <Hello>이은수님 안녕하세요!</Hello>
              <Sign>로그아웃</Sign>
            </MenuRight> */}
            <MenuRight>
              <Link href="/signin">
                <Sign>로그인</Sign>
              </Link>
              <Link href="/signup">
                <Sign>회원가입</Sign>
              </Link>
            </MenuRight>
          </MenuList>
        </MenuListWrapper>
      </Navigation>
    </Base>
  );
}

export default Header;
