import React, { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';

const BtnWrap = styled.div`
  position: fixed;
  cursor: pointer;
  background-color: rgb(120, 120, 120, 0.8);
  border-radius: 100%;
  width: 60px;
  height: 60px;
  bottom: 50px;
  right: 100px;
  text-align: center;
  display: flex;
  place-content: center;
  place-items: center;
  transition: opacity 0.3s ease-in;
  display: ${(props) => (props.btnStatus ? 'display' : 'none')};
  font-family: 'Roboto';
`;

const Btn = styled.div`
  background: none;
`;

const TopBtn = () => {
  const [btnStatus, setBtnStatus] = useState(false);

  const showBtn = () => {
    if (window.pageYOffset > 500) {
      setBtnStatus(true);
    } else {
      setBtnStatus(false);
    }
    console.log(window.pageYOffset);
  };

  const clickBtn = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setBtnStatus(false);
    console.log('이동');
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', showBtn);
    };
    watch();
    return () => {
      window.removeEventListener('scroll', showBtn);
    };
  }, []);

  return (
    <BtnWrap onClick={clickBtn} btnStatus={btnStatus}>
      <Btn>TOP</Btn>
    </BtnWrap>
  );
};

export default TopBtn;
