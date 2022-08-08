import React from 'react';
import styled from 'styled-components';

export const ButtonMore = styled.div`
  color: black;
  height: 4vh;
  background-color: #a9d3ee;
  font-size: 15px;
  font-weight: 550;
  display: flex;
  place-items: center;
  place-content: center;
`;

export default function MoreBtn() {
  return <ButtonMore>MORE ▽</ButtonMore>;
}
