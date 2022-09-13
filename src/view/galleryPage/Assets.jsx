import React from 'react';
import * as S from './gallery.styled';
import playBtn from '../../assets/image/playButton.png';
import { useQuery } from 'react-query';
import { getImageSearch } from '../../api/nasaApi';

export default function Assets(type) {
  const { data: res } = useQuery(['galley',{search, type, page}], () => getImageSearch(search, type, page))
  
  const arr = res?.data?.collection?.items;

  return (
    <S.AssetsWrap>
      {type === 'image'
        ? arr?.map((data, index) => {
            return (
              <S.ImageWrap
                key={data.data[0].nasa_id}
                onClick={() =>
                  navigate(`/gallery/imageDetail/${data.data[0].nasa_id}`, {
                    state: {
                      data: data.data[0],
                      link: data.links[0],
                    },
                  })
                }
              >
                <S.Asset src={data.links[0].href} alt="image" />
                <S.AssetTitle>{data.data[0].title}</S.AssetTitle>
              </S.ImageWrap>
            );
          })
        : arr?.map((data) => {
            return (
              <S.VideoWrap
                key={data.data[0].nasa_id}
                onClick={() =>
                  navigate(`/gallery/videoDetail/${data.data[0].nasa_id}`, {
                    state: {
                      data: data.data[0],
                      links: data.links[0],
                      json: data.href,
                    },
                  })
                }
              >
                <S.PlayBtn className="play-button" src={playBtn} alt="play" />
                <S.Asset src={data.links[0].href} alt="image" />
                <S.AssetTitle>{data.data[0].title}</S.AssetTitle>
              </S.VideoWrap>
            );
          })}
    </S.AssetsWrap>
  );
}
