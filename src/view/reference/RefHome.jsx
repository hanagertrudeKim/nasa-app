import React from 'react'
import NasaTech from './NasaTech'
import * as S from "./refHome.styled"

export default function RefHome() {
  return (
    <S.Wrap>
      <S.Title>
        TechPort
      </S.Title>
      <S.Reference>
      <NasaTech />
      </S.Reference>
    </S.Wrap>
  )
}
