import React from 'react';
import * as S from './apod.styled';
import { getAPOD } from '../../api/nasaApi';
import { useQuery } from 'react-query';

export default function APOD() {
  const { isLoading, error, data } = useQuery('todos', () => getAPOD());

  console.log(data);

  const PhotoAPOD = () => {
    return (
      <S.PhotoWrap>
        <S.Photo src={data?.data?.hdurl} />
        <S.ExplainWrap>
          <S.Title>Title : {data?.data?.title} </S.Title>
          <br />
          <S.Explain>
            Date: {data?.data?.date} <br /> <br />
            Explanation : {data?.data?.explanation} <br />
          </S.Explain>
        </S.ExplainWrap>
      </S.PhotoWrap>
    );
  };

  const VideoAPOD = () => {
    return (
      <S.VideoWrap>
        <S.Title>Title : {data?.data?.title} </S.Title>
        <br />
        <S.Explain>
          Date: {data?.data?.date} <br /> <br />
          Explanation : {data?.data?.explanation} <br />
        </S.Explain>
        <S.VideoLink>
          <a href={data?.data?.url}>Go to the video</a>
        </S.VideoLink>
      </S.VideoWrap>
    );
  };

  return (
    <>
      {isLoading ? (
        <b> Loading .. </b>
      ) : error ? (
        <b>There's an error</b>
      ) : data ? (
        <S.APODWrap>
          <S.APODTitle> APOD - Astronomy Picture Of the Day</S.APODTitle>
          {data?.data?.media_type === 'video' ? <VideoAPOD /> : <PhotoAPOD />}
        </S.APODWrap>
      ) : null}
    </>
  );
}
