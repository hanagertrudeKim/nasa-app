import React from 'react'
import { SolarSystem3dModel } from '../components/3dModel/Solar_system'
import * as S from './SolarSystem.styled'

export default function SolarSystem() {
  return (
    <S.Wrap>
      <S.ModelWrap>
        <SolarSystem3dModel />
      </S.ModelWrap>
    </S.Wrap>
  )
}
