import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux/es/exports';
import API_KEY from '../../api/nasaApi';
import * as S from './Asteroid.style';
import Clock from '../../components/clock';


export default function Asteroid() {

  const [data, setData] = useState();

  useEffect(() => {

    axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=2022-07-27&end_date=2022-07-27&api_key=${API_KEY}`)
    .then((res)=> {
      setData(res.data);
      console.log(res);
    });
  },[])


  return (
    <S.Warp> 
      <Clock />
      <S.CountWrap>
        <S.CountTitle>현재 지구 주변의 소행성 수</S.CountTitle>
        <S.Count>{data?.element_count}</S.Count>  
      </S.CountWrap>
      {/* 날짜 별 소행성 수 알아보기 */}
    </S.Warp>
  )
}
