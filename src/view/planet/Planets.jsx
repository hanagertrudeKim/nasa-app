import React from 'react';
import * as S from './Planets.styled';
import planetInfo from '../../components/Static/planetInfo';

export default function Planets() {
  return (
    <S.Background>
      <S.Wrap>
        {planetInfo.map((data) => {
          return (
            <S.PlanetWrap key={data.id}>
              <S.Image src={data.image} alt="planet" />
              <S.ExplainWrap>
                <S.Name>{data.name}</S.Name>
                <S.Explain>{data.fullExplain}</S.Explain>
              </S.ExplainWrap>
            </S.PlanetWrap>
          );
        })}
      </S.Wrap>
    </S.Background>
  );
}
