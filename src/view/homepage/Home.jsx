import React from 'react';
import * as S from './home.styled';
import APOD from './APOD';
import { Earth3dModel } from '../../components/3dModel/Earth';
import Clock from '../../components/Clock';

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
  );
}
