import React, { useEffect, useRef, useState } from 'react';
import * as S from './gallery.styled';
import Assets from './Assets';

export default function Gallery() {
  const searchRef = useRef();
  const typeRef = useRef();
  const [search, setSearch] = useState('');
  const [type, setType] = useState('image');

  useEffect(() => {
    setSearch(sessionStorage.getItem('search'));
    setType(sessionStorage.getItem('type'));
    searchRef.current.value = search;
    typeRef.current.value = type;
  }, [search, type]);

  const submit = (e) => {
    e.preventDefault();
    setSearch(searchRef.current?.value);
    sessionStorage.setItem('search', searchRef.current?.value);
  };

  const changeType = () => {
    setType(typeRef.current?.value);
    sessionStorage.setItem('type', typeRef.current?.value);
  };

  console.log(typeRef.current?.value);

  return (
    <S.Wrap>
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
      <Assets search={search} type={type} />
      {/*pagenation*/}
    </S.Wrap>
  );
}
