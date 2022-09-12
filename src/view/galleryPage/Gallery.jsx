import React, { useEffect, useRef, useState } from 'react';
import * as S from './gallery.styled';
import Assets from './Assets';
import { getImageSearch } from '../../api/nasaApi';
import PageNation from './PageNation';
import TopBtn from '../../components/TopBtn';
import { useQuery } from 'react-query';

export default function Gallery() {
  const searchRef = useRef();
  const typeRef = useRef();
  const [search, setSearch] = useState('');
  const [type, setType] = useState('image');
  const [page, setPage] = useState(1);
  const pageArr = [];

  const { data: res } = useQuery(['galley',{search, type, page}], () => getImageSearch(search, type, page))

  const arr = res?.data?.collection?.items;
  console.log(arr);
  const allData = res?.data

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  for (let i = 1; i <= Math.ceil(allData?.collection?.metadata?.total_hits / 100); i++) {
    pageArr.push(i);
  }
  console.log(pageArr);

  const submit = (e) => {
    e.preventDefault();
    setSearch(searchRef.current?.value);
  };

  const changeType = () => {
    setType(typeRef.current?.value);
  };

  console.log(typeRef.current?.value);

  return (
    <S.Wrap>
      <TopBtn />
      <S.Title>Gallery</S.Title>
      <S.SearchWrap onSubmit={submit}>
        <S.Search placeholder="search" ref={searchRef}></S.Search>
        <S.SubmitBtn>🔍</S.SubmitBtn>
        <div></div>
        <S.Type ref={typeRef} onChange={changeType}>
          <S.Option>image</S.Option>
          <S.Option>video</S.Option>
        </S.Type>
      </S.SearchWrap>
      <Assets type={type} arr={arr} />
      <PageNation pageArr={pageArr} setPage={setPage} />
    </S.Wrap>
  );
}
