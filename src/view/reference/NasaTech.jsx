import React, { useEffect, useState } from 'react';
import * as S from './nasaTech.styled';
import { getNasaTech } from '../../api/nasaApi';
import TopBtn from '../../components/TopBtn';

export default function NasaTech() {
  const [data, setData] = useState([]);
  const [arr, setArr] = useState([]);

  useEffect(() => {
    getNasaTech()
      .then((res) => {
        setData(res.data);
        setArr(res.data?.results);
        console.log(res.data?.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <S.Wrap>
      {arr.map((data) => {
        return (
          <>
            <TopBtn />
            <S.TitleWrap to={`/reference/nasaTech/${data[0]}`} state={data} key={data[0]}>
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
