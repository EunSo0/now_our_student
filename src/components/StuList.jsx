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
  width: 5%;
`;

function StuList({
  stuId,
  stuName,
  stuSchool,
  stuStartYear,
  stuStartGrade,
  stuSelectedSub,
  onRemove,
  onEdit,
}) {
  return (
    <TR>
      <TD>{stuName}</TD>
      <TD>{stuSchool}</TD>
      <TD>{stuStartYear}</TD>
      <TD>{stuStartGrade}</TD>
      <TD>{stuSelectedSub}</TD>
      <TD>
        <FiEdit onClick={() => onEdit(stuId)} size={22} color="#4682B4" />
      </TD>
      <TD>
        <RiDeleteBin6Line
          onClick={() => onRemove(stuId)}
          size={22}
          color="#b2443e"
        />
      </TD>
    </TR>
  );
}

export default StuList;
