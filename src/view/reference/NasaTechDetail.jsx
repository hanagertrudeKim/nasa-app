import React from 'react';
import * as S from './NasaTechDetail.styled';
import { useLocation } from 'react-router-dom';

export default function NasaTechDetail() {
  const location = useLocation();
  const data = location.state;
  console.log(data);

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
