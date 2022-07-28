import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import API_KEY from '../api/nasaApi';


export default function MarsTravel() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  useEffect(() => {

    axios.post(`https://api.nasa.gov/insight_weather/?api_key=${API_KEY}&feedtype=json&ver=1.0`, {
      "sol_keys": ["259", "260", "261", "262", "263", "264", "265"]
    })
    .then((res) => {
      setData(res);
      console.log(res);
    });

  },[])


  return (
    <div>MarsTravel</div>
  )
}
