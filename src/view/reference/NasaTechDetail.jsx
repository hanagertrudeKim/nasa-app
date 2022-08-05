import React, { useEffect, useState } from 'react'
import axios from 'axios';
import API_KEY from '../../api/nasaApi';
import * as S from './nasaTechDetail.styled';

export default function NasaTechDetail() {
  const [data, setData] = useState([]);

  useEffect(() => {

    axios.get(`https://api.nasa.gov/techtransfer/patent/?engine&api_key=${API_KEY}`)
    .then((res)=> {
      (res.data?.results).map((res) => {
      if(document.location.href.split('/').reverse()[0] === res[0]){
        setData(res)
      }
      return res
    })
      console.log(res.data?.results);
    }).catch((err) => console.log(err));
  },[]);

  return (
    <S.Warp>
      <S.TitleWrap>
        <S.Title>
        {data}
        </S.Title>
      </S.TitleWrap>
    </S.Warp>
  )
}
