/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
import styled from "@emotion/styled/";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useInfoState, useInfoDispatch } from "./infoContext";

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

function Td(id) {
  const info = useInfoState();
  const dispatch = useInfoDispatch();

  const onRemove = () => dispatch({ type: "REMOVE", id });

  return (
    <TR>
      <TD>{info.stu_name}</TD>
      <TD>{info.stu_school}</TD>
      <TD>{info.stu_start_year}</TD>
      <TD>{info.stu_start_grade}</TD>
      <TD>{info.stu_selected_sub}</TD>
      <TD>
        <FiEdit size={22} color="#4682B4" />
      </TD>
      <TD>
        <RiDeleteBin6Line onClick={onRemove} size={22} color="#b2443e" />
      </TD>
    </TR>
  );
}

export default Td;
