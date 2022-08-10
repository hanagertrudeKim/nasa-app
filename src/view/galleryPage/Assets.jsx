import React from 'react';
import * as S from './gallery.styled';
import playBtn from '../../assets/image/playButton.png';
import { useNavigate } from 'react-router-dom';

export default function Assets({ type, arr }) {
  const navigate = useNavigate();

  return (
    <S.AssetsWrap>
      {type === 'image'
        ? arr.map((data) => {
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
        : arr.map((data) => {
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
