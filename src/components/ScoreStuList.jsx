/* eslint-disable react/button-has-type */
import React from "react";
import styled from "@emotion/styled/";

const TR = styled.tr`
  padding: 3px;
`;
const TD = styled.td`
  padding: 3px;
  border: 1px solid #444444;
  text-align: center;
  height: 50px;
`;
const GroupWrap = styled.div`
  display: flex;
`;
const Kind = styled.button`
  border-radius: 6px;
  font-weight: 1000;
  box-sizing: border-box;
  width: 100px;
  height: 40px;
  background: transparent;
  color: rgb(53, 53, 53);
  font-size: 15px;
  border: 1px solid rgba(116, 116, 123, 0.5);
  cursor: pointer;
  align-items: center;
  justify-content: center;
  display: flex;
  margin: auto;
`;

const Link = styled.a`
  text-decoration: none;
  display: flex;
  margin: auto;
`;

function ScoreStuList({ stuName, stuSchool, stuStartGrade, stuSelectedSub }) {
  const { pathname } = window.location;
  return (
    <TR>
      <TD>{stuName}</TD>
      <TD>{stuSchool}</TD>
      <TD>{stuStartGrade}</TD>
      <TD>{stuSelectedSub}</TD>
      <TD>
        <GroupWrap>
          <Link href="/nation">
            <Kind active={pathname === "/nation"}>전국</Kind>
          </Link>
          <Link href="/editorial">
            <Kind active={pathname === "/editorial"}>사설</Kind>
          </Link>
        </GroupWrap>
      </TD>
    </TR>
  );
}

export default ScoreStuList;
