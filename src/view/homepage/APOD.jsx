import React from 'react';
import * as S from './apod.styled';
import { getAPOD } from '../../api/nasaApi';
import { useQuery } from 'react-query';

const PhotoAPOD = ({ data }) => {
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

const VideoAPOD = ({ data }) => {
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

export default function APOD() {
  const { isLoading, error, data } = useQuery('apod', getAPOD);

  console.log(data);

  if (isLoading) {
    return (
      <S.APODWrap>
        <S.APODTitle> APOD - Astronomy Picture Of the Day</S.APODTitle>
        <b>loading...</b>
      </S.APODWrap>
    );
  }

  return (
    <S.APODWrap>
      <S.APODTitle> APOD - Astronomy Picture Of the Day</S.APODTitle>
      {isLoading ? (
        <b>loading...</b>
      ) : error ? (
        <b>There's an error...</b>
      ) : data?.data?.media_type === 'video' ? (
        <VideoAPOD data={data} />
      ) : (
        <PhotoAPOD data={data} />
      )}
    </S.APODWrap>
  );
}
