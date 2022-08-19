import React, { useEffect, useRef, useState } from 'react';
import * as S from './gallery.styled';
import Assets from './Assets';
import { getImageSearch } from '../../api/nasaApi';
import PageNation from './PageNation';
import TopBtn from '../../components/TopBtn';

export default function Gallery() {
  const searchRef = useRef();
  const typeRef = useRef();
  const [search, setSearch] = useState('');
  const [type, setType] = useState('image');
  const [arr, setArr] = useState([]);
  const [allData, setAllData] = useState();
  const [page, setPage] = useState(1);
  const pageArr = [];

  useEffect(() => {
    getImageSearch(search, type, page).then((res) => {
      setArr(res?.data?.collection?.items);
      setAllData(res?.data);
      console.log(res?.data.collection.metadata.total_hits);
    });
    window.scrollTo(0, 0);
  }, [search, type, page]);

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
