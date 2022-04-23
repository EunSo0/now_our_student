import React from "react";
import styled from "@emotion/styled";

const Base = styled.footer`
  display: block;
  box-sizing: border-box;
  width: 100%;
`;

const Section = styled.section`
  background-color: #1c1d1f;
`;

function Footer() {
  return (
    <Base>
      <Section />
    </Base>
  );
}

export default Footer;
