import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  text-align: center;
  color: white;
  background: none;
`;

const DateWrap = styled.div`
  font-size: 18px;
  background: none;
`;

const ClockWrap = styled.div`
  font-size: 27px;
  background: none;
`;

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const today = new Date();

  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const fullDate = month[today.getMonth()] + '  ' + today.getDate() + ' , ' + today.getFullYear();

  return (
    <Wrap>
      <DateWrap>{fullDate}</DateWrap>
      <ClockWrap>{time.toLocaleTimeString()}</ClockWrap>
    </Wrap>
  );
}
