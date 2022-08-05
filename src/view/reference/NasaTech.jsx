import axios from 'axios';
import React, { useEffect, useState } from 'react'
import API_KEY from '../../api/nasaApi';
import * as S from './nasaTech.styled'


export default function NasaTech() {

  const [data, setData] = useState([]);
  const [arr, setArr] = useState([]);

  useEffect(() => {

    axios.get(`https://api.nasa.gov/techtransfer/patent/?engine&api_key=${API_KEY}`)
    .then((res)=> {
      setData(res.data);
      setArr(res.data?.results)
      console.log(res.data?.results);

    }).catch((err) => console.log(err));
  },[]);

  return (
    <S.Wrap>
      {arr.map((data) => {
      return (
        <>
        <S.TitleWrap to={`/reference/nasaTech/${data[0]}`} key={data[0]}>
        <S.FrontImg src={data[10]}/>
        <S.Title>{data[2].indexOf("<") > 0 ?
        (data[2].substr(0, data[2].indexOf("<"))) + (data[2].substr(data[2].indexOf(">")+1, data[2].indexOf("<")-3))
       : data[2]}</S.Title>
       <S.Number>{data[1]}</S.Number>
       </S.TitleWrap>
       </>
      )
     })}
    </S.Wrap>
  );
};
