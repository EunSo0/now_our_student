/* eslint-disable react/button-has-type */
import React from "react";
import styled from "@emotion/styled/";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

const TR = styled.tr`
  padding: 3px;
`;

const TD = styled.td`
  padding: 3px;
  border: 1px solid #444444;
  text-align: center;
  height: 50px;
  width: 10%;
`;

const TDs = styled.td`
  padding: 3px;
  border: 1px solid #444444;
  text-align: center;
  height: 50px;
  width: 1%;
`;

function EditorialList({
  editorialId,
  editorialDate,
  editorialName,
  editorialScore,
  onRemove,
  onEdit,
}) {
  return (
    <TR>
      <TD>{editorialDate}</TD>
      <TD>{editorialName}</TD>
      <TD>{editorialScore}</TD>
      <TDs>
        <FiEdit onClick={() => onEdit(editorialId)} size={22} color="#4682B4" />
      </TDs>
      <TDs>
        <RiDeleteBin6Line
          onClick={() => onRemove(editorialId)}
          size={22}
          color="#b2443e"
        />
      </TDs>
    </TR>
  );
}

export default EditorialList;
