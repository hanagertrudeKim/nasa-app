import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  text-align: center;
  color: rgb(71 218 132);
  background: none;
  margin-bottom: 20px;
`;

const ClockWrap = styled.div`
  font-size: 15px;
  background: none;
`;

export default function AsteroidClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <Wrap>
      <ClockWrap>{time.toLocaleTimeString()}</ClockWrap>
    </Wrap>
  );
}
