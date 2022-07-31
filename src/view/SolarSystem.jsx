import React from 'react'
import { SolarSystem3dModel } from '../components/3dModel/Solar_system'
import * as S from './SolarSystem.styled'
import MoreBtn from '../components/MoreBtn'

export default function SolarSystem() {
  return (
    <S.Wrap>
      <S.SolarSystemWrap>
      <S.ModelWrap>
        <SolarSystem3dModel />
      </S.ModelWrap>
      <S.ModelExplain>
        Solar System
      </S.ModelExplain>
      <MoreBtn />

      </S.SolarSystemWrap>
    </S.Wrap>
  )
}
