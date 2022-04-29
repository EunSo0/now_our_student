import React, { useState } from "react";
import styled from "@emotion/styled";
import { MdAdd } from "react-icons/md";
import { useInfoDispatch, useInfoNextId } from "./InfoContext";

const CircleButton = styled.button`
  background: #38d9a9;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }

  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 60px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.125s all ease-in;
  ${(props) =>
    props.open &&
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

function TodoCreate({ onSaveData }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    stuName: "",
    stuSchool: "",
    stuStartYear: "",
    stuStartGrade: "",
    stuSelectedSub: "",
  });

  const dispatch = useInfoDispatch();
  const nextId = useInfoNextId();

  const onToggle = () => setOpen(!open);
  const onChange = (e) => {
    const { stuName, value } = e.target;
    setForm({
      ...form,
      [stuName]: value,
    })
  }
  const onSubmit = (e) => {
    e.preventDefault();
    onSaveData(form);
    dispatch({
      type: "CREATE",
      info: {
        id: nextId.current,
        stuName
        stuSchool
        stuStartYear
        stuStartGrade
        stuSelectedSub
      },
    });
    setValue("");
    setOpen(false);
    nextId.current += 1;
  };

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm onSubmit={onSubmit}>
            <Input
              autoFocus
              placeholder="이름"
              type="text"
              name="stuName"
              onChange={onChange}
              value={form.stuName}
            />
            <Input
              autoFocus
              placeholder="학교"
              type="text"
              name="stuSchool"
              onChange={onChange}
              value={form.stuSchool}
            />
            <Input
              autoFocus
              placeholder="시작연도"
              type="text"
              name="stuStartYear"
              onChange={onChange}
              value={form.stuStartYear}
            />
            <Input
              autoFocus
              placeholder="시작학년"
              type="text"
              name="stuStartGrade"
              onChange={onChange}
              value={form.stuStartGrade}
            />
            <Input
              autoFocus
              placeholder="선택과목"
              type="text"
              name="stuSelectedSub"
              onChange={onChange}
              value={form.stuSelectedSub}
            />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default React.memo(TodoCreate);
