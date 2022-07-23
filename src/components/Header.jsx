import React from 'react'
import * as S from "./Header.style";

export default function Header() {
  return (
    <S.Wrap>
      <S.Category><S.StledLink to="/writing">Writing</S.StledLink></S.Category>
      <S.Category><S.StledLink to="/project">Project</S.StledLink></S.Category>
      <S.Category><S.StledLink to="/">
        <S.Logo alt="nasa-logo" src="./nasalogo.png" />
      </S.StledLink></S.Category>
      <S.Category><S.StledLink to="/lab">Lab</S.StledLink></S.Category>
      <S.Category><S.StledLink to="/about">About</S.StledLink></S.Category>
    </S.Wrap>
  )
}
