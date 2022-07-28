import axios from 'axios';
import React, { useEffect, useState } from 'react'
import API_KEY from '../api/nasaApi';
import * as S from './Reference.style'


export default function Asteroid() {

  const [data, setData] = useState([]);
  const [arr, setArr] = useState([]);

  useEffect(() => {

    axios.get(`https://api.nasa.gov/techtransfer/patent/?engine&api_key=${API_KEY}`)
    .then((res)=> {
      setData(res.data);
      setArr(res.data?.results)
      console.log(res.data);
    }).catch((err) => console.log(err));
  },[]);

  return (
    <S.Wrap>
      {arr.map((data) => (
        <div key={data[1]}>{data}[2]</div>
        ))}
    </S.Wrap>
  );
};
