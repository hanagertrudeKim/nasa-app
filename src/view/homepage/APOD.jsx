import React, { useEffect, useState } from 'react';
import * as S from './apod.styled';
import { getAPOD } from '../../api/nasaApi';

export default function APOD() {
  const [data, setData] = useState();

  useEffect(() => {
    getAPOD().then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);

  const PhotoAPOD = () => {
    return (
      <S.PhotoWrap>
        <S.Photo src={data?.hdurl} />
        <S.ExplainWrap>
          <S.Title>Title : {data?.title} </S.Title>
          <br />
          <S.Explain>
            Date: {data?.date} <br /> <br />
            Explanation : {data?.explanation} <br />
          </S.Explain>
        </S.ExplainWrap>
      </S.PhotoWrap>
    );
  };

  const VideoAPOD = () => {
    return (
      <S.VideoWrap>
        <S.Title>Title : {data?.title} </S.Title>
        <br />
        <S.Explain>
          Date: {data?.date} <br /> <br />
          Explanation : {data?.explanation} <br />
        </S.Explain>
        <S.VideoLink>
          <a href={data?.url}>Go to the video</a>
        </S.VideoLink>
      </S.VideoWrap>
    );
  };

  return (
    <S.APODWrap>
      <S.APODTitle> APOD - Astronomy Picture Of the Day</S.APODTitle>
      {data?.media_type === 'video' ? <VideoAPOD /> : <PhotoAPOD />}
    </S.APODWrap>
  );
}
