/* eslint-disable react/prop-types */
import React, { useReducer, createContext, useContext, useRef } from "react";

const initialInfo = [
  {
    id: 1,
    stuName: "이은수",
    stuSchool: "경복여자고등학교",
    stuStartYear: 2021,
    stuStartGrade: "1학년",
    stuSelectedSub: "수학",
  },
];

function infoReducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.info);
    case "REMOVE":
      return state.filter((info) => info.id !== action.id);
    case "EDIT":
      return;
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

const InfoStateContext = createContext();
const InfoDispatchContext = createContext();
const InfoNextIdContext = createContext();

export function InfoProvider({ children }) {
  const [state, dispatch] = useReducer(infoReducer, initialInfo);
  const nextId = useRef(2);
  return (
    <InfoStateContext.Provider value={state}>
      <InfoDispatchContext.Provider value={dispatch}>
        <InfoNextIdContext.Provider value={nextId}>
          {children}
        </InfoNextIdContext.Provider>
      </InfoDispatchContext.Provider>
    </InfoStateContext.Provider>
  );
}

export function useInfoState() {
  return useContext(InfoStateContext);
}

export function useInfoDispatch() {
  return useContext(InfoDispatchContext);
}

export function useInfoNextId() {
  return useContext(InfoNextIdContext);
}
