import React, { useEffect, useState } from 'react';
import * as S from './Asteroid.styled';
import Clock from '../../components/Clock';
import { getAsteroid } from '../../api/nasaApi';

export default function Asteroid() {
  const [data, setData] = useState();

  useEffect(() => {
    getAsteroid().then((res) => {
      setData(res.data);
      console.log(res);
    });
  }, []);

  return (
    <S.Warp>
      <Clock />
      <S.CountWrap>
        <S.CountTitle>현재 지구 주변의 소행성 수</S.CountTitle>
        <S.Count>{data?.element_count}</S.Count>
      </S.CountWrap>
      {/* 날짜 별 소행성 수 알아보기 */}
    </S.Warp>
  );
}
