import React, { useEffect, useRef, useState } from 'react';
import { getImageSearch } from '../../api/nasaApi';
import * as S from './gallery.styled';
import playBtn from '../../assets/image/playButton.png';
import { useNavigate } from 'react-router-dom';

export default function Gallery() {
  const searchRef = useRef();
  const typeRef = useRef();
  const [search, setSearch] = useState('');
  const [type, setType] = useState('image');
  const [arr, setArr] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setType(typeRef.current?.value);

    getImageSearch(search, type).then((res) => {
      setArr(res?.data?.collection?.items);
      console.log(res?.data?.collection?.items);
    });
  }, [search, type]);

  const submit = (e) => {
    e.preventDefault();
    setSearch(searchRef.current?.value);
  };

  console.log(typeRef.current?.value);

  return (
    <S.Wrap>
      <S.Title>GALLERY</S.Title>
      <S.SearchWrap onSubmit={submit}>
        <S.Search placeholder="search" ref={searchRef}></S.Search>
        <S.SubmitBtn>🔍</S.SubmitBtn>
        <div></div>
        <S.Type ref={typeRef}>
          <S.Option>image</S.Option>
          <S.Option>video</S.Option>
        </S.Type>
      </S.SearchWrap>
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
    </S.Wrap>
  );
}
