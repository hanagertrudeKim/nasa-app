import React, { useState } from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  color: white;
  display: flex;
  place-content: center;
`;

const Button = styled.button`
  color: white;
  margin: 10px;
  font-size: 18px;
  cursor: pointer;
  :hover {
    color: lightblue;
  }
`;

export default function PageNation({ pageArr, setPage }) {
  const [sliceNum, setSliceNum] = useState(0);

  let sliceArr = pageArr.slice(sliceNum, sliceNum + 10);
  console.log(sliceArr);

  return (
    <Wrap>
      <Button onClick={sliceNum === 0 ? null : () => setSliceNum(sliceNum - 10)}>&lt;</Button>
      {sliceArr.map((num) => (
        <Button key={num} onClick={() => setPage(num)}>
          {num}
        </Button>
      ))}
      <Button onClick={() => setSliceNum(sliceNum + 10)}>&gt;</Button>
    </Wrap>
  );
}
