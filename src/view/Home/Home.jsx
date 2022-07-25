import React, { useEffect, useState } from 'react';
import * as S from "./Home.style";
import axios from 'axios';
import API_KEY from '../../api/nasaApi';
import Planet from './Planet';



export default function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=${API_KEY}`)
    .then((res)=> {
      setData(res);
    })
  },[])

  return (
    <S.HomeWrap>
      <Planet />
    </S.HomeWrap>
  )
}
