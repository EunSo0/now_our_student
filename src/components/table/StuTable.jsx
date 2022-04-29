/* eslint-disable no-shadow */
/* eslint-disable react/jsx-filename-extension */
import React, { useRef, useState } from "react";
import styled from "@emotion/styled/";
import { useInfoState, useInfoNextId } from "./infoContext";
import Modal from "./Modal";
import Post from "./Post";
import Tr from "./Tr";

const Table = styled.table`
  border: 1px solid #444444;
  border-collapse: collapse;
  margin: 100px auto 0px;
  width: 70%;
`;

const Thead = styled.thead``;

const TH = styled.th`
  border: 1px solid #444444;
  padding: 3px;
  text-align: center;
  height: 50px;
`;

const TR = styled.tr`
  text-align: center;
`;

function StuTable() {
  const [info, setInfo] = useState([]);
  const [selected, setSelected] = useState("");
  const [modalOn, setModalOn] = useState(false);

  const handleSave = (data) => {
    // 데이터 수정하기
    if (data.id) {
      // 수정 데이터에는 id가 존재
      setInfo(
        info.map((row) =>
          data.id === row.id
            ? {
                id: data.id,
                name: data.name,
                email: data.email,
                phone: data.phone,
                website: data.website,
              }
            : row
        )
      );
    } else {
      setInfo((prev) => {
        return [
          ...prev,
          {
            id: nextId.current,
            name: data.name,
            email: data.email,
            phone: data.phone,
            website: data.website,
          },
        ];
      });
      nextId.current += 1;
    }
  };

  const handleRemove = (id) => {
    setInfo((info) => info.filter((item) => item.id !== id));
  };

  const handleEdit = (item) => {
    setModalOn(true);
    const selectedData = {
      id: item.id,
      name: item.name,
      email: item.email,
      phone: item.phone,
      website: item.website,
    };
    setSelected(selectedData);
  };

  const handleCancel = () => {
    setModalOn(false);
  };

  const handleEditSubmit = (item) => {
    handleSave(item);
    setModalOn(false);
  };

  return (
    <div>
      <Table>
        <Thead>
          <TR>
            <TH>이름</TH>
            <TH>학교</TH>
            <TH>시작연도</TH>
            <TH>시작학년</TH>
            <TH>선택과목</TH>
            <TH>Edit</TH>
            <TH>Delete</TH>
          </TR>
        </Thead>
        <Tr info={info} handleRemove={handleRemove} handleEdit={handleEdit} />
      </Table>
      <Post onSaveData={handleSave} />
      {modalOn && (
        <Modal
          selectedData={selected}
          handleCancel={handleCancel}
          handleEditSubmit={handleEditSubmit}
        />
      )}
    </div>
  );
}

export default StuTable;
