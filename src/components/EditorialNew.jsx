import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";

const CircleButton = styled.button`
  background: #526f5f;
  &:hover {
    background: #779a86;
  }
  &:active {
    background: #8ba897;
  }

  cursor: pointer;
  width: 50px;
  height: 50px;
  display: block;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  position: display;
  bottom: 0px;
  transform: translate(-50%, 50%);
  color: white;
  border-radius: 50%;
  border: none;
  outline: none;
  display: flex;
  margin: 0 50%;

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
  width: 50%;
  bottom: 0;
  left: 0;
  position: display;
  padding: 30px;
  height: 300px;
  margin: auto;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding-left: 32px;
  padding-top: 16px;
  padding-right: 32px;
  padding-bottom: 32px;

  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border: 2px solid #e9ecef;
`;

const Label = styled.a`
  font-weight: 800;
  display: block;
  font-size: 18px;
  text-align: center;
  color: rgb(100, 100, 100);
  margin: 5px 5px 10px;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 16px;
  box-sizing: border-box;
`;

const Save = styled.button`
  border-radius: 6px;
  font-weight: 1000;
  box-sizing: border-box;
  min-width: 82px;
  height: 40px;
  background: transparent;
  color: rgb(53, 53, 53);
  font-size: 13px;
  border: 1px solid rgba(116, 116, 123, 0.5);
  cursor: pointer;
  align-items: center;
  justify-content: center;
  display: block;
  margin: 10px auto;
`;

function EditorialNew({ onSave, changeInput, inputData, resetForm }) {
  const [open, setOpen] = useState(false);
  const onToggle = () => setOpen(!open);

  const saveBtnClick = (e) => {
    e.preventDefault();
    onSave(inputData);
    resetForm();
    setOpen(false);
  };

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm onSubmit={saveBtnClick}>
            <Label>성적 추가</Label>
            <Input
              type="hidden"
              name="editorialId"
              onChange={changeInput}
              value={inputData.editorialId}
            />
            <Input
              placeholder="날짜"
              type="date"
              name="editorialDate"
              onChange={changeInput}
              value={inputData.editorialDate}
            />
            <Input
              placeholder="시험명"
              type="text"
              name="editorialName"
              onChange={changeInput}
              value={inputData.editorialName}
            />
            <Input
              placeholder="점수"
              type="text"
              name="editorialScore"
              onChange={changeInput}
              value={inputData.editorialScore}
            />
            <Save type="submit">저장</Save>
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default EditorialNew;
