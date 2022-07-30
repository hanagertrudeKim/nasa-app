import React from 'react';
import * as S from "./Home.style";
import APOD from './APOD';
import { Earth3dModel } from '../../components/3dModel/Earth3dModel';
import Clock from '../../components/clock'

export default function Home() {

  return (
    <S.HomeWrap>
      <S.ClockWrap>
        <Clock />
      </S.ClockWrap>
      <S.ModelWrap>
        <Earth3dModel />
      </S.ModelWrap>
      <APOD />
    </S.HomeWrap>
  )
}
