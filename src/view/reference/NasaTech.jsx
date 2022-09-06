import React, { useEffect } from 'react';
import * as S from './nasaTech.styled';
import { getNasaTech } from '../../api/nasaApi';
import TopBtn from '../../components/TopBtn';
import { useQuery } from 'react-query';

export default function NasaTech() {
  const { data: res } = useQuery('nasatech', getNasaTech);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <S.Wrap>
      {res?.data?.results.map((data, index) => {
        return (
          <>
            <TopBtn />
            <S.TitleWrap to={`/reference/nasaTech/${index}`} key={data[0]}>
              <S.FrontImg src={data[10]} alt="Nasa Tech" />
              <S.Title dangerouslySetInnerHTML={{ __html: data[2] }}></S.Title>
              <S.Number>{data[1]}</S.Number>
            </S.TitleWrap>
          </>
        );
      })}
    </S.Wrap>
  );
}
