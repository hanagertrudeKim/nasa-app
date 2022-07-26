import React from 'react';
import * as S from "./Home.style";
import APOD from './APOD';



export default function Home() {

  return (
    <S.HomeWrap>
      <APOD />
    </S.HomeWrap>
  )
}
