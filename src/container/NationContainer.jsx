import React, { useState } from "react";
import styled from "@emotion/styled/";
import { useDispatch, useSelector } from "react-redux";
import NationList from "../components/NationList";
import NationNew from "../components/NationNew";
import { nationSave, nationRemove, nationEdit } from "../module/nationReducer";

const Table = styled.table`
  border: 1px solid #444444;
  border-collapse: collapse;
  margin: 50px auto 0px;
  width: 50%;
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
    nationId: "",
    nationName: "",
    nationScore: "",
  });

  const dispatch = useDispatch();

  const onRemove = (nationId) => dispatch(nationRemove(nationId));
  const onSave = (saveData) => dispatch(nationSave(saveData));
  const onEdit = (nationId) => dispatch(nationEdit(nationId));

  const changeInput = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setInputData({
      nationId: "",
      nationName: "",
      nationScore: "",
    });
  };

  const { nation } = useSelector((state) => state.nationReducer);

  return (
    <>
      <Table>
        <tbody>
          <TR>
            <TD>시험명</TD>
            <TD>점수</TD>
            <TD>Edit</TD>
            <TD>Delete</TD>
          </TR>
          {nation.map((row) => (
            <NationList
              key={row.nationId}
              nationId={row.nationId}
              nationName={row.nationName}
              nationScore={row.nationScore}
              onRemove={onRemove}
              onEdit={onEdit}
            />
          ))}
        </tbody>
      </Table>
      <NationNew
        onSave={onSave}
        changeInput={changeInput}
        inputData={inputData}
        resetForm={resetForm}
      />
    </>
  );
}

export default StuContainer;
