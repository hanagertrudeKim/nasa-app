import React, { useEffect } from 'react';
import { getAssets, getImageSearch } from '../api/nasaApi';
import * as S from './Images.styled';

export default function Images() {
  useEffect(() => {
    getAssets().then((res) => {
      console.log(res);
    });
  }, []);

  return <S.Wrap></S.Wrap>;
}
