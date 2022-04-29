import React, { useState } from "react";
import styled from "@emotion/styled/";
import { useDispatch, useSelector } from "react-redux";
import StuList from "../components/StuList";
import StuNew from "../components/StuNew";
import { stuSave, stuRemove, stuEdit } from "../module/stuReducer";

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

function StuContainer() {
  const [inputData, setInputData] = useState({
    stuId: "",
    stuName: "",
    stuSchool: "",
    stuStartYear: "",
    stuStartGrade: "",
    stuSelectedSub: "",
  });

  const dispatch = useDispatch();

  const onRemove = (stuId) => dispatch(stuRemove(stuId));
  const onSave = (saveData) => dispatch(stuSave(saveData));
  const onEdit = (stuId) => dispatch(stuEdit(stuId));

  const changeInput = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setInputData({
      stuId: "",
      stuName: "",
      stuSchool: "",
      stuStartYear: "",
      stuStartGrade: "",
      stuSelectedSub: "",
    });
  };

  const { information } = useSelector((state) => state.stuReducer);

  return (
    <>
      <Table>
        <tbody>
          <TR>
            <TD>이름</TD>
            <TD>학교</TD>
            <TD>시작 연도</TD>
            <TD>시작 학년</TD>
            <TD>선택과목</TD>
            <TD>Edit</TD>
            <TD>Delete</TD>
          </TR>
          {information.map((row) => (
            <StuList
              key={row.stuId}
              stuId={row.stuId}
              stuName={row.stuName}
              stuSchool={row.stuSchool}
              stuStartYear={row.stuStartYear}
              stuStartGrade={row.stuStartGrade}
              stuSelectedSub={row.stuSelectedSub}
              onRemove={onRemove}
              onEdit={onEdit}
            />
          ))}
        </tbody>
      </Table>
      <StuNew
        onSave={onSave}
        changeInput={changeInput}
        inputData={inputData}
        resetForm={resetForm}
      />
    </>
  );
}

export default StuContainer;
