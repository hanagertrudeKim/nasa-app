import React, { useEffect, useState }  from 'react'
import axios from 'axios';
import API_KEY from '../../api/nasaApi';
import * as S from './APOD.style'

export default function APOD() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
    .then((res)=> {
      setData(res.data);
      console.log(res.data)
    })
  },[])


  const PhotoAPOD = () => {
    return (
      <S.PhotoWrap>
        <S.Photo src='' />
      </S.PhotoWrap>
    )
  }

  const VideoAPOD = () => {
    return (
      <S.VideoWrap>
        <S.Title>title : {data.title} </S.Title><br/>
        <h3>date: {data.date} </h3><br />
        explanation : {data.explanation} <br/>
        <S.VideoLink><a href={data.url}>Go to the video</a></S.VideoLink>
      </S.VideoWrap>
    )
  }


  return (
    <S.APODWrap>
      <S.APODTitle> APOD  - Astronomy Picture Of the Day</S.APODTitle> 
      { data.media_type === "image" ? <PhotoAPOD /> : <VideoAPOD /> }
    </S.APODWrap>
  )
}
