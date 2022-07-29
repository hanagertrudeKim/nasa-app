import React from 'react';
import * as S from "./Home.style";
import APOD from './APOD';
import { Earth3dModel } from '../../components/3dModel/Earth3dModel';
import Clock from '../../components/clock'

export default function Home() {

  return (
    <S.HomeWrap>
      <Clock />
      <S.EarthWrap>
        <Earth3dModel />
      </S.EarthWrap>
      <APOD />
    </S.HomeWrap>
  )
}
