import * as S from './MarsTravel.styled';
import { Email } from './Email';

export default function MarsTravel() {
  return (
    <S.Wrap>
      <S.Title>Plan to your mars trip!</S.Title>
      <Email />
    </S.Wrap>
  );
}
