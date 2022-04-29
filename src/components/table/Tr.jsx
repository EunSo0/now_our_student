/* eslint-disable react/prop-types */
import React from "react";
import Td from "./Td";
import { useInfoState } from "./infoContext";

function Tr() {
  const infos = useInfoState();
  return (
    <tbody>
      {infos.map((info) => {
        return (
          <Td
            key={info.id}
            item={info}
            handleRemove={handleRemove}
            handleEdit={handleEdit}
          />
        );
      })}
    </tbody>
  );
}

export default Tr;
