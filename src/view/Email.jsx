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
  font-size: 23px;
  letter-spacing: 3px;
  background: none;
  margin-top: 100px;
  margin-left: 50px;
  margin-right: 50px;
`;

const Input = styled.input`
  background: none;
  outline: none;
  height: 30px;
  width: 270px;
  font-size: 15px;
  padding: 5px;
  border: 0.7px solid gray;
`;

const Form = styled.form`
  background: none;
`;

const SubWrap = styled.div`
  margin: 50px;
`;

const InputBtn = styled.input`
  background: none;
  outline: none;
  height: 30px;
  width: 50px;
  cursor: pointer;
`;

const Message = styled.textarea`
  height: 300px;
  width: 50vw;
  border: 0.7px solid gray;
  padding: 5px;
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
          <InputBtn type="submit" value="Send" />
        </SubWrap>
      </Form>
    </Wrap>
  );
};
