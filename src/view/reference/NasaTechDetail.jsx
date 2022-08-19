import React from 'react';
import * as S from './nasaTechDetail.styled';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function NasaTechDetail() {
  const location = useLocation();
  const data = location.state;
  console.log(data);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);

  return (
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
  );
}
