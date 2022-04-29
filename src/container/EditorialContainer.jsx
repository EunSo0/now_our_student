import React, { useState } from "react";
import styled from "@emotion/styled/";
import { useDispatch, useSelector } from "react-redux";
import EditorialList from "../components/EditorialList";
import EditorialNew from "../components/EditorialNew";
import {
  editorialSave,
  editorialRemove,
  editorialEdit,
} from "../module/editorialReducer";

const Table = styled.table`
  border: 1px solid #444444;
  border-collapse: collapse;
  margin: 100px auto 0px;
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

function EditorialContainer() {
  const [inputData, setInputData] = useState({
    editorialId: "",
    editorialDate: "",
    editorialName: "",
    editorialScore: "",
  });

  const dispatch = useDispatch();

  const onRemove = (editorialId) => dispatch(editorialRemove(editorialId));
  const onSave = (saveData) => dispatch(editorialSave(saveData));
  const onEdit = (editorialId) => dispatch(editorialEdit(editorialId));

  const changeInput = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setInputData({
      editorialId: "",
      editorialDate: "",
      editorialName: "",
      editorialScore: "",
    });
  };

  const { editorial } = useSelector((state) => state.editorialReducer);

  return (
    <>
      <Table>
        <tbody>
          <TR>
            <TD>날짜</TD>
            <TD>시험명</TD>
            <TD>점수</TD>
            <TD>Edit</TD>
            <TD>Delete</TD>
          </TR>
          {editorial.map((row) => (
            <EditorialList
              key={row.editorialId}
              editorialId={row.editorialId}
              editorialDate={row.editorialDate}
              editorialName={row.editorialName}
              editorialScore={row.editorialScore}
              onRemove={onRemove}
              onEdit={onEdit}
            />
          ))}
        </tbody>
      </Table>
      <EditorialNew
        onSave={onSave}
        changeInput={changeInput}
        inputData={inputData}
        resetForm={resetForm}
      />
    </>
  );
}

export default EditorialContainer;
