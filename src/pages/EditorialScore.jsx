import React from "react";
import styled from "@emotion/styled/";
import Header from "../components/Header";
import Chart from "../components/Chart";
import EditorialContainer from "../container/EditorialContainer";

const ChartWrap = styled.div`
  display: flex;
  margin: 100px auto;
  align-items: center;
  justify-content: center;
  height: 300px;
`;

export default function EditorialScore() {
  return (
    <>
      <Header />
      <ChartWrap>
        <Chart />
      </ChartWrap>
      <EditorialContainer />
    </>
  );
}
