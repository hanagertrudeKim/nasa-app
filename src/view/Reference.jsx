import axios from 'axios';
import React, { useEffect, useState } from 'react'
import API_KEY from '../api/nasaApi';


export default function Asteroid() {

  const [data, setData] = useState([]);

  useEffect(() => {

    axios.get(`ttps://api.nasa.gov/techport/api/projects/17792?api_key=${API_KEY}`)
    .then((res)=> {
      setData(res.data);
      console.log(res);
    });
  },[])

  return (
    <div>Reference</div>
  )
}
