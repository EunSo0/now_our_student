import React from "react";
import styled from "@emotion/styled/";
import Header from "../components/Header";
import Chart from "../components/Chart";
import NationContainer from "../container/NationContainer";

const ChartWrap = styled.div`
  display: flex;
  margin: 100px auto 50px;
  align-items: center;
  justify-content: center;
  height: 300px;
`;

export default function NationScore() {
  return (
    <>
      <Header />
      <ChartWrap>
        <Chart />
      </ChartWrap>
      <NationContainer />
    </>
  );
}
