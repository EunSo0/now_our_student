import React from "react";
import styled from "@emotion/styled/";
import { useSelector } from "react-redux";
import ScoreStuList from "../components/ScoreStuList";

const Table = styled.table`
  border: 1px solid #444444;
  border-collapse: collapse;
  margin: 100px auto 0px;
  width: 70%;
`;

const TR = styled.tr`
  padding: 3px;
  background: #f6e9d1;
`;
const TD = styled.td`
  padding: 3px;
  border: 1px solid #444444;
  text-align: center;
  height: 50px;
  width: 5%;
  font-weight: 1000;
`;

function ScoreStuContainer() {
  const { information } = useSelector((state) => state.stuReducer);

  return (
    <Table>
      <tbody>
        <TR>
          <TD>이름</TD>
          <TD>학교</TD>
          <TD>시작 연도</TD>
          <TD>시작 학년</TD>
          <TD>선택과목</TD>
        </TR>
        {information.map((row) => (
          <ScoreStuList
            key={row.stuId}
            stuId={row.stuId}
            stuName={row.stuName}
            stuSchool={row.stuSchool}
            stuStartYear={row.stuStartYear}
            stuStartGrade={row.stuStartGrade}
            stuSelectedSub={row.stuSelectedSub}
          />
        ))}
      </tbody>
    </Table>
  );
}

export default ScoreStuContainer;
