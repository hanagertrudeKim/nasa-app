import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';

const Wrap = styled.div`
  * {
    background: none;
    background-color: none;
  }
  margin-top: 100px;
`;

const Lavel = styled.label`
  font-family: 'Montserrat';
  color: black;
  font-weight: 200;
  font-size: 20px;
  letter-spacing: 3px;
  background: none;
  margin-left: 50px;
  margin-right: 50px;
  width: 130px;
`;

const Input = styled.input`
  background: none;
  outline: none;
  height: 20px;
  width: 250px;
  font-size: 15px;
  padding: 10px;
  border: 0.7px solid gray;
  font-family: monospace;
  :focus {
    background-color: rgb(240, 240, 240, 0.2);
  }
`;

const Form = styled.form`
  background: none;
`;

const SubWrap = styled.div`
  margin: 40px;
  display: flex;
  align-items: flex-start;
  justify-items: center;
`;

const Message = styled.textarea`
  height: 200px;
  width: 50vw;
  border: 0.7px solid gray;
  padding: 10px;
  outline: none;
  :focus {
    background-color: rgb(240, 240, 240, 0.2);
  }
`;

const InputBtn = styled.input`
  background: none;
  outline: none;
  height: 30px;
  width: 50px;
  cursor: pointer;
  margin-left: 950px;
  border: 0.7px solid black;
  color: black;
  font-family: 'Montserrat';
  font-weight: 300;
`;

export const Email = () => {
  const form = useRef();
  const messageRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_eaclzul', 'template_ey4bhs7', form.current, 'MgEX-M6RWTIlSSO3n').then(
      (result) => {
        console.log(result.text);
        alert('complete sending message!');
        messageRef.current.value = '';
      },
      (error) => {
        console.log(error.text);
      },
    );
  };

  return (
    <Wrap>
      <Form ref={form} onSubmit={sendEmail}>
        <SubWrap>
          <Lavel>Name</Lavel>
          <Input type="text" name="user_name" />
        </SubWrap>
        <SubWrap>
          <Lavel>Email</Lavel>
          <Input type="email" name="user_email" />
        </SubWrap>
        <SubWrap>
          <Lavel>Message</Lavel>
          <Message name="message" ref={messageRef} />
        </SubWrap>
        <InputBtn type="submit" value="Send" />
      </Form>
    </Wrap>
  );
};
