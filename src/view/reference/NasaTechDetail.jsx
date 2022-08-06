import React from 'react';
import axios from 'axios';
import API_KEY from '../../api/nasaApi';
import * as S from './nasaTech.styled';
import { useLocation } from 'react-router-dom';

export default function NasaTechDetail() {
  const location = useLocation();
  const data = location.state;

  return (
    <S.Warp>
      <S.TitleWrap to={`/reference/nasaTech/${data[0]}`} state={data} key={data[0]}>
        <S.FrontImg src={data[10]} alt="Nasa Tech" />
        <S.Title>
          {data[2].indexOf('<') > 0
            ? data[2].substr(0, data[2].indexOf('<')) +
              data[2].substr(data[2].indexOf('>') + 1, data[2].indexOf('<') - 3)
            : data[2]}
        </S.Title>
        <S.Number>{data[1]}</S.Number>
      </S.TitleWrap>
      <div dangerouslySetInnerHTML={{ __html: data[3] }}></div>
    </S.Warp>
  );
}
