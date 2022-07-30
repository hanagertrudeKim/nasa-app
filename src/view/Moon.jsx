import React from 'react'
import { Moon3dModel } from '../components/3dModel/Moon3dModel'
import * as S from './Moon.styled'
import Clock from '../components/clock'

export default function Planet() {

  return (
    <S.Wrap>
      <S.ClockWrap>
        <Clock />
      </S.ClockWrap>
      <S.ModelWrap>
        <Moon3dModel />
      </S.ModelWrap>
    </S.Wrap>
  )
}
