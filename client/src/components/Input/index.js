import React from "react";
import styled from "styled-components";

const Input = styled.input`
  border: none;
  border-radius: 0;
  padding: 5%;
  width: 80%;
  font-size: 1.2em;
`;

const Form = styled.form`
  display: flex;
  border-top: 2px solid #d3d3d3;
`;

const SendButton = styled.button`
  color: #fff !important;
  text-transform: uppercase;
  text-decoration: none;
  background: #2979ff;
  padding: 20px;
  display: inline-block;
  border: none;
  width: 20%;
`;

export default ({ message, setMessage, sendMessage }) => {
  return (
    <Form>
      <Input
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
      />
      <SendButton onClick={sendMessage}>Send</SendButton>
    </Form>
  );
};
