import React, { useState } from "react";
import styled from "@emotion/styled";
import { useInfoState } from "./InfoContext";

const InfoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function InfoTable() {
  const info = useInfoState();
  const [modalOn, setModalOn] = useState(false);

  return (
    <InfoListBlock>
      {info.map((_info) => (
        <InfoItem
          key={_info.id}
          id={_info.id}
          stuName={_info.stuName}
          stuSchool={_info.stuSchool}
          stuStartYear={_info.stuSchool}
          stuStartGrade={_info.stuStartGrade}
          stuSelectedSub={_info.stuSelectedSub}
        />
      ))}
    </InfoListBlock>
  );
}

export default InfoTable;
