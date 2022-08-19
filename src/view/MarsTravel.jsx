import * as S from './marsTravel.styled';
import { Email } from './Email';
import { useEffect } from 'react';

export default function MarsTravel() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <S.Wrap>
      <S.Title>Plan to your Mars trip!</S.Title>
      <Email />
    </S.Wrap>
  );
}
