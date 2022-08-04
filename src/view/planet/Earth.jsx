import {Earth3dModel} from "../../components/3dModel/Earth3dModel"
import * as S from './Earth.styled'
import MoreBtn from "../../components/MoreBtn"

export default function Earth() {
  return (
    <S.Wrap>
      <S.EarthWrap>
      <S.ModelWrap>
        <Earth3dModel />
      </S.ModelWrap>
    <S.ModelExplain>
      Earth
    </S.ModelExplain>
    <MoreBtn />
    </S.EarthWrap>
    </S.Wrap>
  )
}
