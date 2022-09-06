import React from 'react';
import * as S from './nasaTechDetail.styled';
import { getNasaTech } from '../../api/nasaApi';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

export default function NasaTechDetail() {
  const { data: res } = useQuery('nasatech', getNasaTech);
  const { id } = useParams();

  const data = res?.data?.results[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);

  return (
    <>
      {data && (
        <S.Warp>
          <S.TitleWrap>
            <S.Title dangerouslySetInnerHTML={{ __html: data[2] }}></S.Title>
          </S.TitleWrap>
          <S.ExplainWrap>
            <div>
              <S.CaseNum>Case-Number : {data[1]}</S.CaseNum>
              <S.Explain dangerouslySetInnerHTML={{ __html: data[3] }}></S.Explain>
            </div>
            <S.Image src={data[10]} alt="nasaTech image" />
          </S.ExplainWrap>
        </S.Warp>
      )}
    </>
  );
}
