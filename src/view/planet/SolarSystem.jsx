import React, { useState } from 'react';
import BackArrow from '../../assets/svg/back_arrow.svg';
import FowardArrow from '../../assets/svg/foward_arrow.svg';

import * as S from './solarSystem.styled';
import planets from '../../components/static/planetInfo';
import { useEffect } from 'react';

export default function SolarSystem() {
  const [index, setIndex] = useState(1);
  const [status, setStatus] = useState(true);

  const showBar = () => {
    if (window.pageYOffset < 20) {
      setStatus(true);
    } else {
      setStatus(false);
    }
    console.log(window.pageYOffset);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const watch = () => {
      window.addEventListener('scroll', showBar);
    };
    watch();
    return () => {
      window.removeEventListener('scroll', showBar);
    };
  }, []);

  const ClickBack = () => {
    return index === 1 ? setIndex(8) : setIndex(index - 1);
  };

  const ClickFoward = () => {
    return index === 8 ? setIndex(1) : setIndex(index + 1);
  };

  return (
    <S.Wrap>
      {planets
        .filter((data) => data.id === index)
        .map((res) => {
          return (
            <S.DetailWrap key={res.id}>
              <S.ModelWrap>
                <S.ModelDetail>
                  <S.Detail>
                    <S.Title>{res.name}</S.Title>
                    <S.Explain>{res.explain}</S.Explain>
                    <S.InfoWrap>
                      <S.Info>
                        <S.Number>{res.lengthOfYear}</S.Number>
                        <S.Text>EARTH DAYS</S.Text>
                      </S.Info>
                      <S.SubTitle>Length Of Year</S.SubTitle>
                    </S.InfoWrap>
                    <S.InfoWrap>
                      <S.Info>
                        <S.Text>{res.planetType}</S.Text>
                      </S.Info>
                      <S.SubTitle>Type Of Planet</S.SubTitle>
                    </S.InfoWrap>
                  </S.Detail>
                </S.ModelDetail>
                {res.model}
              </S.ModelWrap>

              <S.ModelExplain status={status}>
                <S.Icon src={BackArrow} alt="back" onClick={ClickBack} />
                {res.name}
                <S.Icon src={FowardArrow} alt="back" onClick={ClickFoward} />
              </S.ModelExplain>
            </S.DetailWrap>
          );
        })}
    </S.Wrap>
  );
}
