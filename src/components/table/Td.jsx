/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
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
  width: 5%;
`;

function Td({ item, handleRemove, handleEdit }) {
  const onRemove = () => {
    handleRemove(item.id);
  };

  const onEdit = () => {
    handleEdit(item);
  };

  return (
    <TR>
      <TD>{item.id}</TD>
      <TD>{item.name}</TD>
      <TD>{item.email}</TD>
      <TD>{item.phone}</TD>
      <TD>{item.website}</TD>
      <TD>
        <FiEdit onClick={onEdit} size={22} color="#4682B4" />
      </TD>
      <TD>
        <RiDeleteBin6Line onClick={onRemove} size={22} color="#b2443e" />
      </TD>
    </TR>
  );
}

export default Td;
