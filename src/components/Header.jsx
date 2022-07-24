import React from 'react'
import * as S from "./Header.style";

export default function Header() {
  return (
    <S.Wrap>
      <S.Category><S.StledLink to="/solarSystem">Solar System</S.StledLink></S.Category>
      <S.Category><S.StledLink to="/planet">Planet</S.StledLink></S.Category>
      <S.Category><S.StledLink to="/">
        <S.Logo alt="nasa-logo" src="./nasalogo.png" />
      </S.StledLink></S.Category>
      <S.Category><S.StledLink to="/reference">Reference</S.StledLink></S.Category>
      <S.Category><S.StledLink to="/marsTravel">Mars-Travel</S.StledLink></S.Category>
    </S.Wrap>
  );
};
