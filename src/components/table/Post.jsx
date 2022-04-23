/* eslint-disable react/prop-types */
import React, { useState } from "react";
// import styled from "@emotion/styled/";

import styled from "@emotion/styled";

const Form = styled.form`
  mardin: auto;
`;
const Div = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px;
`;

function Post({ onSaveData }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSaveData(form);
    setForm({
      name: "",
      email: "",
      phone: "",
      website: "",
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Div>
        <label htmlFor="username">
          Name
          <input
            required
            placeholder="이름을 입력해주세요"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </label>
      </Div>
      <Div>
        <label htmlFor="email">
          Email
          <input
            required
            placeholder="이메일 주소를 입력해주세요"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </label>
      </Div>
      <Div>
        <label htmlFor="phone">
          Phone
          <input
            required
            placeholder="핸드폰 번호를 입력해주세요"
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
          />
        </label>
      </Div>
      <Div>
        <label htmlFor="website">
          Website
          <input
            required
            placeholder="사이트 주소를 입력해주세요"
            type="text"
            name="website"
            value={form.website}
            onChange={handleChange}
          />
        </label>
      </Div>
      <Div className="text-center">
        <button type="submit">저장</button>
      </Div>
    </Form>
  );
}

export default Post;
