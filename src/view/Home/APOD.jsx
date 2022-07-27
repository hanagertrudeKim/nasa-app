import React, { useEffect, useState }  from 'react'
import axios from 'axios';
import API_KEY from '../../api/nasaApi';
import * as S from './APOD.style'


export default function APOD() {
  const [data, setData] = useState();
  const [mediaType, setMediaType] = useState();

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
    .then((res)=> {
      setData(res.data);
      setMediaType(res.data.media_type);
      console.log(res.data);
    })
  },[])


  const PhotoAPOD = () => {
    return (
      <S.PhotoWrap>
        <S.Photo src={data.hdurl} />
        <S.ExplainWrap>
        <S.Title>Title : {data.title} </S.Title><br/>
        <S.Explain>date: {data.date} <br/> <br/>
        explanation : {data.explanation} <br/></S.Explain>
        </S.ExplainWrap>
      </S.PhotoWrap>
    )
  }

  const VideoAPOD = () => {
    return (
      <S.VideoWrap>
        <S.Title>Title : {data.title} </S.Title><br/>
        <S.Explain>date: {data.date} <br/> <br/>
        explanation : {data.explanation} <br/></S.Explain>
        <S.VideoLink><a href={data.url}>Go to the video</a></S.VideoLink>
      </S.VideoWrap>
    )
  }


  return (
    <S.APODWrap>
      <S.APODTitle> APOD  - Astronomy Picture Of the Day</S.APODTitle> 
      {mediaType === "video" ? <VideoAPOD /> : <PhotoAPOD />}
    </S.APODWrap>
  )
}
